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

export const getAge = (): number => {
  let birthDay: Date = new Date("Aug 23 1988 13:50:00 GMT+0200 (CEST)");
  let today: Date = new Date();
  let ageDate = new Date(today - birthDay);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export const getExperience = (birthDate: Date): number => {
  const today = new Date();
  const nextBirthDay = new Date(
    today.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  const dayInMiliseconds = 1000 * 60 * 60 * 24;

  if (nextBirthDay < today) {
    nextBirthDay.setFullYear(today.getFullYear() + 1);
  }

  const daysToNextBirthday = Math.ceil(
    (nextBirthDay.getTime() - today.getTime()) / dayInMiliseconds
  );

  return daysToNextBirthday;
};
