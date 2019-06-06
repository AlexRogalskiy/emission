import { camelCase } from "lodash"

import { ArtistResult } from ".."
import { SearchQueryProps, SearchResults } from "../Components/SearchResults"

export const name = "Consignments/Search"
export const component = SearchResults

const noQuery: SearchQueryProps<ArtistResult> = {
  query: null as any,
  searching: false,
  placeholder: "Artist/Designer Name",
  noResultsMessage: "Unfortunately we are not accepting consignments for works by",
  results: [] as any[],
}

const queryNoResults: SearchQueryProps<ArtistResult> = {
  query: "ba",
  searching: false,
  results: [] as any[],
  placeholder: "Artist/Designer Name",
  noResultsMessage: "Unfortunately we are not accepting consignments for works by",
}

const queryNoResultsSearching: SearchQueryProps<ArtistResult> = {
  query: "ba",
  searching: true,
  results: [] as any[],
  placeholder: "Artist/Designer Name",
  noResultsMessage: "Unfortunately we are not accepting consignments for works by",
}

const query1Result: SearchQueryProps<ArtistResult> = {
  query: "ban",
  searching: false,
  results: [
    {
      name: "Banksy",
      internalID: "banksy",
      image: { url: "https://d32dm0rphc51dk.cloudfront.net/X9vVvod7QY73ZwLDSZzljw/square.jpg" },
    },
  ],
  placeholder: "Artist/Designer Name",
  noResultsMessage: "Unfortunately we are not accepting consignments for works by",
}

const query1ResultSearching: SearchQueryProps<ArtistResult> = {
  query: "ban",
  searching: true,
  results: [
    {
      name: "Banksy",
      internalID: "banksy",
      image: { url: "https://d32dm0rphc51dk.cloudfront.net/X9vVvod7QY73ZwLDSZzljw/square.jpg" },
    },
  ],
  placeholder: "Artist/Designer Name",
  noResultsMessage: "Unfortunately we are not accepting consignments for works by",
}

const query2Results: SearchQueryProps<ArtistResult> = {
  query: "bank",
  searching: false,
  results: [
    {
      name: "Banksy",
      internalID: "banksy",
      image: { url: "https://d32dm0rphc51dk.cloudfront.net/X9vVvod7QY73ZwLDSZzljw/square.jpg" },
    },
    {
      name: "Banksy's Brother",
      internalID: "thanksy",
      image: { url: "https://d32dm0rphc51dk.cloudfront.net/zKBFBZPGN-V5TljXtsSuEg/square.jpg" },
    },
  ],
  placeholder: "Artist/Designer Name",
  noResultsMessage: "Unfortunately we are not accepting consignments for works by",
}

const artistGen = (artistName: string) => ({
  name: artistName,
  internalID: camelCase(artistName),
  image: { url: "https://d32dm0rphc51dk.cloudfront.net/X9vVvod7QY73ZwLDSZzljw/square.jpg" },
})

const query4Results: SearchQueryProps<ArtistResult> = {
  query: "bank",
  searching: false,
  results: [
    artistGen("Ada Van Hoorebeke"),
    artistGen("Kathleen Adair Brown"),
    artistGen("Linda Adair"),
    artistGen("Hector Adalid"),
  ],
  placeholder: "Artist/Designer Name",
  noResultsMessage: "Unfortunately we are not accepting consignments for works by",
}

export const allStates = [
  { "No query": noQuery },
  { "Looking for new results": queryNoResultsSearching },
  { "Found no results": queryNoResults },
  { "Found one result": query1Result },
  { "Found one result, and searching": query1ResultSearching },
  { "Found two results": query2Results },
  { "Found four results": query4Results },
]
