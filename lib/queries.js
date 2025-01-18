// lib/queries.js
export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      id
      slug
      content {
        text
      }
      image {
      url
      }
    }
  }
`;