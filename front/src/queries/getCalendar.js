import { gql } from "@apollo/client";

export const GET_CALENDAR_DATA = gql`
  query GetCalendarData {
    races {
      id
      raceId
      name
      fullName
      finished
      date
      flag
      map
      phases {
        id
        name
        dayOfWeek
        hour
        pilots {
          position
          pilotId
        }
      }
      calendar {
        id
        season {
          seasonId
          date
          championship {
            id
          }
        }
      }
    }
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
    drivers {
      id
      driverId
      name
      nameAbreviado
      photo
      teamId
      team {
        color
      }
    }
    seasons {
      seasonId
      date
      championship {
        id
      }
    }
  }
`;
