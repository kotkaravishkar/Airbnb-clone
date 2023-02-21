import React, { useState } from 'react'
import ReactMapGl from "react-map-gl"
import { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter"

function Map({searchResults}) {

  const [selectedLocation, setSelectedLocation] = useState({});

  const coordinates = searchResults.map(result =>({
    longitude:result.long,
    latitude: result.lat,
  }));

 const center = getCenter(coordinates);

const [viewport, setViewport] = React.useState({
  width:'100%',
  height:'100%',
  latitude: center.latitude,
  longitude: center.longitude,
  zoom:11,
});

  return (
  <ReactMapGl
  mapStyle="mapbox://styles/avishkar18/cle0ebjzf000l01mt5zgy84dy"
  mapboxAccessToken={process.env.mapbox_key}
  {...viewport}
  onViewportChange={(nextviewport) => setViewport(nextviewport)}
  >

    {searchResults.map(result=>(
      <div key={result.long}>
        <Marker
        longitude={result.long}
        latitude ={result.lat}
        offsetLeft ={-20}
        offseTop ={-10}
        >
          <p onClick={()=>selectedLocation(result)} className="cursor-pointer text-2xl animate-bounce"
          aria-label='push-pin'
          >📌
          </p>
        </Marker>
        {selectedLocation.long === result.long ?(
          <Popup
          onClose={()=>setSelectedLocation({})}
                closeOnClick={true}
                latitude={result.lat}
                longitude={result.long}
          >
            {result.title}
          </Popup>
        ):(
          false
          )}

      </div>
    ))}
  </ReactMapGl>
  )}

export default Map