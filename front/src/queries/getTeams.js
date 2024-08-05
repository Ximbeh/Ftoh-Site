import { gql } from "@apollo/client";

export const GET_TEAMS = gql`
  query getTeams {
    teams {
      id
      color
      points
      seasonId
      position
      name
      logo
      car

      drivers {
        id
        teamId
        name
      }
    }
  }
`;
