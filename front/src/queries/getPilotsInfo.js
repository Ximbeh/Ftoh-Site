import { gql } from "@apollo/client";

export const GET_PILOTSINFO = gql`
  query getPilotsInfo {
    championships {
      id
      championshipName
      logo
      color
      seasons {
        id
        seasonId
        date
        championshipName
      }
    }
    seasons {
      seasonId
      date
      championship {
        id
      }
    }
    drivers {
      id
      driverId
      name
      number
      flag
      nameAbreviado
      photo
      teamId
      team {
        name
        color
      }
    }
    driverHistories {
      id
      driverHistoryId
      name
      photo
      nacionality
      text
      championships
  
    }
    phases {
      id
      phaseId
      name
      pilots {
        pilotId
        points
        position
        positionStartingGrid
        timeFastLap
      }
    }
    news {
      id
      tags
      newsId
    }
  }
`;
