import React, {useState, useEffect} from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import './EventDetails.css';
import Popup from "../Booking-popup/Booking-popup";
import CalendarIcon from './Calendar.png'
import ClockIcon from './Clock.png'
import Locationicon from './Location.png'
import TicketIcon from './Ticket.png'
import FacebookIcon from './Facebook.png'
import LinkedInIcon from './LinkedIn.png'
import MailIcon from './Mail.png'
import TwitterIcon from './Twitter.png'
import MessengerIcon from './Messenger.jfif'
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import server from '../server';



function EventDetails(){

    const mock = new MockAdapter(axios);

    const maxTicket = 10;
    const minTicket = 1;

    const [count,setCount] = useState(1)
    
    let ticketCounter = {

        increment () {
            if (count < maxTicket)
            {
            setCount(count + 1)
            }
    },
        decrement () {
            if (count > minTicket)
            {
                setCount(count - 1)
            }
    }

    };   

    const id = 1;    
    const [event1, setEvent] = useState({});

  useEffect(() => {
    const fetchEvent = async () => {
        const response = await axios.get(`http://localhost:3000/Events?id=${id}`);
        setEvent(response.data);
      };
  
      fetchEvent();
    }, [id]);
    const event = {
    id: 1,
    name: "Middle East Vape Show 2023",
    summary: "The most anticipated Vape Show in the Middle East, it's time to bring your Vape Business and Products to the next level.",
    description: "Will be held 3 days from 6 to 8 July 2023, after the success of the 1st event in Bahrain this year with a new atmosphere it will be held in Cairo, Egypt. We choose Egypt International Exhibition Center as the best venue in Cairo for MEVS 2023.",
    start_time: "July 6 · 10am",
    end_time: " July 8 · 10pm EET",
    url: "https://www.eventbrite.com/e/middle-east-vape-show-2023-tickets-512820940237?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=escb",
    created: "2023-03-22T10:00:00",
    changed: "2023-03-22T12:00:00",
    videoURL: "R63RiKdiB2o",
    published: true,
    online_event: false,
    logo: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F438303329%2F1343904084043%2F1%2Foriginal.20230203-023453?w=940&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=69cab150771ec45eb6ed627fbf66039d",
    venue: {
      name: "Egypt International Exhibition Center - EIEC",
      address: "El-Moshir Tantawy Axis Al Hay Al Asher, Cairo Governorate 4440301",
      latitude: 37.7749,
      longitude: -122.4194
    }
  };

    function handleFacebookShare() {
        const message = ' ';
        let url = event.url;
        const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${message}`;
        window.open(shareUrl, 'Share on Facebook', 'width=600,height=400');
    };

    function handleMessengerShare() {
        const url = `https://www.facebook.com/dialog/send?app_id=217288657613432&display=popup&link=${event.url}&redirect_uri=YOUR_REDIRECT_URI`;
        window.open(url, 'facebook-message-dialog', 'width=800,height=600');
    };

    function handleTwitterShare() {
        const text = `Check out "${event.name}"`
        const url = event.url
        const tweetUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        window.open(tweetUrl,'Tweet', 'width=600,height=400');
    }

    function handleMailShare(){
        const subject = `You're invited to ${event.name}`
        const body = event.url
        const mailToLink = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        return mailToLink
    }



    return(
        <div  id="main-body">
            <div id="left-part">
                <time id='start-date'>{event.start_time}</time>
                <h1 id='event-title' className="titles">{event.name}</h1>
                <p id='event-summary'>{event.summary}</p>
                <section>
                    <div>
                        <div id='when-and-where'>
                            <h2 className="titles">When and where</h2>
                        </div>
                    </div>
                    <div id="date-location">
                        <section id="date-time-section">
                            <div id="date-time-container">
                                <div id="date-time">
                                    <div id="date-time-icon">
                                        <img id="date-icon" className="icons" src={CalendarIcon} alt='logo'></img>
                                    </div>
                                    <div id="date-time-content">
                                        <div>
                                            <h3 className="titles">Date and time</h3>
                                        </div>
                                        <p className="date-time-location-subtext">
                                            {event.start_time + ' - ' + event.end_time}
                                        </p>
                                    </div>
                                </div>
                            </div>    
                        </section>
                        <section>
                            <div>
                                <div id="location-container">
                                    <div id="location-icon">
                                        <img className="icons" src={Locationicon} alt='logo'></img>
                                    </div>
                                    <div id="location-content">
                                        <div>
                                            <h3 className="titles">Location</h3>
                                        </div>
                                        <p className="date-time-location-subtext">
                                        {event.venue.name + ' - ' + event.venue.address}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
                <div id="about-this-event">
                    <div>
                        <div>
                            <h2 id="about-event-title" className="titles">About this event</h2>
                        </div>
                        <ul id='time-and-ticket'>
                            <li>
                                <span id="clock-icon-span">
                                    <img className="icons" src={ClockIcon} alt='icon'></img>
                                </span>
                                <span className="time-ticket-span">
                                    2 days 12 hours
                                </span>
                            </li>
                            <li>
                                <span id="ticket-icon-span">
                                    <img className="icons" src={TicketIcon} id='ticket-icon' alt='icon'></img>
                                </span>
                                <span className="time-ticket-span">
                                    Mobile eTicket
                                </span>
                            </li>
                        </ul>
                        <div>
                            <div>
                                <div>
                                    <p id="time-text">
                                       {event.description}
                                    </p>
                                </div>
                            </div>
            
                            <div>
                                <div id="youtube-video">
                                    <YoutubeEmbed embedId={event.videoURL} />
                                </div>
                            </div>                        
                        </div>
                    </div>
                    <section>
                        <div>
                            <div>
                                <h3 id="share-title" className="titles">
                                    Share with friends
                                </h3>
                            </div>
                            <div>
                                <div>
                                    <span><a href='' onClick={handleFacebookShare}  test-id="share-facebook-icon"><img className="share-icons" src={FacebookIcon} alt='logo'></img></a></span>
                                    <span><a href='' onClick={handleMessengerShare} test-id="share-messenger-icon"><img className="share-icons" src={MessengerIcon} alt='logo'></img></a></span>
                                    <span><a href="https://www.linkedin.com"  test-id="share-linkedin-icon"><img className="share-icons" src={LinkedInIcon} alt='logo'></img></a></span>
                                    <span><a href='' onClick={handleTwitterShare} test-id="share-twitter-icon"><img className="share-icons" src={TwitterIcon} alt='logo'></img></a></span>
                                    <span><a href={handleMailShare()}  test-id="share-mail-icon"><img className="share-icons" src={MailIcon} alt='logo'></img></a></span>
                                </div>  
                            </div>
                        </div>
                    </section>
                </div>
            </div>

            {/* aside for booking pop-up*/}
            <div id='aside-booking-container'>
                <div id="aside-card">
                    <div id="registration-in-card">
                       <span>
                            <strong>Registration</strong>
                       </span>
                       <span id="ticket-counter">
                            <button className="registration-buttons" test-id="decrement-button" onClick={() => ticketCounter.decrement()}>-</button>
                            {count}
                            <button className="registration-buttons" test-id="increment-button" onClick={() => ticketCounter.increment()}>+</button>
                       </span>
                    </div>

                    <div>
                        <strong>Free</strong>
                    </div>
                </div>

                <div>
                    {/* booking pop-up to be added with phase 3*/}
                    <Popup />
                </div>
            </div>

        </div>
    );
}

export default EventDetails;