import { visit } from "unist-util-visit";

const imgDirInsidePublic = "/posts";

export default function transformImgSrc({ id }) {
  return (tree) => {
    visit(tree, "paragraph", (node) => {
      const image = node.children.find((child) => {
        return child.type === "image";
      });

      if (image) {
        const fileName = image.url.replace("./", "");
        image.url = `${imgDirInsidePublic}/${id}/${fileName}`;
      }
    });
  };
}
