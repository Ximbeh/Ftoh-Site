import { gql } from "@apollo/client";

export const GET_ALLRACES = gql`
query GetRaceAndCalendars {
  races {
    id
    raceId
    name
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
        dayOfWeek
        hour   
    }
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
    # news{
    #     id
    #     title
    # }
  }
}

`;