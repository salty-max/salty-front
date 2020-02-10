import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
} from 'react-share';

const Share = ({ url, title, tags, twitterHandle }) => (
  <div className="post-social">
    <FacebookShareButton
      resetButtonStyle={false}
      url={url}
      className="button is-outlined is-rounded facebook"
    >
      <span className="icon">
        <i className="fab fa-facebook" />
      </span>
    </FacebookShareButton>
    <TwitterShareButton
      resetButtonStyle={false}
      url={url}
      className="button is-outlined is-rounded twitter"
      title={title}
      via={twitterHandle.split('@').join('')}
      hashtags={tags}
    >
      <span className="icon">
        <i className="fab fa-twitter" />
      </span>
    </TwitterShareButton>
    <RedditShareButton
      resetButtonStyle={false}
      url={url}
      className="button is-outlined is-rounded reddit"
      title={title}
    >
      <span className="icon">
        <i className="fab fa-reddit" />
      </span>
    </RedditShareButton>
  </div>
);

Share.propTypes = {
  twitterHandle: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};
Share.defaultProps = {
  tags: [],
};

export default Share;
