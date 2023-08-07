import React,  { useState } from 'react'
import Fuse from 'fuse.js'
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"

const SearchComponent = () => {
    
    const [query, updateQuery] = useState('');
    const [result, updateResult] = useState('');
    
    const data = useStaticQuery(graphql`
    {
      allMarkdownRemark (limit: 10) {
        nodes {
          id
          frontmatter {
            title
            description
            templateKey
          }
          fields {
            slug
          }
          html
        }
      }
    }
  `)

    const fuseOptions = {
      // Search options can be tweaked depending on use-case
        isCaseSensitive: false,
        // includeScore: false,
        shouldSort: true,
        includeMatches: false,
        findAllMatches: false,
        minMatchCharLength: 1,
        // location: 0,
        // threshold: 0.6,
        // distance: 100,
        useExtendedSearch: true,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        // fieldNormWeight: 1,
        
        // Keys are where the fusejs will search the keywords
        // More documentation on official page: https://www.fusejs.io/
        keys: [
            "frontmatter.title",
            "frontmatter.description",
            "html",
            "fields.slug"
        ]
    };

    const fuse = new Fuse(data.allMarkdownRemark.nodes, fuseOptions);

    const handleOnChange = (event) => {
        
        event.target.value === '' ? updateQuery('') : updateQuery(event.target.value)
        event.target.value === '' ? updateResult('') : updateResult(fuse.search(query))
    }
    
  return (
    <span className='search-list-container'>

    <input type="text" id="search-input" className="search-input" name="search" minLength="1"  onChange={handleOnChange} placeholder='Search' value={query}/>

    <ul className='search-list'>
        { result === null || result === undefined || result === ''? "" :
             result.map(data => {
                return  (<li key={data.item.id} className='search-list-item'>
                { data.item.frontmatter.templateKey === "blog-post" ?                    
                    <Link to={data.item.fields.slug}>{ClipText(data.item.frontmatter.title)}</Link> : ""}
                </li>)
              })  
        }
    </ul>
    </span>
  )
}

const ClipText = (data) => {
    if(typeof window !== 'undefined'){

      let clipLength = null
      if (window.innerWidth <= 500)
          clipLength = 36
      else if (window.innerWidth > 500 && window.innerWidth < 800)
          clipLength = 50
      else if (window.innerWidth > 800)
          clipLength = 80
      return  data.slice(0, clipLength)
    } else return data
  }

export default SearchComponent