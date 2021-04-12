import { Icon, ICON_FIELDS } from "./icon";
import { Actions, ACTION_FIELDS } from "./actions";
import { Section, SectionFields } from "./section";
import { Blocks } from "./blocks";

export const Feature = (data) => {
  return (
    <div
      className="px-8 py-6 w-full xl:w-auto flex-grow xl:flex-shrink"
      style={{ flexBasis: "22rem" }}
    >
      <div className="max-w-lg">
        <div className={`mb-6 w-auto inline-block`}>
          <Icon icon={data.icon} />
        </div>
        <h3 className="mb-4 transition duration-150 ease-out text-2xl font-semibold title-font">
          {data.title}
        </h3>
        <p className="mb-5 transition duration-150 ease-out text-base opacity-80 leading-relaxed">
          {data.text}
        </p>
        <Actions actions={data.actions} />
      </div>
    </div>
  );
};

export const feature_template = {
  label: "Feature",
  defaultItem: {
    icon: {
      color: "primary",
      name: "",
      style: "circle",
    },
    title: "Feature Heading Text",
    text:
      "Connect to any data source, edit with Tina. Designed for the Jamstack with a focus on React-based sites. ",
    actions: [
      {
        label: "Learn More",
        type: "link",
        icon: "true",
      },
    ],
    style: {
      color: "default",
    },
  },
  itemProps: (item) => ({
    label: item.title,
  }),
  fields: [
    ...ICON_FIELDS,
    {
      name: "title",
      label: "Title",
      component: "text",
    },
    {
      name: "text",
      label: "Text",
      component: "text",
    },
    ...ACTION_FIELDS,
  ],
};

export const Features = (data) => {
  return (
    <Section variant={data.style.color}>
      <div className="container py-12 lg:py-24 mx-auto">
        <div className="flex flex-wrap text-left">
          <Blocks data={data.items} blocks={FEATURE_BLOCKS} />
        </div>
      </div>
    </Section>
  );
};

export const features_template = {
  label: "Features",
  defaultItem: {
    items: [
      {
        _template: "feature",
        icon: {
          color: "red",
          name: "BiTrophy",
          style: "circle",
        },
        title: "Longer Information 1",
        text:
          "By eleven o'clock the next day we were well upon our way to the old English capital.",
        actions: [
          {
            label: "Learn More",
            type: "link",
            icon: "true",
          },
        ],
      },
      {
        _template: "feature",
        icon: {
          color: "primary",
          name: "BiPieChartAlt2",
          style: "circle",
        },
        title: "Longer Information 2",
        text:
          "Connect to any data source, edit with Tina. Designed for the Jamstack with a focus on React-based sites. ",
        actions: [
          {
            label: "Learn More",
            type: "link",
            icon: "true",
          },
        ],
      },
      {
        _template: "feature",
        icon: {
          color: "yellow",
          name: "BiMapAlt",
          style: "circle",
        },
        title: "Longer Information 3",
        text:
          "Connect to any data source, edit with Tina. Designed for the Jamstack with a focus on React-based sites. ",
        actions: [
          {
            label: "Learn More",
            type: "link",
            icon: "true",
          },
        ],
      },
    ],
    style: {
      color: "default",
    },
  },
  fields: [
    {
      label: "Features",
      name: "items",
      component: "blocks",
      itemProps: (item) => ({
        label: item.title,
      }),
      templates: {
        feature: feature_template,
      },
    },
    {
      name: "style",
      label: "Style",
      component: "group",
      fields: [...SectionFields],
    },
  ],
};

const FEATURE_BLOCKS = {
  feature: Feature,
};
