import { gql } from "@apollo/client";

export const GET_CHAMPIONSHIPS = gql`
  query getAllChampionships {
    championships {
      id
      championshipName
      logo
      color
      seasons {
        id
        seasonId
        date
        championshipName
        news {
          id
          title
          tags
          image
          newsId
        }
      }
    }
  }
`;
