import * as React from "react";

import { Hero, hero_template } from "../components/hero";
import { Testimonial, testimonial_template } from "../components/testimonial";
import { Blocks } from "../components/PageBlocks";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { Features, features_template } from "../components/features";
import { createLocalClient } from "../utils";
import { Homepage_Doc_Data } from "../.tina/__generated__/types";
import { Theme } from "../components/theme";

interface AppProps {
  pageProps: {
    getPageDocument: { data: Homepage_Doc_Data };
  };
}
const App = ({ pageProps }: AppProps) => {
  const { blocks, nav, footer, navlist } = pageProps.getPageDocument.data;
  return (
    <div className="App">
      <Theme>
        <div className="min-h-screen flex flex-col">
          <Nav nav={nav} />
          <div className="flex-grow flex flex-col">
            <Blocks
              blocksData={blocks}
              placeholder={
                <div className="flex-grow flex items-center justify-center transition duration-150 ease-out text-gray-700 dark:text-gray-100 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 body-font overflow-hidden">
                  <p className="opacity-30">
                    There's nothing here, try adding some page sections.
                  </p>
                </div>
              }
            />
          </div>
          <Footer
            name={nav?.wordmark?.name || ""}
            footer={footer}
            navList={navlist}
          />
        </div>
      </Theme>
      {/* {showModal && (
        <TinaModal
        data={data}
        close={() => {
          setShowModal(false);
        }}
      /> */}
      {/* )} */}
    </div>
  );
};

const PAGE_BLOCKS = {
  hero: Hero,
  testimonial: Testimonial,
  features: Features,
};

const PAGE_BLOCK_TEMPLATES = {
  hero: hero_template,
  testimonial: testimonial_template,
  features: features_template,
};

export default App;

const client = createLocalClient();

export const query = `#graphql
 query ContentQuery
{
  getPageDocument(relativePath: "homepage.json") {
    id
    sys {
      breadcrumbs
      filename
    }
    data {
      __typename
      ... on Homepage_Doc_Data {
        nav {
          items {
            label
            link
          }
          wordmark {
            icon {
              color
              name
            }
            name
          }
        }
        blocks {
          __typename ... on Features_Data {
            items {
              icon {
                color
                name
                style
              }
              text
              title
              actions {
                label
                type
                icon
              }
            }
          }
          __typename ... on Testimonial_Data {
            quote
            author
            style {
              color
            }
          }
          __typename
          ... on Hero_Data {
            paragraph
            headline
            tagline
            text {
              color
            }
            image {
              src
              alt
            }
            actions {
              label
              type
              icon
            }
          }
        }
        navlist {
          __typename
          ... on Nav_Data {
            title
            items {
              label
              link
            }
          }
        }
        footer {
          social {
            facebook
            twitter
            instagram
            github
          }
        }
      }
    }
  }
}
`;

export const getStaticProps = async (ctx) => {
  const data = await client.request(query, {
    variables: {},
  });
  return {
    props: {
      pageProps: data,
      query,
      variables: {},
    },
  };
};
