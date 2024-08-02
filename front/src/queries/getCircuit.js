import { gql } from "@apollo/client";

export const GET_CIRCUIT = gql`
 query getCircuit {
    races {
    id
    raceId
    name
    calendarId
    phases{
        id
        name   
         pilots {
      pilotId
      timeFastLap
    }
    }
    calendar{
        name
        id
        season{
            seasonId
            date
            championship{
                id
            }
        }
    }
  }
}
`;
