import { gql } from "@apollo/client";

export const EXCHANGES_QUERY = gql`
  query exchanges($first: Int) {
    exchanges(first: $first) {
      edges {
        node {
          id
        }
      }
    }
  }
`;

// export const EXCHANGES_QUERY = gql`
//   query character($id: ID!) {
//     character(id: $id) {
//       id
//       image
//       name
//       gender
//       species
//       origin {
//         dimension
//         id
//       }
//     }
//   }
// `;
