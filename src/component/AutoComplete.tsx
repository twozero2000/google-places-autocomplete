import { useEffect, useRef } from "react";
import { IAutoCompleteProps } from "../interfaces/Application.interfaces";

const AutoComplete = (props: IAutoCompleteProps) => {
  const { setValue, setInputValue } = props;

  const autoCompleteRef = useRef<google.maps.places.Autocomplete>();
  const inputRef = useRef<HTMLInputElement>(
    document.getElementById("searchbox") as HTMLInputElement
  );

  useEffect(() => {
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current
    );
    autoCompleteRef.current.addListener("place_changed", async function () {
      if (autoCompleteRef.current) {
        const place = await autoCompleteRef.current.getPlace();
        if (place.place_id && place.formatted_address) {
          setValue({
            id: place.place_id,
            address: place.formatted_address,
            lat: place.geometry?.location?.lat() ?? 0,
            lng: place.geometry?.location?.lng() ?? 0,
          });
          setInputValue(place.formatted_address);
        }
      }
    });
  }, []);

  return (
    <div className="pr-2">
      <input
        className="h-10"
        style={{
          width: "500px",
          border: "1px solid black",
          borderRadius: "4px",
          padding: "5px",
        }}
        id="searchbox"
        ref={inputRef}
        onChange={(e) => {
          setInputValue(e.currentTarget.value);
        }}
      />
    </div>
  );
};

export default AutoComplete;
