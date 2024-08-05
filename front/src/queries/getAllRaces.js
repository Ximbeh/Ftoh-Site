import { gql } from "@apollo/client";

export const GET_ALLRACES = gql`
query GetRaceAndCalendars {
  races {
    id
    raceId
    name
    finished
    resume
    highlight
    calendarId
    description
    fullName
    flag
    date
    location
    map
    mapDetalhes
    laps
    capeOne
    capeTwo
    phases{
        id
        name   
        dayOfWeek
        dayOfMonth
        Month
        hour
         pilots {
      pilotId
      teamId
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