export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: String!) {
    page(where: { slug: $slug }) {
      slug
      content {
        text
      }
      imageUrl
      backgroundImageUrl
      audioUrl
    }
  }
`;