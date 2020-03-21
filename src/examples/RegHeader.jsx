// import React from "react"
// import { StaticQuery, graphql } from "gatsby"

// const getSiteData = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//         data {
//           name
//           age
//         }
//       }
//     }
//   }
// `

// const RegHeader = () => {
//   return (
//     <StaticQuery
//       query={getSiteData}
//       render={data => {
//         console.log(data)
//         return (
//           <div>
//             <h3>title:{data.site.siteMetadata.title}</h3>
//             <h5>author:{data.site.siteMetadata.author}</h5>
//             <p>description:{data.site.siteMetadata.description}</p>
//           </div>
//         )
//       }}
//     />
//   )
// }

// export default RegHeader
