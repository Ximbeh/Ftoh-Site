import { gql } from "@apollo/client";

export const GET_ALLDRIVERSH = gql`
query getAllDriversHistory {
    driverHistories{
    id
    driverHistoryId
    name
    photo
    nacionality
    text
    championships
  }
}

`;