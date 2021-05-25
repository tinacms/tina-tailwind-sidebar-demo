import { defineSchema } from "tina-graphql-gateway-cli";
import { PageTemplate } from "./PageTemplate";
import { ThemeTemplate } from "./ThemeTemplate";

export default defineSchema({
  collections: [
    {
      label: "Theme",
      name: "theme",
      path: "content/theme",
      format: "json",
      templates: [ThemeTemplate],
    },
    {
      label: "Pages",
      name: "page",
      path: "content/data",
      format: "json",
      templates: [PageTemplate],
    },
  ],
});
