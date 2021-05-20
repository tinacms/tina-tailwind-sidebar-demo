// export const Blocks = ({ data, blocks, placeholder = null }) => {
//   if (data.length < 1) return placeholder;
//   return data
//     ? data.map(function (block, i) {
//         const BlockComponent = blocks[block._template]
//           ? blocks[block._template]
//           : null;
//         return <BlockComponent {...block} />;
//       })
//     : null;
// };

import { Homepage_Blocks_Data } from "../.tina/__generated__/types";
import { Features } from "./features";
import { Hero } from "./hero";
import { Testimonial } from "./testimonial";

export const Blocks: React.FC<{
  blocksData: Homepage_Blocks_Data[];
  placeholder: JSX.Element;
}> = ({ blocksData, placeholder }) => {
  console.log({
    blocksData,
  });
  if (!blocksData || blocksData.length < 1) return placeholder;
  return (
    <>
      {blocksData.map((block, i) => {
        switch (block.__typename) {
          case "Features_Data":
            return <Features {...block} />;
          case "Hero_Data":
            return <Hero {...block} />;
          case "Testimonial_Data":
            return <Testimonial {...block} />;
        }
      })}
    </>
  );
};
