import React, { useState } from "react"
import { Link } from "gatsby"
import { VueWrapper } from "vuera"
import MyVueComponent from "../components/hello-world.vue"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const [greeting, setGreeting] = useState("Hello")

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <fieldset>
        <legend>React</legend>
        <input
          type="text"
          value={greeting}
          onChange={e => setGreeting(e.target.value)}
        />
      </fieldset>
      <fieldset>
        <legend>Vue</legend>
        <VueWrapper component={MyVueComponent} greeting={greeting} />
      </fieldset>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
