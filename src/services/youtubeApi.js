// YouTube API Configuration and Services
import cacheService from '../utils/cacheService';

const YOUTUBE_API_KEY = "AIzaSyD5eOkoK_uJ53fy9jMvwxwUQ4Vtf7MG6aU";
const CHANNEL_ID = "UCmGfAOZOAgYZZ_fj_GgzB2Q";
const BASE_URL = "https://www.googleapis.com/youtube/v3";

// Helper function to make API requests with caching
const fetchFromYouTube = async (endpoint, params = {}, cacheTTL = 24 * 60 * 60 * 1000) => {
  // Create cache key from endpoint and params
  const cacheKey = `yt-${endpoint}-${JSON.stringify(params)}`;
  
  // Check cache first
  const cachedData = cacheService.get(cacheKey);
  if (cachedData) {
    console.log(`[Cache Hit] YouTube API: ${endpoint}`, params);
    return cachedData;
  }

  // Fetch from YouTube API if not cached
  console.log(`[Cache Miss] Fetching from YouTube API: ${endpoint}`, params);
  const urlParams = new URLSearchParams({
    key: YOUTUBE_API_KEY,
    ...params
  });
  
  try {
    const response = await fetch(`${BASE_URL}/${endpoint}?${urlParams}`);
    if (!response.ok) {
      throw new Error(`YouTube API Error: ${response.status}`);
    }
    const data = await response.json();
    
    // Cache the response
    cacheService.set(cacheKey, data, cacheTTL);
    
    return data;
  } catch (error) {
    console.error("YouTube API fetch error:", error);
    throw error;
  }
};

// Get channel information
export const getChannelInfo = async () => {
  try {
    const data = await fetchFromYouTube("channels", {
      part: "snippet,statistics,brandingSettings",
      id: CHANNEL_ID
    });
    
    if (data.items && data.items.length > 0) {
      const channel = data.items[0];
      return {
        id: channel.id,
        title: channel.snippet.title,
        description: channel.snippet.description,
        customUrl: channel.snippet.customUrl,
        publishedAt: channel.snippet.publishedAt,
        thumbnails: channel.snippet.thumbnails,
        country: channel.snippet.country,
        viewCount: channel.statistics.viewCount,
        subscriberCount: channel.statistics.subscriberCount,
        videoCount: channel.statistics.videoCount,
        keywords: channel.brandingSettings?.channel?.keywords,
        bannerExternalUrl: channel.brandingSettings?.image?.bannerExternalUrl
      };
    }
    return null;
  } catch (error) {
    console.error("Error fetching channel info:", error);
    return null;
  }
};

// Get playlists from channel
export const getChannelPlaylists = async (maxResults = 10) => {
  try {
    const data = await fetchFromYouTube("playlists", {
      part: "snippet,contentDetails",
      channelId: CHANNEL_ID,
      maxResults
    });
    
    if (data.items) {
      return data.items.map(playlist => ({
        id: playlist.id,
        title: playlist.snippet.title,
        description: playlist.snippet.description,
        publishedAt: playlist.snippet.publishedAt,
        thumbnails: playlist.snippet.thumbnails,
        itemCount: playlist.contentDetails.itemCount,
        slug: playlist.snippet.title.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, ''),
        playlistUrl: `https://www.youtube.com/playlist?list=${playlist.id}`
      }));
    }
    return [];
  } catch (error) {
    console.error("Error fetching playlists:", error);
    return [];
  }
};

// Get playlists with total duration calculated
export const getChannelPlaylistsWithDuration = async (maxResults = 10) => {
  try {
    const data = await fetchFromYouTube("playlists", {
      part: "snippet,contentDetails",
      channelId: CHANNEL_ID,
      maxResults
    });
    
    if (data.items) {
      // Fetch durations for each playlist
      const playlistsWithDurations = await Promise.all(
        data.items.map(async (playlist) => {
          try {
            // Get videos for this playlist to calculate total duration
            const videos = await getPlaylistVideos(playlist.id, 50);
            const totalDuration = calculatePlaylistDuration(videos);
            
            return {
              id: playlist.id,
              title: playlist.snippet.title,
              description: playlist.snippet.description,
              publishedAt: playlist.snippet.publishedAt,
              thumbnails: playlist.snippet.thumbnails,
              itemCount: playlist.contentDetails.itemCount,
              totalDuration,
              slug: playlist.snippet.title.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, ''),
              playlistUrl: `https://www.youtube.com/playlist?list=${playlist.id}`
            };
          } catch (error) {
            console.error(`Error calculating duration for playlist ${playlist.id}:`, error);
            return {
              id: playlist.id,
              title: playlist.snippet.title,
              description: playlist.snippet.description,
              publishedAt: playlist.snippet.publishedAt,
              thumbnails: playlist.snippet.thumbnails,
              itemCount: playlist.contentDetails.itemCount,
              totalDuration: "Unknown",
              slug: playlist.snippet.title.toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, ''),
              playlistUrl: `https://www.youtube.com/playlist?list=${playlist.id}`
            };
          }
        })
      );
      
      return playlistsWithDurations;
    }
    return [];
  } catch (error) {
    console.error("Error fetching playlists with duration:", error);
    return [];
  }
};

// Get videos from a specific playlist
export const getPlaylistVideos = async (playlistId, maxResults = 50) => {
  try {
    const data = await fetchFromYouTube("playlistItems", {
      part: "snippet,contentDetails",
      playlistId,
      maxResults
    });
    
    if (data.items) {
      // Get video IDs to fetch additional details
      const videoIds = data.items.map(item => item.contentDetails.videoId).join(',');
      
      // Fetch video details for duration, view count, etc.
      const videoDetails = await fetchFromYouTube("videos", {
        part: "contentDetails,statistics",
        id: videoIds
      });
      
      const videoDetailsMap = {};
      if (videoDetails.items) {
        videoDetails.items.forEach(video => {
          videoDetailsMap[video.id] = video;
        });
      }
      
      return data.items.map(item => {
        const videoDetail = videoDetailsMap[item.contentDetails.videoId] || {};
        return {
          id: item.contentDetails.videoId,
          title: item.snippet.title,
          description: item.snippet.description,
          publishedAt: item.snippet.publishedAt,
          thumbnails: item.snippet.thumbnails,
          videoUrl: `https://www.youtube.com/watch?v=${item.contentDetails.videoId}`,
          duration: videoDetail.contentDetails?.duration || "Unknown",
          viewCount: videoDetail.statistics?.viewCount || "0",
          likeCount: videoDetail.statistics?.likeCount || "0"
        };
      });
    }
    return [];
  } catch (error) {
    console.error("Error fetching playlist videos:", error);
    return [];
  }
};

// Search for videos in channel
export const searchChannelVideos = async (query, maxResults = 10) => {
  try {
    const data = await fetchFromYouTube("search", {
      part: "snippet",
      channelId: CHANNEL_ID,
      q: query,
      type: "video",
      maxResults
    });
    
    if (data.items) {
      return data.items.map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnails: item.snippet.thumbnails,
        videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`
      }));
    }
    return [];
  } catch (error) {
    console.error("Error searching videos:", error);
    return [];
  }
};

// Get latest videos from channel
export const getLatestVideos = async (maxResults = 10) => {
  try {
    const data = await fetchFromYouTube("search", {
      part: "snippet",
      channelId: CHANNEL_ID,
      type: "video",
      order: "date",
      maxResults
    });
    
    if (data.items) {
      return data.items.map(item => ({
        id: item.id.videoId,
        title: item.snippet.title,
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
        thumbnails: item.snippet.thumbnails,
        videoUrl: `https://www.youtube.com/watch?v=${item.id.videoId}`
      }));
    }
    return [];
  } catch (error) {
    console.error("Error fetching latest videos:", error);
    return [];
  }
};

// Utility function to format duration from ISO 8601 format
export const formatDuration = (duration) => {
  if (!duration || duration === "Unknown") return "Unknown";
  
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return "Unknown";
  
  const hours = (match[1] || '').replace('H', '');
  const minutes = (match[2] || '').replace('M', '');
  const seconds = (match[3] || '').replace('S', '');
  
  let formatted = '';
  if (hours) formatted += `${hours}:`;
  if (minutes) formatted += `${minutes.padStart(2, '0')}:`;
  if (seconds) formatted += seconds.padStart(2, '0');
  else formatted += '00';
  
  return formatted;
};

// Utility function to convert ISO 8601 duration to total seconds
export const durationToSeconds = (duration) => {
  if (!duration || duration === "Unknown") return 0;
  
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) return 0;
  
  const hours = parseInt((match[1] || '').replace('H', '')) || 0;
  const minutes = parseInt((match[2] || '').replace('M', '')) || 0;
  const seconds = parseInt((match[3] || '').replace('S', '')) || 0;
  
  return hours * 3600 + minutes * 60 + seconds;
};

// Utility function to calculate total playlist duration
export const calculatePlaylistDuration = (videos) => {
  const totalSeconds = videos.reduce((total, video) => {
    return total + durationToSeconds(video.duration);
  }, 0);
  
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  
  if (hours > 0) {
    return `${hours}h ${minutes}m`;
  } else {
    return `${minutes}m`;
  }
};

// Utility function to format view count
export const formatViewCount = (viewCount) => {
  const count = parseInt(viewCount);
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M views`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K views`;
  }
  return `${count} views`;
};

// Utility function to get best thumbnail
export const getBestThumbnail = (thumbnails) => {
  if (!thumbnails) return '';
  
  // Prefer higher quality thumbnails
  if (thumbnails.maxres) return thumbnails.maxres.url;
  if (thumbnails.high) return thumbnails.high.url;
  if (thumbnails.medium) return thumbnails.medium.url;
  if (thumbnails.default) return thumbnails.default.url;
  
  return '';
};

const youtubeService = {
  getChannelInfo,
  getChannelPlaylists,
  getChannelPlaylistsWithDuration,
  getPlaylistVideos,
  searchChannelVideos,
  getLatestVideos,
  formatDuration,
  durationToSeconds,
  calculatePlaylistDuration,
  formatViewCount,
  getBestThumbnail
};

export default youtubeService;