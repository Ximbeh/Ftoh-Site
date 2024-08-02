import { gql } from "@apollo/client";

export const GET_ALLTEAMH = gql`
query getAllTeamsHistory {
  teamHistories{
       id
    teamHistoryId
    name
    nacionality
    chefe
    text
    logo
    championships
    primeiraAparicao
    pilotsIds
  }
}

`;