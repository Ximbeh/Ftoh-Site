import { gql } from "@apollo/client";

export const GET_ALLRACES = gql`
query GetRaceAndCalendars {
  races {
    id
    raceId
    name
    finished
    calendarId
    description
    fullName
    flag
    date
    location
    map
    phases{
        id
        name   
         pilots {
      pilotId
      position
      lapsCompleted
      timeTaken
      points
      fastlapLap
      timeFastLap
      pitStop {
        stops
        lapPitStop
        timePitStop
        timeOfRace
      }
      positionStartingGrid
      timeQ1
      timeQ2
      timeQ3
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
    # news{
    #     id
    #     title
    # }
  }
}


`;