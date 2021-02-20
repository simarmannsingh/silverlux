import React from 'react'
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const BlogPostTemplate = ({
  image,
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  const PostImage = image.childImageSharp.fluid.src
  console.log(PostImage);
  return (
    <section>
      {helmet || ''}
      <div className="content">
        <div className="flex flex-col">
          <div className="flex flex-col-around"
              >
                
            <img src={PostImage} className="blogPostFeatureImage" style={{width:'100vw'}} alt="dummy text"></img>

            <div className="blogContainer">
            <h1
                style={{fontFamily:'Poppins, sans-serif', fontWeight:'700' }}>
              {title}
            </h1>
            <p>Posted by <span>Simar Mann Singh</span> on  </p>

            <p>{description}</p>

            <PostContent className="blogPostContent" content={content} />
            
            {tags && tags.length ? (
              <div style={{ marginTop: `4rem` }}>
                <h4>Tags</h4>
                <ul className="taglist">
                  {tags.map((tag) => (
                    <li key={tag + `tag`}>
                      <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {  
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data    
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        image={post.frontmatter.featuredimage}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD MMM, YYYY")
        title
        description
        featuredimage{
          childImageSharp {
            fluid(maxWidth: 1024, quality: 50) {
              ...GatsbyImageSharpFluid
            }
            id : id
          }
        }
        tags
      }
    }
  }
`
