import { FaPlay, FaClock } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { getBestThumbnail, formatDuration } from '../services/youtubeApi';
import { LazyImage } from '../hooks/useLazyImage';

function VideoCard({ video, index, delay }) {
  const { title, description, videoUrl, thumbnails, duration, publishedAt } =
    video;

  const thumbnail = getBestThumbnail(thumbnails);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleVideoClick = () => {
    window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="video__card"
      style={{
        animationDelay: `${0.1 * index + delay}s`,
      }}
      onClick={handleVideoClick}
    >
      <div className="video__thumbnail">
        <LazyImage src={thumbnail} alt={`${title} video thumbnail`} />
        <div className="video__overlay">
          <div className="video__play__icon">
            <FaPlay />
          </div>
          <div className="video__duration">
            <FaClock />
            <span>{formatDuration(duration)}</span>
          </div>
        </div>
      </div>

      <div className="video__content">
        <h4 className="video__title">{title}</h4>
        <p className="video__description">
          {description && description.length > 100
            ? `${description.substring(0, 100)}...`
            : description || 'No description available'}
        </p>

        <div className="video__meta">
          <div className="video__meta__left">
            <span className="video__date">{formatDate(publishedAt)}</span>
          </div>
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="video__external__link"
            onClick={(e) => e.stopPropagation()}
          >
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
