export const Blocks = ({ data, blocks }) => {
  return data
    ? data.map(function (block, i) {
        const BlockComponent = blocks[block._template]
          ? blocks[block._template]
          : null;
        return <BlockComponent {...block} />;
      })
    : null;
};
