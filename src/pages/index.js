import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const BlogPost = ({ node }) => {
  return (
    <li key={node.id}>
      <Link to={node.slug}>{node.title}</Link>
      {/* <img src={node.featuredImage.fluid.src} alt={node.featuredImage.description} /> */}
      <div>{node.content.childMarkdownRemark.excerpt}</div>
    </li>
  )
}

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Demo Gatsby and Contentful Site</h1>

    <ul>
      { data.allContentfulBlog.edges.map(edge => 
          <BlogPost node={edge.node} />
        )}
    </ul>

    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    
  </Layout>
)

export default IndexPage

export const PageQuery = graphql`
      query pageQuery {
        allContentfulBlog(filter: {
          node_locale: {eq: "en-US"}
        },
        sort: {
          fields: [date],
          order: DESC
        }) {
            edges {
              node {
                id
                title
                slug
                content {
                  childMarkdownRemark {
                    excerpt
                  }
                }
                featuredImage {
                  fluid(maxWidth: 300) {
                    src
                  }
                  description
                }
              }
            }
        }
      }
`