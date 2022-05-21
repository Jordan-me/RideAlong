import React, { useState, useMemo } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
  ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import "../cssFiles/Map.css";

function Places({ origin, setOrigin, Dest, setDest }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyASPbyAFjJ3tLOQcLvjsQOFGMZek1SJj2I",
    libraries: ["places"],
  });
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <Map origin={origin} setOrigin={setOrigin} Dest={Dest} setDest={setDest} />
  );
}

function Map({ origin, setOrigin, Dest, setDest }) {
  const center = useMemo(() => ({ lat: 44, lng: -80 }), []);
  // const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="half-input-container">
        <div className="half-input ">
          <PlacesAutocomplete setSelected={setOrigin} stringToShow={"Origin"} />
        </div>
        <div className="half-input ">
          <PlacesAutocomplete
            setSelected={setDest}
            stringToShow={"Destination"}
          />
        </div>
        {/* {selected? console.log(selected):null} 
       <GoogleMap
        zoom={10}
        center={center}
        mapContainerClassName="map-container"
      >
        <Marker position={center}></Marker>
        <Marker position={center} />
        {selected && <Marker position={{lat:selected.lat, lng:selected.lng}} 
        />}
       </GoogleMap>  */}
      </div>
    </>
  );
}
const PlacesAutocomplete = ({ setSelected, stringToShow }) => {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete();

  const handleSelect = async (address) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    console.log(lat, lng, address);
    setSelected({ lat, lng });
  };

  return (
    <Combobox onSelect={handleSelect}>
      <ComboboxInput
        value={value}
        onChange={(e) => setValue(e.target.value)}
        disabled={!ready}
        className="combobox-input"
        placeholder={stringToShow}
      />
      <ComboboxPopover style={{ zIndex: "11000" }}>
        <ComboboxList>
          {status === "OK" &&
            data.map(({ place_id, description }) => (
              <ComboboxOption key={place_id} value={description}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <ComboboxOptionText />
              </ComboboxOption>
            ))}
        </ComboboxList>
      </ComboboxPopover>
    </Combobox>
  );
};

export default Places;
