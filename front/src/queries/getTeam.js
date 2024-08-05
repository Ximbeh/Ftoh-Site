import { gql } from "@apollo/client";

export const GET_TEAM = gql`
  query getTeam {
    teams {
      id
      name
      logo
      drivers{
        id
        name
        photo
        number
      }
    }

    teamHistories{
      name
      chefe
      motor
      text
      primeiraAparicao
      championships
    }

    driverHistories{
    name
    photo
  }


    news{
      id
      tags
      image
      title
    }
  }
`;
