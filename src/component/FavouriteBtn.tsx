import { IconButton } from "@mui/material"
import { IFavouriteProps } from "../interfaces/GoogleMap.interfaces"
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import _ from "lodash";

const FavouriteBtn = (props: IFavouriteProps) => {
  const { onFavourite, setOnFavourite, value, inputValue } = props

  return (
    <>
      {!onFavourite ? (
        <IconButton
          aria-label="favourite"
          color="default"
          onClick={() => {
            if (value.address === inputValue && !_.isEmpty(value.address) && !_.isEmpty(inputValue)) {
              setOnFavourite(true)
            }
          }}
        >
          <FavoriteBorder />
        </IconButton>
      ) : (
        <IconButton
          aria-label="favourite"
          color="default"
          onClick={() => {
            setOnFavourite(false)
          }}
        >
          <Favorite color="error"/>
        </IconButton>
      )}
    </>
  );
};

export default FavouriteBtn
