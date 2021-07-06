import React from "react"
import { graphql } from "gatsby"
import PopupTerminalWindow from "../components/PopupTerminalWindow"
import "../styles/styles.scss"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <PopupTerminalWindow
      title={frontmatter.title}
      popupImageSrc={frontmatter.popupImageSrc}
      popupImageAlt={frontmatter.popupImageAlt}
      popupGithubLink={frontmatter.popupGithubLink}
      popupLiveLink={frontmatter.popupLiveLink}
      techIcons={frontmatter.techIcons}
      html={html}
    ></PopupTerminalWindow>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        listName
        nameOfClass
        popupGithubLink
        popupImageAlt
        popupImageSrc
        popupLiveLink
        techIcons
        title
      }
    }
  }
`