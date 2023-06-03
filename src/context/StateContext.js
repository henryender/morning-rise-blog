import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { GraphQLClient, gql } from 'graphql-request'

export const BlogContext = createContext()

const StateContext = ({ children }) => {
    const [res, setRes] = useState([])
    const [text, setText]=useState(false)

    useEffect(() => {
        const API = 'https://api-ca-central-1.hygraph.com/v2/cldxigriy0bqs01ui80mw3j2f/master'
        const graphcms = new GraphQLClient(API);
        const query = gql`query MyQuery {
    posts {
      author {
        avatar {
          url
        }
        name
      }
      content {
        html
      }
      coverPhoto {
        url
      }
      title
      createdAt
      slug
      category
      excerpt
    }
  }`
        async function GetData() {
            await graphcms.request(query)
                .then(response => setRes(response.posts))
                .catch(error => console.log(error))
        }
        GetData()

    }, [])
   

    const values = {res, text, setText}
    
    return (
        <>
            <BlogContext.Provider value={values}>
                {children}
            </BlogContext.Provider>

        </>
    )
}

export default StateContext



