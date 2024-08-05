import { gql } from "@apollo/client";

export const GET_CAROUSEL = gql`
query getCarousel {
  races{
    id
    date
    flag
    name
    fullName
    phases{
      id
      name
      dayOfWeek
      hour
    }
    calendar{
      id
      season{
        seasonId
        championship{
          id
        }
      }
    }
  }
  phases{
    id
    race{
      calendar{
        season{
          championship{
            id
          }
        }
      }
    }
  }
}

`;