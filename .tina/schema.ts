import { defineSchema } from "tina-graphql-gateway-cli";
import { PageTemplate } from "./PageTemplate";
import { ThemeTemplate } from "./ThemeTemplate";

export default defineSchema({
  collections: [
    {
      label: "Theme",
      name: "theme",
      path: "theme",
      format: "json",
      templates: [ThemeTemplate],
    },
    {
      label: "Pages",
      name: "page",
      path: "data-new",
      format: "json",
      templates: [PageTemplate],
    },
  ],
});
