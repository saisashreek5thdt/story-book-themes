"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { GraphQLClient } from "graphql-request";
import { GET_PAGE_BY_SLUG } from "@/lib/queries";

// Initialize GraphQL Client
const endpoint = process.env.NEXT_PUBLIC_HYGRAPH_ENDPOINT; // Add this to your .env file
const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HYGRAPH_TOKEN}`, // Add token to .env file
  },
});

// GraphQL Query
export const GET_PAGE_BY_SLUG = `
  query GetPageBySlug($slug: String!) {
    pages(where: { slug: $slug }) {
      slug
      content {
        text
      }
      imageUrl
    }
  }
`;

// getStaticPaths: Generate paths for static pages
export async function getStaticPaths() {
  // Fetch all slugs from Hygraph to generate paths
  const response = await graphQLClient.request(`
    query GetAllSlugs {
      pages {
        slug
      }
    }
  `);

  const paths = response.pages.map((page) => ({
    params: { id: page.slug },
  }));

  return {
    paths,
    fallback: false, // Show a 404 for missing pages
  };
}

// getStaticProps: Fetch data for a specific slug
export async function getStaticProps({ params }) {
  const { id: slug } = params;

  try {
    const response = await graphQLClient.request(GET_PAGE_BY_SLUG, { slug });
    return {
      props: {
        pageData: response.pages[0], // Hygraph returns an array
      },
    };
  } catch (error) {
    console.error("Error fetching page content:", error);
    return {
      notFound: true, // Show a 404 page if there's an error
    };
  }
}

// Page Component
export default function Page({ pageData }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isPortrait, setIsPortrait] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsPortrait(window.innerHeight > window.innerWidth);

      const handleResize = () => {
        setIsPortrait(window.innerHeight > window.innerWidth);
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const handleNavigation = (direction) => {
    const currentSlug = parseInt(pageData.slug);
    const newSlug = direction === "next" ? currentSlug + 1 : currentSlug - 1;

    router.push(`/pages/${newSlug.toString().padStart(2, "0")}`);
  };

  if (!pageData) {
    return <div>Content not available. Please try again later.</div>;
  }

  return (
    <div>
      {isPortrait ? (
        <div className="w-full min-h-screen bg-cover flex flex-col items-center justify-center">
          {/* Portrait View */}
          <div className="grid grid-rows-2">
            <div>
              {/* Image Section */}
              {pageData.imageUrl && (
                <Image
                  src={pageData.imageUrl}
                  alt="Page Cover"
                  width={800}
                  height={1400}
                  className="object-cover"
                />
              )}
            </div>
            <div>
              {/* Content Section */}
              <div>
                <div
                  className={`overflow-hidden ${
                    isExpanded ? "max-h-none" : "max-h-[250px]"
                  }`}
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: pageData.content.text,
                    }}
                  />
                </div>
                <button onClick={toggleExpand}>
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
              {/* Navigation Buttons */}
              <div>
                <button onClick={() => handleNavigation("prev")}>
                  <ArrowLeft />
                </button>
                <button onClick={() => handleNavigation("next")}>
                  <ArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Landscape View
        <div className="w-full min-h-screen bg-cover flex flex-col items-center justify-center">
          <div className="grid grid-cols-2">
            {/* Content Section */}
            <div>
              <div
                className={`overflow-hidden ${
                  isExpanded ? "max-h-none" : "max-h-[320px]"
                }`}
              >
                <p
                  dangerouslySetInnerHTML={{
                    __html: pageData.content.text,
                  }}
                />
              </div>
              <button onClick={toggleExpand}>
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </div>
            {/* Image Section */}
            <div>
              {pageData.imageUrl && (
                <Image
                  src={pageData.imageUrl}
                  alt="Page Cover"
                  width={800}
                  height={1400}
                  className="object-cover"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}