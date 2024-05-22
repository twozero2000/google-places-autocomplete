import {
  AdvancedMarker,
  Map,
  MapCameraChangedEvent,
  MapCameraProps,
  Pin,
} from "@vis.gl/react-google-maps";
import { Poi } from "../App";
import { MAP_ID } from "../constant/ApplicationConstant";
import { IGoogleMapProps } from "../interfaces/Application.interfaces";
import { useCallback, useState } from "react";

const GoogleMap = (props: IGoogleMapProps) => {
  let selectedLocation;

  const { locations, value } = props;

  const INITIAL_CAMERA = {
    center: { lat: 3.1319, lng: 101.6481 },
    zoom: 11,
  }

  const [cameraProps, setCameraProps] =
    useState<MapCameraProps>(INITIAL_CAMERA);
  const handleCameraChange = useCallback(
    (ev: MapCameraChangedEvent) => setCameraProps(ev.detail),
    []
  )

  if (value.address) {
    selectedLocation = [
      { key: "KualaLumpur", location: { lat: value.lat, lng: value.lng } },
    ]
  } else {
    selectedLocation = locations;
  }

  return (
    <Map
      {...cameraProps}
      className="overflow-scroll h-screen"
      id="map"
      mapId={MAP_ID}
      defaultZoom={11}
      defaultCenter={{
        lat: INITIAL_CAMERA.center.lat,
        lng: INITIAL_CAMERA.center.lng,
      }}
      center={{ lat: value.lat, lng: value.lng }}
      onCameraChanged={handleCameraChange}
    >
      {selectedLocation.map((poi: Poi) => (
        <AdvancedMarker key={poi.key} position={poi.location}>
          <Pin
            background={"#FF3021"}
            glyphColor={"#BD2319"}
            borderColor={"#BD2319"}
          />
        </AdvancedMarker>
      ))}
    </Map>
  );
};

export default GoogleMap;
