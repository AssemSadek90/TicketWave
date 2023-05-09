/**

A React component that retrieves the user's current location using the Geolocation API and displays the city using OpenCageData API.
@function
@name Location
@returns {JSX.Element} The React component that displays the city name or a loading indicator.
@example
<Location />
*/
import React, { useState, useEffect } from "react";

function Location() {
  const [location, setLocation] = useState(null);
  const [city, setCity] = useState(null);

  useEffect(() => {
    /**
     * Get the user's current location and fetch the city name using OpenCageData API.
     *
     * @function
     * @name getLocation
     */
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=171ca70ad1a04db2b947dda4432d64ef`;

          fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
              if (data.results && data.results.length > 0) {
                setCity(data.results[0].components.city);
              }
            });
        },
        /**
         * Handle the error if the geolocation API fails.
         * @function
         * @name handleError
         * @param {Object} error - The error object returned by the Geolocation API.
         */
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return <>{city ? <>{city}</> : <>...</>}</>;
}

export default Location;
