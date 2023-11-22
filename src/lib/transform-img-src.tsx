import { visit } from "unist-util-visit";

interface TransformImgSrcProps {
  id: string;
  imagesDirectory: string;
}

export default function transformImgSrc(options: TransformImgSrcProps) {
  const { id, imagesDirectory } = options;

  return (tree) => {
    visit(tree, "paragraph", (node) => {
      const image = node.children.find((child) => {
        return child.type === "image";
      });

      if (image) {
        console.log("⭐️", image.url);
        const fileName = image.url.replace("./", "");
        image.url = `${imagesDirectory}/${id}/${fileName}`;
      }
    });
  };
}
