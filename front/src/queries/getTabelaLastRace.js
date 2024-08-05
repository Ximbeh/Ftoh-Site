import { gql } from "@apollo/client";

export const GET_TABELALAST = gql`
  query getTabelaLast {
    drivers {
      id
      teamId
      name
      nameAbreviado
      points
      position
    }
    teams {
      id
      color
      name
    }
    races {
      id
      name
      fullName
      raceId
      finished
      date
      phases {
        id
        dayOfMonth
        Month
        pilots{
          pilotId
          points
        }
      }
    }

  }
`;
