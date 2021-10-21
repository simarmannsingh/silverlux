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
  date,
  title,
  helmet,
}) => {
  const PostContent = contentComponent || Content
  let PostImage = null;
  if(image !== undefined)
  {
    PostImage = image.childImageSharp.fluid.src
    console.log(PostImage);
  }
  scrollToBlog()
  return (
    <section>
      {helmet || ''}
      <div className="content">
        <div className="flex flex-col">
          <div className="flex flex-col-around"
              >
                
            <img src={PostImage} className="blogPostFeatureImage" style={{width:'100vw'}} alt="NOTE: The FeaturedImage and publishedDate have been disabled in preview mode as their implementation will change in the upcoming builds and are in unfinished state as of now."></img>

            <div className="blogContainer" >
            <h1
                style={{fontFamily:'Poppins, sans-serif', color:'#000', fontWeight:'700', fontSize: '2.8rem' }}>
              {title}
            </h1>
            <p className="blogPostDescription">{description}</p>
            
            <p className="blogPostedDetails">Posted by <span className="blogPostAuthor">Simar Mann Singh</span> on <span className="blogPostDate">{date}</span>  </p>

            <div className="line"></div>

            <div className="blogPostContentsContainer">
              <PostContent className="blogPostContent" content={content} />
              
              {tags && tags.length ? (
                <div style={{ marginTop: `4rem` }}>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map((tag) => (
                      <li key={tag + `tag`} className="center" >
                      <Link className="tag" to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
}

const scrollToBlog = () => {  
  if(typeof window !== 'undefined')
  {
    window.scrollTo({top:400, behavior:"smooth"})
  }
}

BlogPostTemplate.propTypes = {  
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  content: PropTypes.node.isRequired,
  date : PropTypes.string,
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
        date={post.frontmatter.date}
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
            fluid(maxWidth: 1280, quality: 100) {
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
