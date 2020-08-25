import React, { useState, useEffect } from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

import { InfoBox } from "react-google-maps/lib/components/addons/InfoBox";
import { Card } from "@material-ui/core";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div className="h-full" />,
    containerElement: <div className="h-400" />,
    mapElement: <div className="h-full" />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
    <Marker
      isMarkerShown={false}
      position={{ lat: -34.397, lng: 150.644 }}
      onClick={props.onMarkerClick}
    >
      <InfoBox options={{ closeBoxURL: ``, enableEventPropagation: true }}>
        <Card className="p-4">
          <p className="whitespace-pre m-0">Hello World !!!</p>
        </Card>
      </InfoBox>
    </Marker>
  </GoogleMap>
));

const MarkerMap = () => {
  let timer = null;
  const [isMarkerShown, setIsMarkerShown] = useState(false);

  const delayedShowMarker = () => {
    timer = setTimeout(() => {
      setIsMarkerShown(true);
    }, 3000);
  };

  const handleMarkerClick = () => {
    setIsMarkerShown(false);
    delayedShowMarker();
  };

  useEffect(() => {
    delayedShowMarker();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <MyMapComponent
      isMarkerShown={isMarkerShown}
      onMarkerClick={handleMarkerClick}
    />
  );
};

export default MarkerMap;
