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
                        // {
                        //   name: "name",
                        //   label: "Icon",
                        //   component: "select",
                        //   options: [
                        //     {
                        //       label: "Random",
                        //       value: "",
                        //     },
                        //     {
                        //       label: "Aperture",
                        //       value: "FiAperture",
                        //     },
                        //     {
                        //       label: "Code Block",
                        //       value: "BiCodeBlock",
                        //     },
                        //     {
                        //       label: "Like",
                        //       value: "BiLike",
                        //     },
                        //     {
                        //       label: "Map",
                        //       value: "BiMapAlt",
                        //     },
                        //     {
                        //       label: "Palette",
                        //       value: "BiPalette",
                        //     },
                        //     {
                        //       label: "Pie Chart",
                        //       value: "BiPieChartAlt2",
                        //     },
                        //     {
                        //       label: "Pin",
                        //       value: "BiPin",
                        //     },
                        //     {
                        //       label: "Shield",
                        //       value: "BiShield",
                        //     },
                        //     {
                        //       label: "Setting Sliders",
                        //       value: "BiSlider",
                        //     },
                        //     {
                        //       label: "Store",
                        //       value: "BiStore",
                        //     },
                        //     {
                        //       label: "Tennis Ball",
                        //       value: "BiTennisBall",
                        //     },
                        //     {
                        //       label: "Test Tube",
                        //       value: "BiTestTube",
                        //     },
                        //     {
                        //       label: "Trophy",
                        //       value: "BiTrophy",
                        //     },
                        //     {
                        //       label: "User",
                        //       value: "BiUserCircle",
                        //     },
                        //     {
                        //       label: "Beer",
                        //       value: "BiBeer",
                        //     },
                        //     {
                        //       label: "Chat",
                        //       value: "BiChat",
                        //     },
                        //     {
                        //       label: "Cloud",
                        //       value: "BiCloud",
                        //     },
                        //     {
                        //       label: "Coffee",
                        //       value: "BiCoffeeTogo",
                        //     },
                        //     {
                        //       label: "World",
                        //       value: "BiWorld",
                        //     },
                        //   ],
                        // },
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
              ],
            },
          ],
        },
      ],
    },
  ],
});
