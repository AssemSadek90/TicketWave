import styles from "./SocialShare.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
/**
A component to share event details on social media platforms and email.
@param {object} props - The props object.
@param {object} props.event - An object containing event details, such as name and URL.
@param {boolean} isMobile - A boolean value indicating whether the device is mobile or not.
@returns {JSX.Element} A JSX element containing social media icons to share event details.
*/
export default function SocialShare(props, isMobile) {
  /** 
A function to handle sharing on Facebook.
@function
@returns {void}
*/
  function handleFacebookShare() {
    const message = " ";
    let url = props.event.url;
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${message}`;
    window.open(shareUrl, "Share on Facebook", "width=600,height=400");
  }
  /**
A function to handle sharing on Facebook Messenger.
@function
@returns {void}
*/
  function handleMessengerShare() {
    const url = `https://www.facebook.com/dialog/send?app_id=217288657613432&display=popup&link=${props.event.url}&redirect_uri=YOUR_REDIRECT_URI`;
    window.open(url, "facebook-message-dialog", "width=800,height=600");
  }
  /**
A function to handle sharing on Twitter.
@function
@returns {void}
*/
  function handleTwitterShare() {
    const text = `Check out "${props.event.name}"`;
    const url = props.event.url;
    const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
      url
    )}&text=${encodeURIComponent(text)}`;
    window.open(tweetUrl, "Tweet", "width=600,height=400");
  }
  /**
A function to handle sharing via email.
@function
@returns {string} A mailto link containing subject and body.
*/
  function handleMailShare() {
    const subject = `You're invited to ${props.event.name}`;
    const body = props.event.url;
    const mailToLink = `mailto:?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    return mailToLink;
  }

  return (
    <>
      <div>
        <h3 className="h5 fw-bold mt-4">Share with friends</h3>
      </div>

      <div className="d-flex">
        <span className={styles.share_icons}>
          <FaFacebookF
            onClick={handleFacebookShare}
            id="share-facebook-icon"
            className="text-secondary fs-5"
          />
        </span>
        <span className={styles.share_icons}>
          <FaFacebookMessenger
            onClick={handleMessengerShare}
            id="share-messenger-icon"
            className="text-secondary fs-5"
          />
        </span>
        <span className={styles.share_icons}>
          <FaLinkedinIn
            id="share-linkedin-icon"
            className="text-secondary fs-5"
          />
        </span>
        <span className={styles.share_icons}>
          <FaTwitter
            onClick={handleTwitterShare}
            id="share-twitter-icon"
            className="text-secondary fs-5"
          />
        </span>
        <div className="p-2">
          <a href={handleMailShare()}>
            <GrMail className="text-secondary fs-5" id="share-mail-icon" />
          </a>
        </div>
      </div>
    </>
  );
}
