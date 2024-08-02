import { gql } from "@apollo/client";

export const GET_ALLTEAMS = gql`
query getAllTeams{
    teams{
    id
    teamId
    name
    color
    position,
    # bestPosition,
    # chief,
    # hotLaps,
    logo,
    points,
    # poles,
    # records,
    # wins
    # seasonNumber
    # seasonId
    # teamId
    drivers{
        name
        teamId
        number
        id
    }
    seasonId
    car
    season{
        seasonNumber
        championshipName
        championship{
            id
        }
    }
    news{
        id
        title
    }
    }

}
`;