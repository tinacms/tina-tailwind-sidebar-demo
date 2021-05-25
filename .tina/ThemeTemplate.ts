import { TinaCloudTemplate } from "tina-graphql-gateway-cli";

export const ThemeTemplate: TinaCloudTemplate = {
  name: "theme",
  label: "Theme",
  fields: [
    {
      name: "color",
      label: "Primary Color",
      type: "select",
      options: [
        "blue",
        "teal",
        "green",
        "red",
        "pink",
        "purple",
        "orange",
        "yellow",
      ],
    },
    {
      name: "btnStyle",
      label: "Button Style",
      type: "select",
      options: ["round", "rounded", "square"],
    },
  ],
};
