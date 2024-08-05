import { gql } from "@apollo/client";

export const GET_DRIVERCIRCUIT = gql`
query getDriverCircuit {
  drivers{
    id
    driverId
    name
  }
}

`;