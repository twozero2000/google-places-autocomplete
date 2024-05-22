import { Poi } from "../App"

export interface IGoogleMapProps {
    locations: Array<Poi>,
    value: ISelectedLocation
}

export interface ISelectedLocation {
    id: string
    address: string
    lat: number
    lng: number
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
    error: string | null
}

export interface MainTextMatchedSubstrings {
  offset: number
  length: number
}
export interface StructuredFormatting {
  main_text: string
  secondary_text: string
  main_text_matched_substrings?: readonly MainTextMatchedSubstrings[]
}
export interface PlaceType {
  description: string
  structured_formatting: StructuredFormatting
}
