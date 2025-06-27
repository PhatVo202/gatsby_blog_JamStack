import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"

export const BlogContent = () => {
  return (
    <main>
      <article className="main-article">
        <div className="container container--narrow flow">
          <h1 className="article-title">My Third Article</h1>
          <figure className="main-article__figure">
            <img src="/assets/blog/article-3.jpg" alt="This is a test" />
            <figcaption>This is a test</figcaption>
          </figure>
        </div>
      </article>
    </main>
  )
}
