import Project from "../@lekoarts/gatsby-theme-minimal-blog/texts/project";

import * as React from "react"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout";
import {  Heading } from "theme-ui"
import Seo from "@lekoarts/gatsby-theme-minimal-blog/src/components/seo";

export default function Component () {
  return(
    <Layout>
        <Seo title="Projects" />
        <Heading as="h1" variant="styles.h1" sx={{ marginY: 2 }}>
          Projects
        </Heading>
        <Project />
    </Layout>
  ) 
}
