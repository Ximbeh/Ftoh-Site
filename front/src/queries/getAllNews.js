import { gql } from "@apollo/client";

export const GET_ALLNEWS = gql`
query getAllNews {
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
`;