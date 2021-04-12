import * as React from "react";

import { useCMS, withTina, useForm, usePlugin } from "tinacms";
import { Hero } from "../components/hero";
import { Testimonial } from "../components/testimonial";
import { Blocks } from "../components/blocks";
import { Nav } from "../components/nav";
import { Footer } from "../components/footer";
import { Features } from "../components/features";
import { TinaModal } from "../components/modal";
import { Theme } from "../components/theme";
import HomeData from "../data/home.json";

const App = () => {
  const cms = useCMS();
  cms.plugins.remove({
    __type: "screen",
    name: "Media Manager",
  });

  const [showModal, setShowModal] = React.useState(false);

  const [data, form] = useForm({
    initialValues: HomeData,
    fields: [],
    onSubmit: (values) => {
      setShowModal(true);
    },
  });

  usePlugin(form);

  return (
    <div className="App">
      <Theme>
        <Nav data={data.nav} />
        {data.blocks && <Blocks data={data.blocks} blocks={PAGE_BLOCKS} />}
        <Footer name={data.nav.wordmark.name} data={data.footer} />
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

const tinaOptions = { enabled: true, sidebar: true, toolbar: false };

export default withTina(App, tinaOptions);
