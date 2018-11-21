import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Layout from '../components/layout'

class BlogPost extends Component {
  render() {
    const { title, content } = this.props.data.contentfulBlog
    return (
        <Layout>
            <div>
                <h1>{title}</h1>
                <div dangerouslySetInnerHTML={{__html: content.childMarkdownRemark.html }} />
            </div>
        </Layout>
    )
  }
}

BlogPost.propTypes = {
    data: PropTypes.object.isRequired
}

export default  BlogPost

export const pageQuery = graphql`
    query blogPostQuery($slug: String!) {
        contentfulBlog(slug: {eq: $slug}) {
            title
            slug
            content {
                childMarkdownRemark {
                    html
                }
            }
        }
    }
`

