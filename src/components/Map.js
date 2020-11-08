import React from 'react'
import GoogleMapReact from 'google-map-react'
import { MdLocationOn } from "react-icons/md"

import './Map.css'




const LocationPin = ({ text }) => (
  <div className="pin">
	<div style={{color: 'orange'}}>
    	<MdLocationOn size={45} />
	</div>
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => {
	return(
  <div className="map">
    <h2 className="map-h2">Come Visit Us At Our Campus</h2>

    <div className="google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBqS2jplnZdGhMqKRZa791Vu7hiD17ydSE' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />


	    <LocationPin
          lat={36.1699}
          lng={-115.1398}
          text={"pin 3"}
        />

		<LocationPin
          lat={39.1653}
          lng={-86.5264}
          text={"hiiiii"}
        />

      </GoogleMapReact>
    </div>
  </div>
)
}

export default Map