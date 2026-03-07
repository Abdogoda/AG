import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaVideo, FaClock } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';
import { getBestThumbnail } from '../utils/youtubeApi';
import { LazyImage } from '../hooks/useLazyImage';

const PlaylistCard = React.memo(function PlaylistCard({ playlist, index, delay }) {
  const {
    title,
    slug,
    thumbnails,
    itemCount,
    publishedAt,
    playlistUrl,
    totalDuration,
  } = playlist;

  const thumbnail = getBestThumbnail(thumbnails);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
    });
  };

  return (
    <div
      className="playlist__card"
      style={{
        animationDelay: `${0.2 * index + delay}s`,
      }}
    >
      <div className="playlist__thumbnail">
        <LazyImage src={thumbnail} alt={`${title} playlist thumbnail`} />
        <div className="playlist__overlay">
          <div className="playlist__play__icon">
            <FaPlay />
          </div>
          <div className="playlist__info__badge">
            <FaVideo />
            <span>{itemCount} videos</span>
          </div>
        </div>
      </div>

      <div className="playlist__details">
        <h3 className="playlist__title">{title}</h3>

        <div className="playlist__meta">
          <div className="playlist__meta__item">
            <FaVideo />
            <span>{itemCount} videos</span>
          </div>
          <div className="playlist__meta__item">
            <FaClock />
            <span>{totalDuration || 'Calculating...'}</span>
          </div>
          <div className="playlist__meta__item">
            <FaCalendarAlt />
            <span>{formatDate(publishedAt)}</span>
          </div>
        </div>

        <div className="playlist__actions">
          <Link to={`/youtube/${slug}`} className="playlist__button primary">
            Open Playlist
          </Link>
          <a
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="playlist__button secondary"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  );
});

export default PlaylistCard;
