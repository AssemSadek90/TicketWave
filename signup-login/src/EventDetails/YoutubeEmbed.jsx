/**

A functional React component that displays an embedded YouTube video.
@component
@param {Object} props - The component props.
@param {string} props.embedId - The ID of the YouTube video to embed.
@returns {JSX.Element} A React component that displays an embedded YouTube video.
*/
import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="716px"
      height="403px"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
