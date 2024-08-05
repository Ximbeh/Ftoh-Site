import { gql } from "@apollo/client";

export const GET_PILOTS = gql`
query getPilots {
  drivers{
    id
    driverId
    name
    position
    points
    flag
    number
    photo
    team {
        color
      seasonId
      name
    }

    news{
      id
      tags
      title
      image
      writer
    }
  }
}

`;