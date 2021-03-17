import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({  
  title,  
  subheading,  
}) => (
  <div>
    <div
      className="margin-top-0"    
    >
      <div className="main-heading" 
      style={{
        display: 'flex', 
        flexDirection: 'column', 
        height: '200px', 
        lineHeight: '1', 
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
       
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen" style={{
            color: 'black',            
            lineHeight: '1',
            padding: '0.25em',
            marginTop: '1em'
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{            
            color: 'black',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>

      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div >
            <div className="column is-12">
              <div className="content">
               
                <div >
                  <h4 className="recent-posts">
                    Recent Blog Posts
                  </h4>

                  <BlogRoll />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
      }
    }
  }
`
