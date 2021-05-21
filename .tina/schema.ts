import { defineSchema } from "tina-graphql-gateway-cli";

export default defineSchema({
  collections: [
    {
      label: "Pages",
      name: "page",
      path: "data-new",
      format: "json",
      templates: [
        {
          name: "homepage",
          label: "Homepage",
          fields: [
            {
              name: "nav",
              type: "group",
              label: "Navbar",
              fields: [
                {
                  label: "Wordmark",
                  name: "wordmark",
                  type: "group",
                  fields: [
                    {
                      label: "Icon",
                      name: "icon",
                      type: "group",
                      fields: [
                        {
                          name: "color",
                          label: "Color",
                          type: "select",
                          options: [
                            "primary",
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
                          name: "name",
                          label: "Icon",
                          type: "select",
                          options: [
                            "random",
                            "Aperture",
                            "BiCodeBlock",
                            "BiLike",
                            "BiMapAlt",
                            "BiPalette",
                            "BiPieChartAlt2",
                            "BiPin",
                            "BiShield",
                            "BiSlider",
                            "BiStore",
                            "BiTennisBall",
                            "BiTestTube",
                            "BiTrophy",
                            "BiUserCircle",
                            "BiBeer",
                            "BiChat",
                            "BiCloud",
                            "BiCoffeeTogo",
                            "BiWorld",
                          ],
                        },
                        {
                          name: "style",
                          label: "Style",
                          type: "select",
                          options: ["circle", "float"],
                        },
                      ],
                    },
                    {
                      label: "Name",
                      name: "name",
                      type: "text",
                    },
                  ],
                },
                {
                  label: "Nav Items",
                  name: "items",
                  type: "group-list",
                  fields: [
                    {
                      label: "Label",
                      name: "label",
                      type: "text",
                    },
                    {
                      label: "Link",
                      name: "link",
                      type: "text",
                    },
                  ],
                },
              ],
            },
            {
              name: "blocks",
              type: "blocks",
              label: "Page Sections",
              templates: [
                {
                  name: "hero",
                  label: "Hero",
                  fields: [
                    {
                      name: "tagline",
                      label: "Tagline",
                      type: "text",
                    },
                    {
                      name: "headline",
                      label: "Headline",
                      type: "text",
                    },
                    {
                      name: "paragraph",
                      label: "Paragraph",
                      type: "text",
                    },
                    {
                      name: "text",
                      label: "Text",
                      type: "group",
                      fields: [
                        {
                          name: "color",
                          label: "Color",
                          type: "select",
                          options: ["default", "tint", "primary"],
                        },
                      ],
                    },
                    {
                      name: "image",
                      label: "Image",
                      type: "group",
                      fields: [
                        {
                          name: "src",
                          label: "Image Source",
                          type: "text",
                        },
                        {
                          name: "alt",
                          label: "Alt Text",
                          type: "text",
                        },
                      ],
                    },
                    {
                      label: "Actions",
                      name: "actions",
                      type: "group-list",
                      // itemProps: (item) => ({
                      //   label: item.label,
                      // }),
                      // defaultItem: () => ({
                      //   label: "Action Label",
                      //   type: "button",
                      // }),
                      fields: [
                        {
                          label: "Label",
                          name: "label",
                          type: "text",
                        },
                        {
                          label: "Type",
                          name: "type",
                          type: "select",
                          options: ["button", "link"],
                        },
                        {
                          label: "Icon",
                          name: "icon",
                          type: "toggle",
                        },
                      ],
                    },
                    {
                      name: "style",
                      label: "Style",
                      type: "group",
                      fields: [
                        {
                          name: "color",
                          label: "Color",
                          type: "select",
                          options: ["default", "tint", "primary"],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "testimonial",
                  label: "Testimonial",
                  fields: [
                    {
                      name: "quote",
                      label: "Quote",
                      type: "textarea",
                    },
                    {
                      name: "author",
                      label: "Author",
                      type: "text",
                    },
                    {
                      name: "style",
                      label: "Style",
                      type: "group",
                      fields: [
                        {
                          name: "color",
                          label: "Color",
                          type: "select",
                          options: ["default", "tint", "primary"],
                        },
                      ],
                    },
                  ],
                },
                {
                  name: "features",
                  label: "Features",
                  fields: [
                    {
                      label: "Features",
                      name: "items",
                      type: "group-list",
                      // itemProps: (item) => ({
                      //   label: item.title,
                      // }),
                      fields: [
                        {
                          label: "Icon",
                          name: "icon",
                          type: "group",
                          fields: [
                            {
                              name: "color",
                              label: "Color",
                              type: "select",
                              options: [
                                "primary",
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
                              name: "name",
                              label: "Icon",
                              type: "select",
                              options: [
                                "random",
                                "Aperture",
                                "BiCodeBlock",
                                "BiLike",
                                "BiMapAlt",
                                "BiPalette",
                                "BiPieChartAlt2",
                                "BiPin",
                                "BiShield",
                                "BiSlider",
                                "BiStore",
                                "BiTennisBall",
                                "BiTestTube",
                                "BiTrophy",
                                "BiUserCircle",
                                "BiBeer",
                                "BiChat",
                                "BiCloud",
                                "BiCoffeeTogo",
                                "BiWorld",
                              ],
                            },
                            {
                              name: "style",
                              label: "Style",
                              type: "select",
                              options: ["circle", "float"],
                            },
                          ],
                        },
                        {
                          name: "title",
                          label: "Title",
                          type: "text",
                        },
                        {
                          name: "text",
                          label: "Text",
                          type: "text",
                        },
                        {
                          label: "Actions",
                          name: "actions",
                          type: "group-list",
                          // itemProps: (item) => ({
                          //   label: item.label,
                          // }),
                          // defaultItem: () => ({
                          //   label: "Action Label",
                          //   type: "button",
                          // }),
                          fields: [
                            {
                              label: "Label",
                              name: "label",
                              type: "text",
                            },
                            {
                              label: "Type",
                              name: "type",
                              type: "select",
                              options: ["button", "link"],
                            },
                            {
                              label: "Icon",
                              name: "icon",
                              type: "toggle",
                            },
                          ],
                        },
                      ],
                    },
                    {
                      name: "style",
                      label: "Style",
                      type: "group",
                      fields: [
                        {
                          name: "color",
                          label: "Color",
                          type: "select",
                          options: ["default", "tint", "primary"],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              label: "Nav List",
              name: "navlist",
              type: "blocks",
              templates: [
                {
                  name: "nav",
                  label: "Foooter nav",
                  fields: [
                    {
                      name: "title",
                      label: "Title",
                      type: "text",
                    },
                    {
                      name: "items",
                      label: "Nav Items",
                      type: "group-list",
                      fields: [
                        {
                          name: "label",
                          label: "Label",
                          type: "text",
                        },
                        {
                          name: "link",
                          label: "Link",
                          type: "text",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              name: "footer",
              label: "Footer",
              type: "group",
              fields: [
                {
                  name: "social",
                  label: "Social Media",
                  type: "group",
                  fields: [
                    {
                      name: "facebook",
                      label: "Facebook",
                      type: "text",
                    },
                    {
                      name: "twitter",
                      label: "Twitter",
                      type: "text",
                    },
                    {
                      name: "instagram",
                      label: "Instagram",
                      type: "text",
                    },
                    {
                      name: "github",
                      label: "Github",
                      type: "text",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});
