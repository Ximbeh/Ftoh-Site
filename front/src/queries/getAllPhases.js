import { gql } from "@apollo/client";

export const GET_ALLPHASES = gql`
query getAllPhases{
    phases{
        id
        phaseId
        name
        dayOfWeek
        hour
        finished
        raceId
        race{
            id
            fullName
            calendar{
        name
        id
        season{
            seasonId
            championship{
                id
            }
        }
    }
        }
        results{
            id
        }
        highlights{
            id
        }
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


}

`;