import { gql } from "@apollo/client";

export const GET_ALLTEAMS = gql`
query getAllTeams{
    teams{
    id
    teamId
    name
    # position,
    # bestPosition,
    # chief,
    # hotLaps,
    # logo,
    # points,
    # poles,
    # records,
    # wins
    # seasonNumber
    # seasonId
    # teamId
    drivers{
        name
        teamId
    }
    seasonId
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