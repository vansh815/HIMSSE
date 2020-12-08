import React from 'react'
import GoogleMapReact from 'google-map-react'
import { MdLocationOn } from "react-icons/md"

import './Map.css'

const location = {
  address: 'Bloomington, IN',
  lat: 39.16659,
  lng: -86.51656,
}


const LocationPin = ({ text }) => (
  <div className="pin">
	<div style={{color: 'orange'}}>
    	<MdLocationOn size={45} />
	</div>
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ zoomLevel }) => {
	return(
  <div className="map">
    <h2 className="map-h2">Doctors Near You</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBqS2jplnZdGhMqKRZa791Vu7hiD17ydSE' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >




	    <LocationPin
          lat={39.15905}
          lng={-86.49868}
          text={"Vansh Shah, Dentist"}
        />

		<LocationPin
          lat={39.17413}
          lng={-86.53444}
          text={"Ketie Simson, Dentist"}
        />

      </GoogleMapReact>
    </div>
  </div>
)
}

export default Map
