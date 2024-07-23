import { gql } from "@apollo/client";

export const GET_CHAMPIONSHIPS = gql`
 query getAllChampionships {
  championships {
    id
    championshipName
    seasons {
      id
      seasonId
      date
      championshipName
      news {
        id
    title
    headline
    text
    writer
    tags
    image
    video
    driverId
    raceId
    teamId
    seasonId
    newsId
      }
    }
    
  }
}
`;
