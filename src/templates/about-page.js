import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <>
    <div className="center margin-top-2" style={{
            marginTop: '5em'
          }}>
      <h1 className="has-text-weight-bold is-size-1" style={{
              color: 'black',
            }}>
            {title}
      </h1>

    </div>
    <section className="section section--gradient">
    <div className="container">
      <div className="column is-10 is-offset-1">        
        <div className="blogPostContentsContainer" style={{margin: '2em auto'}}>
          <PageContent className="content" content={content} />
        </div>        
      </div>
    </div>
  </section>
    </>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
