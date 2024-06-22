import { gql } from "@apollo/client";

export const GET_DRIVERS = gql`
  query GetDrivers {
    drivers {
      id
      driverId
      name
      teamId
      team {
        id
        teamId
        name
      }
      number
      points
      position
      wins
      hotLaps
      bestPosition
      poles
      records
      news {
        id
        title
      }
      results {
        id
      }
    }
  }
`;
