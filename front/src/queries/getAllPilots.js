import { gql } from "@apollo/client";

export const GET_ALLDRIVERS = gql`
query getAllDrivers {
  drivers{
    id
    driverId
    name
    nameAbreviado
    teamId
    team {
      color
      id
      teamId
      name
      seasonId
      season{
        championship{
            id
        }
      }
    }
    number
    points
    position
    wins
    hotLaps
    bestPosition
    poles
    records
    photo
    flag
    news{
        id
        title
    }
     results{
            id
        }
  }
}

`;