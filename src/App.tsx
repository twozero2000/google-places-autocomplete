import React, { useEffect, useState } from "react";
import { dataActions } from "./redux/data/slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/rootReducer";
import { APIProvider } from "@vis.gl/react-google-maps";
import GoogleMap from "./component/GoogleMap";
import { API_KEY } from "./constant/ApplicationConstant";
import {
  ISelectedLocation,
} from "./interfaces/GoogleMap.interfaces";
import FavouriteBtn from "./component/FavouriteBtn";
import AutoComplete from "./component/AutoComplete";

export type Poi = { key: string; location: google.maps.LatLngLiteral };

const App = () => {
  const dispatch = useDispatch();

  const locations: Array<Poi> = [
    { key: "KualaLumpur", location: { lat: 3.1319, lng: 101.6481 } },
  ];
  const [onFavourite, setOnFavourite] = useState<boolean>(false);
  const [value, setValue] = useState<ISelectedLocation>({
    id: "",
    address: "",
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
          lat: 3.1319,
          lng: 101.6481,
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
          />
        </div>
        <GoogleMap locations={locations} />
      </div>
    </APIProvider>
  );
};

export default App;
