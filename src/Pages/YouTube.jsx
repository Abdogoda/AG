import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import AnimatedLetters from "../Components/AnimatedLetters";
import SEO from "../Components/SEO";
import LoadingLayout from "../Components/LoadingLayout";
import PlaylistCard from "../Components/PlaylistCard";
import { getChannelInfo, getChannelPlaylistsWithDuration } from "../services/youtubeApi";

function YouTube() {
 // letter animation
 const [letterClass, setLetterClass] = useState("text-animate");
 const [channelInfo, setChannelInfo] = useState(null);
 const [playlists, setPlaylists] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  setTimeout(() => {
   setLetterClass("text-animate-hover");
  }, 3000);
 }, []);

 // Fetch YouTube data with automatic caching
 useEffect(() => {
  const fetchYouTubeData = async () => {
   try {
    setLoading(true);
    setError(null);
    
    // Fetch channel info and playlists in parallel (both cached automatically)
    const [channelData, playlistsData] = await Promise.all([
     getChannelInfo(),
     getChannelPlaylistsWithDuration(20)
    ]);
    
    if (channelData) {
     setChannelInfo(channelData);
    }
    
    if (playlistsData) {
     setPlaylists(playlistsData);
    }
    
   } catch (err) {
    console.error("Error fetching YouTube data:", err);
    setError("Failed to load YouTube content. Please try again later.");
   } finally {
    setLoading(false);
   }
  };
  
  fetchYouTubeData();
 }, []);

 const youtubeJsonLd = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  "name": channelInfo?.title || "AG | YouTube Channel",
  "description": channelInfo?.description || "Educational content about web development, Laravel, React, and programming tutorials by Abdulrhman Goda",
  "url": "https://Abdogoda.github.io/AG/youtube",
  "author": {
   "@type": "Person",
   "name": "Abdulrhman Goda"
  },
  "publisher": {
   "@type": "Organization", 
   "name": "AG Developer",
   "logo": {
    "@type": "ImageObject",
    "url": "https://Abdogoda.github.io/AG/og-image.jpg"
   }
  }
 };

 return (
  <>
   <SEO 
    title="YouTube Channel - Web Development Tutorials by AG"
    description="Watch my YouTube channel featuring Laravel tutorials, React development guides, and full-stack web development tips. Learn modern web development with practical examples and real-world projects."
    keywords="YouTube Channel, Web Development Tutorials, Laravel Tutorials, React Tutorials, Programming Videos, Abdulrhman Goda YouTube"
    url="https://Abdogoda.github.io/AG/youtube"
    jsonLd={youtubeJsonLd}
   />
   <LoadingLayout />
   <Header />
   <Sidebar />
   <main className="section youtube__section" id="youtube">
    <div className="container youtube__container container__flex__column">
     <h1 className="section__title">
      <AnimatedLetters
       letterClass={letterClass}
       strArray={["M", "y", " ", "Y", "o", "u", "T", "u", "b", "e", " ", "C", "h", "a", "n", "n", "e", "l"]}
       index={18}
      />
     </h1>
     
     <div className="youtube__intro">
      <p className="youtube__description">
       Welcome to my <a href="https://www.youtube.com/@Abdulrhman-Goda" target="blank" title="AG Youtube Channel">YouTube channel 🎥</a>! Here, you'll find hands-on projects, technical deep dives, and explorations into the ever evolving world of software development. Whether you're just starting or already coding, let’s learn, build, and improve together one project at a time.
      </p>
     </div>

     <div className="playlists__container">
      <h2 className="playlists__title">Featured Playlists</h2>
      <div className="playlists__grid">
       { (!loading && !error) && playlists.map((playlist, index) => (
        <PlaylistCard 
         key={playlist.id}
         playlist={playlist}
         index={index}
         delay={1.6}
        />
       ))}
      </div>
     </div>
    </div>
   </main>
  </>
 );
}

export default YouTube;