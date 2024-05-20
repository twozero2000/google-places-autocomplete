import { Poi } from "../App";

export interface IGoogleMapProps {
    locations: Array<Poi>
}

export interface ISelectedLocation {
    id: string
    address: string
}

export interface IAutoCompleteProps {
    value: ISelectedLocation
    setValue: React.Dispatch<React.SetStateAction<ISelectedLocation>>
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export interface IFavouriteProps {
    onFavourite: boolean
    setOnFavourite: React.Dispatch<React.SetStateAction<boolean>>
    value: ISelectedLocation
    inputValue: string
}

// export interface IAutoCompleteProps {
//     setSearchValue: React.Dispatch<React.SetStateAction<string>>
//     searchValue: string
//     setSelectedLocation: React.Dispatch<React.SetStateAction<ISelectedLocation>>
//     selectedLocation: ISelectedLocation
//     setOnFavourite: React.Dispatch<React.SetStateAction<boolean>>
//     onFavourite: boolean
// }

export interface MainTextMatchedSubstrings {
  offset: number;
  length: number;
}
export interface StructuredFormatting {
  main_text: string;
  secondary_text: string;
  main_text_matched_substrings?: readonly MainTextMatchedSubstrings[];
}
export interface PlaceType {
  description: string;
  structured_formatting: StructuredFormatting;
}
