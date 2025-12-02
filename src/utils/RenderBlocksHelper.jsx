// src/helpers/RenderBlocksHelper.jsx
// import blockComponentsMapping from "@/components/index";

import blockComponentsMapping from "../components";

const RenderBlocksHelper = ({ blocks }) => {
  if (!blocks || blocks.length === 0) {
    return <p>Page is empty</p>;
  }

  return (
    <>
      {blocks.map((block, index) => {
        const BlockComponent = blockComponentsMapping[block.name];

        if (!BlockComponent) {
          if (import.meta.env.DEV) {
            // Changed from process.env.NODE_ENV
            console.log(
              `Block with name "${block.name}" is not found in Block Mapping`
            );
          }
          return null;
        }
        return (
          <BlockComponent key={index} data={JSON.parse(block.attributesJSON)} />
        );
      })}
    </>
  );
};

export default RenderBlocksHelper;
