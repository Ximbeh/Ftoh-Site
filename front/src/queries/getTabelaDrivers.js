import { gql } from "@apollo/client";

export const GET_TABELADRIVERS = gql`
  query getTabelaDrivers {
    drivers {
      id
      name
      teamId
      position
      flag
      photo
      nameAbreviado
      points
    }
    teams {
      id
      name
      color
      seasonId
      season{
        championship{
          id
        }

      }
     
    }
  }
`;
