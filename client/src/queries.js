import {gql} from "apollo-boost"

const connect = gql`
query connect($time: String!){
  connect(time: $time)
}
`

export {connect};
