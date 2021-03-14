import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const BlogPost = ({ data }) => {
    const { title, body, heroImage } = data.contentfulBlogPost;

    return (
        <Layout>
            <h1>{title}</h1>
            <img alt={title} src={heroImage.file.url} />
            <div dangerouslySetInnerHTML={{__html: body.childMarkdownRemark.html}}></div>
        </Layout>
    );
}

export default BlogPost;


export const pageQuery = graphql`

    query blogPostQuery($slug: String!) {
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            slug
            
   			body {
              childMarkdownRemark {
                html
              }
            }
            heroImage {
                
                file {
                  url
                }
              }
            
        }
    }
    `
