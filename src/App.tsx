import React, { useEffect, useState } from "react";
import { dataActions } from "./redux/data/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/rootReducer";
import { APIProvider } from "@vis.gl/react-google-maps";
import GoogleMap from "./component/GoogleMap";
import { API_KEY } from "./constant/ApplicationConstant";
import { ISelectedLocation } from "./interfaces/Application.interfaces";
import FavouriteBtn from "./component/FavouriteBtn";
import AutoComplete from "./component/AutoComplete";

export type Poi = { key: string; location: google.maps.LatLngLiteral };

const App = () => {
  const { error } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  const locations: Array<Poi> = [
    { key: "KualaLumpur", location: { lat: 3.1319, lng: 101.6481 } },
  ];
  const [onFavourite, setOnFavourite] = useState<boolean>(false);
  const [value, setValue] = useState<ISelectedLocation>({
    id: "",
    address: "",
    lat: 3.1319,
    lng: 101.6481,
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (value.address !== inputValue) {
      setOnFavourite(false);
    }
  }, [value, inputValue]);

  useEffect(() => {
    if (onFavourite) {
      dispatch(
        dataActions.get({
          placeId: value.id,
          address: value.address,
          latitude: value.lat,
          longitude: value.lng,
        })
      );
    }
  }, [value, onFavourite]);

  return (
    <APIProvider apiKey={API_KEY}>
      <div className="p-20">
        <div className="flex pb-5">
          <AutoComplete
            setValue={setValue}
            value={value}
            setInputValue={setInputValue}
          />
          <FavouriteBtn
            onFavourite={onFavourite}
            setOnFavourite={setOnFavourite}
            value={value}
            inputValue={inputValue}
            error={error}
          />
        </div>
        {/* {error && <div>{error}</div>} */}
        <GoogleMap locations={locations} value={value} />
      </div>
    </APIProvider>
  );
};

export default App;
