import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import SEO from "../Components/SEO";
import LoadingLayout from "../Components/LoadingLayout";
import VideoCard from "../Components/VideoCard";
import { getChannelPlaylists, getPlaylistVideos, getBestThumbnail, calculatePlaylistDuration } from "../services/youtubeApi";
import { FaArrowLeft, FaVideo, FaCalendar, FaClock } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

function PlaylistDetail() {
 const { playlistSlug } = useParams();
 const navigate = useNavigate();
 const [playlistData, setPlaylistData] = useState(null);
 const [videos, setVideos] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);
 
 useEffect(() => {
  const fetchPlaylistData = async () => {
   try {
    setLoading(true);
    
    // First, get all playlists to find the one with matching slug
    const playlists = await getChannelPlaylists(50);
    const foundPlaylist = playlists.find((playlist) => playlist.slug === playlistSlug);
    
    if (!foundPlaylist) {
     navigate("/youtube");
     return;
    }
    
    setPlaylistData(foundPlaylist);
    console.log(foundPlaylist);
    
    
    // Then fetch videos for this playlist
    const playlistVideos = await getPlaylistVideos(foundPlaylist.id);
    setVideos(playlistVideos);
    
   } catch (err) {
    console.error("Error fetching playlist data:", err);
    setError("Failed to load playlist content. Please try again later.");
   } finally {
    setLoading(false);
   }
  };
  
  fetchPlaylistData();
 }, [playlistSlug, navigate]);

 const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
   year: 'numeric', 
   month: 'long', 
   day: 'numeric' 
  });
 };

 // Generate JSON-LD for the specific playlist
 const playlistJsonLd = playlistData ? {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": playlistData.title,
  "description": playlistData.description,
  "url": `https://Abdogoda.github.io/AG/youtube/${playlistData.slug}`,
  "author": {
   "@type": "Person",
   "name": "Abdulrhman Goda"
  },
  "dateCreated": playlistData.publishedAt,
  "numberOfItems": playlistData.itemCount
 } : null;

 return (
  <>
   {playlistData && (
    <SEO 
     title={`${playlistData.title} - YouTube Playlist by AG`}
     description={`${playlistData.description} Watch ${playlistData.videoCount} videos covering ${playlistData.title.toLowerCase()} with practical examples and tutorials.`}
     keywords={`${playlistData.title}, YouTube Playlist, Web Development Tutorial, Programming Videos, ${playlistData.title.split(' ').join(', ')}`}
     url={`https://Abdogoda.github.io/AG/youtube/${playlistData.slug}`}
     jsonLd={playlistJsonLd}
    />
   )}
   <LoadingLayout />
   <Header />
   <Sidebar />
   
   {loading && (
    <main className="section playlist__detail__section" id="playlist-detail">
     <div className="container playlist__detail__container container__flex__column">
      <div className="loading__message">
       <p>Loading playlist content...</p>
      </div>
     </div>
    </main>
   )}

   {error && (
    <main className="section playlist__detail__section" id="playlist-detail">
     <div className="container playlist__detail__container container__flex__column">
      <div className="error__message">
       <p>{error}</p>
       <Link to="/youtube" className="back__link">
        <FaArrowLeft />
        <span>Back to YouTube</span>
       </Link>
      </div>
     </div>
    </main>
   )}

   {!loading && !error && playlistData && (
    <main className="section playlist__detail__section" id="playlist-detail">
     <div className="container playlist__detail__container container__flex__column">
      <div className="playlist__header">
       <h1 className="playlist__title">{playlistData.title}</h1>
      </div>

      <div className="playlist__info">
       <div className="playlist__banner__enhanced">
        <div className="playlist__banner__thumbnail">
         <img 
          src={getBestThumbnail(playlistData.thumbnails)} 
          alt={`${playlistData.title} playlist banner`}
          className="playlist__banner__image"
         />
         <div className="playlist__banner__overlay">
         </div>
        </div>
        
        <div className="playlist__banner__content">
         <div className="playlist__banner__details">
          <h2 className="playlist__subtitle">Playlist Details</h2>
          
          <div className="playlist__stats">
           <div className="stat__item">
            <FaVideo />
            <span>{playlistData.itemCount} Videos</span>
           </div>
           <div className="stat__item">
            <FaCalendar />
            <span>Created {formatDate(playlistData.publishedAt)}</span>
           </div>
           <div className="stat__item">
            <FaClock />
            <span>{calculatePlaylistDuration(videos)} total</span>
           </div>
          </div>
          
          <div className="playlist__actions__section">
           <a 
            href={playlistData.playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="main__button youtube__playlist__link"
           >
            <FaExternalLinkAlt />
            Watch on YouTube
           </a>
           <Link to="/youtube" className="main__button secondary__button">
            <FaArrowLeft />
            Back to Playlists
           </Link>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div className="playlist__description__section">
          <h3>About This Playlist</h3>
          <p className="playlist__description">
           {playlistData.description || "No description available for this playlist."}
          </p>
         </div>

      <div className="videos__section">
       <h2 className="videos__title">
        Videos in this Playlist ({videos.length})
       </h2>
       
       {videos.length === 0 ? (
        <div className="no__videos">
         <p>No videos found in this playlist.</p>
        </div>
       ) : (
        <div className="videos__grid">
         {videos.map((video, index) => (
          <VideoCard 
           key={video.id}
           video={video}
           index={index}
           delay={1.8}
          />
         ))}
        </div>
       )}
      </div>
     </div>
    </main>
   )}
  </>
 );
}

export default PlaylistDetail;