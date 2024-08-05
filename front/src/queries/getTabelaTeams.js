import { gql } from "@apollo/client";

export const GET_TABELATEAMS = gql`
  query getTabelaTeams {
    drivers {
      id
      name
      teamId
    }
    teams {
      id
      logo
      color
      car
      color
      name
      points
     seasonId
     position
     season{
      championship{
        id
      }
     }
    }
  }
`;
