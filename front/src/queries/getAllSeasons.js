import { gql } from "@apollo/client";

export const GET_ALLSEASONS = gql`
query getAllSeasons {
    seasons {
      id
      seasonId
      date
      championshipName
      # teams{
      #     seasonId
      #     name
      #     id
      # }
      news{
          newsId
          title
      }
    }
  }
  `;