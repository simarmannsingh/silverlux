import React from 'react'
import Layout from '../components/Layout'
import {Link} from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <div className="content center flex flex-col"style={{minHeight: '65vh'}}>
      <h1>Oopssss....</h1>
      <p>That page cannot be found.</p>
      <span>
      Go back to the <Link to="/" > Homepage </Link>
      </span>
      
    </div>
  </Layout>
)

export default NotFoundPage
