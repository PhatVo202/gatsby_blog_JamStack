import * as React from "react"
import { Headers } from "../components/Header/Headers"
import { Footers } from "../components/Footer/Footers"
import { BlogContent } from "./blog-contents/BlogContent"

const BlogPage = () => {
  return (
    <div>
      <Headers />
      <BlogContent />
      <Footers />
    </div>
  )
}

export default BlogPage

export const Head = () => <title>Blog Page</title>
