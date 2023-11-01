export const formatDateTime = (commitTime: string): string => {
  return new Date(commitTime).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
};

export const formatDate = (
  postDate: string,
  type: string = "readable"
): string => {
  switch (type) {
    case "readable":
      return new Date(postDate).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    case "numeric":
      return new Date(postDate).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "numeric",
        day: "numeric",
      });
    default:
      return new Date(postDate).toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
  }
};
