import parse from "html-react-parser";
const RichTextRenderer = ({ content }) => {
  return <div className="rich-text-container">{parse(content || "")}</div>;
};

export default RichTextRenderer;
