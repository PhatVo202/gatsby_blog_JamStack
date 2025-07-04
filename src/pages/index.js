import * as React from "react"
import { Headers } from "../components/Header/Headers"
import { Footers } from "../components/Footer/Footers"
import { Content } from "./contents/Content"

const IndexPage = () => {
  return (
    <div>
      <Headers />
      <Content />
      <Footers />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
