import React, { useState } from "react";
import styles from "./Booking-popup.module.css";
import { FiArrowLeft } from "react-icons/fi";
import Timer from "./Timer";
import { getEmail } from "../Credentials/Credentials";
import { getUserID } from "../Credentials/Credentials";
import { getUsername } from "../Credentials/Credentials";

/**
 * A popup component for booking events.
 * @param {Object} props - The props object.
 * @param {Object} props.event - The event object to book.
 * @param {Function} props.closeOverlay - The function to close the overlay.
 * @param {number} props.count - The number of event tickets to book.
 * @param {boolean} props.isMobile - Flag indicating if the user is using a mobile device.
 * @returns {JSX.Element} - The JSX element representing the popup.
 */

const Popup = ({ event, closeOverlay, count, isMobile }) => {
  const [delivery, setDelivery] = useState(0);
  const [promoAccept, setPromoAccept] = useState(false);
  const discount_id = null;
  /**
   * The access token stored in the local storage.
   * @type {string|null}
   */
  const accessToken = localStorage.getItem("accessToken");
  /**
   * The headers to be sent with the fetch requests.
   * @type {{Content-Type: string, Authorization: string}}
   */
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  /**
   * Function to handle the form submission.
   * @param {Event} e - The event object representing the form submission.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(formData),
    };
    fetch(`${process.env.REACT_APP_SERVER_NAME}/orders/create/`, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  /**
   * The form data for the booking.
   * @type {[Object, function]}
   */
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    promo_code: "",
    status: null,
    cost: count * event.price,
    event: event.id,
    user: getUserID(),
    attendee: 0,
    ticket: null,
  });
  /**
   * Function to handle the change of the input fields in the form.
   * @param {Event} e - The event object representing the input change.
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  /**
   * Function to fetch the promo codes from the server.
   */
  function fetchPromos() {
    fetch(
      `${process.env.REACT_APP_SERVER_NAME}/discount/${discount_id}`,
      headers
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.promoCodes.includes(formData.promo_code)) {
          setPromoAccept(true);
        }
      })
      .catch((error) => console.error(error));
  }
  return (
    <>
      <div className={styles.overlay}>
        <div className={styles.overlay_content}>
          {/* popup left side */}
          <div className={styles.left_container}>
            <div className={styles.heading}>
              <FiArrowLeft
                onClick={() => closeOverlay(false)}
                className={styles.closing_button + " fs-4 "}
                id="close-overlay-button"
              />
              <h4 className="h5 me-4">Checkout</h4>
              <small className="text-secondary muted">
                <Timer id="timer" seconds={1800} closeOverlay={closeOverlay} />{" "}
              </small>
            </div>

            <div className={styles.form_container + " pt-5 "}>
              <h2 className="h4 fw-bold">Contact information</h2>
              {event.free === true ? (
                <form id="free-reg" onSubmit={handleSubmit}>
                  <div className="row pt-3">
                    <div className="col">
                      <input
                        type="text"
                        name="first_name"
                        onChange={handleChange}
                        value={formData.first_name}
                        className="form-control"
                        placeholder="First name"
                        aria-label="First name"
                        required
                      ></input>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="last_name"
                        onChange={handleChange}
                        value={formData.last_name}
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                        required
                      ></input>
                    </div>
                    <div className="col-12">
                      <label for="inputAddress" className="form-label"></label>
                      <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        className="form-control"
                        id="inputAddress"
                        placeholder="Email address"
                        required
                      ></input>
                    </div>
                    <div className="form-check mt-5 ms-3">
                      <input
                        className="form-check-input fs-5"
                        type="checkbox"
                        id="gridCheck1"
                      ></input>
                      <label className="form-check-label fs-5" for="gridCheck1">
                        <small>
                          Keep me updated on more events and news from this
                          event organizer.
                        </small>
                      </label>
                    </div>
                    <div className="form-check ms-3">
                      <input
                        className="form-check-input fs-5"
                        type="checkbox"
                        id="gridCheck2"
                      ></input>
                      <label className="form-check-label fs-5" for="gridCheck2">
                        <small>
                          Send me emails about the best events happening nearby
                          or online.
                        </small>
                      </label>
                    </div>
                    <div className="form-check ms-3">
                      <input
                        className="form-check-input fs-5"
                        type="checkbox"
                        id="gridCheck3"
                      ></input>
                      <label className="form-check-label fs-5" for="gridCheck3">
                        <small>I accept the terms of service</small>
                      </label>
                    </div>
                  </div>
                </form>
              ) : (
                <form id="checkout-reg" onSubmit={handleSubmit}>
                  <div className="col-12 pt-3 d-flex justify-content-between">
                    <input
                      type="text"
                      name="promo_code"
                      onChange={handleChange}
                      value={formData.promo_code}
                      className="form-control"
                      placeholder="Promo Code"
                      aria-label="Promo Code"
                    />
                    <button
                      className="btn btn-outline-secondary ms-2"
                      type="button"
                      id="apply-promocode-button"
                      onClick={fetchPromos}
                    >
                      Apply
                    </button>
                    {promoAccept && (
                      <p className="text-success align-self-center">
                        Success!!
                      </p>
                    )}
                  </div>
                  <div className="row pt-3">
                    <div className="col">
                      <input
                        type="text"
                        name="first_name"
                        onChange={handleChange}
                        value={formData.first_name}
                        className="form-control"
                        placeholder="First name"
                        aria-label="First name"
                        required
                      ></input>
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        name="last_name"
                        onChange={handleChange}
                        value={formData.last_name}
                        className="form-control"
                        placeholder="Last name"
                        aria-label="Last name"
                        required
                      ></input>
                    </div>
                    <div className="col-12">
                      <label for="inputAddress" className="form-label"></label>
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        onChange={handleChange}
                        value={formData.email}
                        id="inputAddress"
                        placeholder="Email address"
                        required
                      ></input>
                    </div>
                    <div className="form-check mt-5 ms-3">
                      <input
                        className="form-check-input fs-5"
                        type="checkbox"
                        id="gridCheck1"
                      ></input>
                      <label className="form-check-label fs-5" for="gridCheck1">
                        <small>
                          Keep me updated on more events and news from this
                          event organizer.
                        </small>
                      </label>
                    </div>
                    <div className="form-check ms-3">
                      <input
                        className="form-check-input fs-5"
                        type="checkbox"
                        id="gridCheck2"
                      ></input>
                      <label className="form-check-label fs-5" for="gridCheck2">
                        <small>
                          Send me emails about the best events happening nearby
                          or online.
                        </small>
                      </label>
                    </div>
                    <div className="form-check ms-3">
                      <input
                        className="form-check-input fs-5"
                        type="checkbox"
                        id="gridCheck3"
                      ></input>
                      <label className="form-check-label fs-5" for="gridCheck3">
                        <small>I accept the terms of service</small>
                      </label>
                    </div>
                  </div>
                </form>
              )}
            </div>

            <div className={styles.footing}>
              {event.free === true ? (
                <button
                  className={styles.register}
                  type="submit"
                  form="free-reg"
                  id="register-button"
                >
                  <small>Register</small>
                </button>
              ) : (
                <button
                  className={styles.register}
                  type="submit"
                  form="checkout-reg"
                  id="checkout-button"
                >
                  <small>Checkout</small>
                </button>
              )}
            </div>
          </div>

          {/* popup right side */}
          <aside className={styles.right_container}>
            <img src={event.logo} alt="logo" className={styles.image}></img>
            <div className={styles.order_summary + " m-4 "}>
              <div className="">
                <small className="h6 fw-bold">
                  <small>Order summary</small>
                </small>
                <div className="mt-3 pb-4 text-secondary d-flex justify-content-between border-bottom">
                  <div>
                    <small>{count} x General Admission</small>
                  </div>
                  <div>
                    <small className="fs-6"> ${count * event.price}</small>
                  </div>
                </div>
                <div className="mt-3 pb-4 text-secondary d-flex justify-content-between border-bottom">
                  <div>
                    <p className="mb-0">
                      <small className="h6 text-dark">Delivery</small>
                    </p>
                    <small>{count} x eTicket</small>
                  </div>
                  <div>
                    <small className="fs-6"> ${count * delivery}</small>
                  </div>
                </div>
                <div className="mt-3 pb-4 text-secondary d-flex justify-content-between">
                  <div>
                    <small className="text-dark h5 fw-bold">Total</small>
                  </div>
                  <div>
                    <small className="text-dark h5 fw-bold">
                      ${count * event.price + count * delivery}
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Popup;
