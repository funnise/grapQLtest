
import gql from "graphql-tag";
import {client} from './client'
import { query } from './query'



 const Query=()=>{
  client
  .query({
    query
  })
  .then(result => console.log(result));

}

export default Query


