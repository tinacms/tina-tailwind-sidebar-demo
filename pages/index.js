import * as React from "react";

import { useCMS, withTina, useForm, usePlugin } from "tinacms";
import { Hero, hero_template } from "../components/hero";
import { Testimonial, testimonial_template } from "../components/testimonial";
import { Blocks } from "../components/blocks";
import { Nav, NAV_FIELDS } from "../components/nav";
import { Footer, FOOTER_FIELDS } from "../components/footer";
import { Features, features_template } from "../components/features";
import { TinaModal } from "../components/modal";
import { Theme } from "../components/theme";
import HomeData from "../data/home.json";
import { createClient } from "../utils";

const App = () => {
  const cms = useCMS();
  cms.plugins.remove({
    __type: "screen",
    name: "Media Manager",
  });

  const [showModal, setShowModal] = React.useState(false);

  const [data, form] = useForm({
    initialValues: HomeData,
    fields: [
      {
        name: "nav",
        label: "Navbar",
        component: "group",
        fields: NAV_FIELDS,
      },
      {
        label: "Page Sections",
        name: "blocks",
        component: "blocks",
        templates: PAGE_BLOCK_TEMPLATES,
      },
      {
        name: "footer",
        label: "Footer",
        component: "group",
        fields: FOOTER_FIELDS,
      },
    ],
    onSubmit: (values) => {
      setShowModal(true);
    },
  });

  usePlugin(form);

  return (
    <div className="App">
      <Theme>
        <div className="min-h-screen flex flex-col">
          <Nav data={data.nav} />
          <div className="flex-grow flex flex-col">
            <Blocks
              data={data.blocks}
              blocks={PAGE_BLOCKS}
              placeholder={
                <div className="flex-grow flex items-center justify-center transition duration-150 ease-out text-gray-700 dark:text-gray-100 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 body-font overflow-hidden">
                  <p className="opacity-30">
                    There's nothing here, try adding some page sections.
                  </p>
                </div>
              }
            />
          </div>
          <Footer name={data.nav.wordmark.name} data={data.footer} />
        </div>
      </Theme>
      {showModal && (
        <TinaModal
          data={data}
          close={() => {
            setShowModal(false);
          }}
        />
      )}
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

const client = createClient();

export const query = `#graphql
 query ContentQuery {
    getPageDocument(relativePath: "homepage.json"){
      id
      sys {
        breadcrumbs
        filename
      }
      data {
        __typename ... on Homepage_Doc_Data {
          nav {
            __typename ... on Homepage_Nav_Data {
              wordmark {
                ... on HomepageNav_Wordmark_Data {
                  icon {
                    ... on NavWordmark_Icon_Data {
                      color
                      style
                    }
                  }
                  name
                }
              }
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
  console.log({ data });
  return {
    props: {
      data,
      query,
      variables: {},
    },
  };
};
