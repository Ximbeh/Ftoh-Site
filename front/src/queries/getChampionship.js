import { gql } from "@apollo/client";

export const GET_CHAMPIONSHIPS = gql`
  query getAllChampionships {
      championships {
        championshipName
        id
        seasons {
          id
          seasonNumber
          date
          championshipName
        }
      }
    }
`;
