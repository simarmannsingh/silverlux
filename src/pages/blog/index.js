import React from 'react'

import Layout from '../../components/Layout'
import BlogRoll from '../../components/BlogRoll'

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
         <div
          className="center margin-top-2"
          style={{
            marginTop: '5em'
          }}
        >
          <h1
            className="has-text-weight-bold is-size-1"
            style={{
              color: 'black',
            }}
          >
            Latest Blog Posts
          </h1>
        </div>
        <section className="section section--gradient">
          <div className="container">
            <div className="section">
              <div className="column is-12">
              <div className="content">
                <BlogRoll />
              </div>
              </div>
            </div>
            
          </div>
        </section>
      </Layout>
    )
  }
}
