import { AdvancedMarker, Map, MapCameraChangedEvent, Pin } from "@vis.gl/react-google-maps";
import { Poi } from "../App";
import { MAP_ID } from "../constant/ApplicationConstant";
import { IGoogleMapProps } from "../interfaces/GoogleMap.interfaces";

const GoogleMap = (props: IGoogleMapProps) => {
  const {locations} = props

  return (
    <Map
      className="overflow-scroll h-screen"
      defaultZoom={11}
      defaultCenter={{ lat: 3.1319, lng: 101.6481 }}
      mapId={MAP_ID}
      onCameraChanged={(ev: MapCameraChangedEvent) =>
        console.log(
          "camera changed:",
          ev.detail.center,
          "zoom:",
          ev.detail.zoom
        )
      }
    >
      {locations.map((poi: Poi) => (
        <AdvancedMarker key={poi.key} position={poi.location}>
          <Pin
            background={"#FBBC04"}
            glyphColor={"#000"}
            borderColor={"#000"}
          />
        </AdvancedMarker>
      ))}
    </Map>
  );
}

export default GoogleMap;
