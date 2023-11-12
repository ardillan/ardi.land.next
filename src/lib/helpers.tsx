import { ARDI_BIRTHDAY } from "@/lib/constants";

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
  let birthDay = new Date(ARDI_BIRTHDAY);
  let today = new Date();
  let ageDate = new Date(today - birthDay);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

export function getExperience(birthdateString: string): number {
  // Parse the input string into a Date object
  const birthdate = new Date(birthdateString);

  // Get today's date
  const today = new Date();

  // Set the birthdate to the current year
  const nextBirthday = new Date(
    today.getFullYear(),
    birthdate.getMonth(),
    birthdate.getDate()
  );

  // If the next birthday has already occurred this year, set it to next year
  if (today > nextBirthday) {
    nextBirthday.setFullYear(today.getFullYear() + 1);
  }

  // Calculate the time difference in milliseconds
  const timeDiff = nextBirthday.getTime() - today.getTime();

  // Convert the time difference to days
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

  if (daysLeft === 366) {
    return 365;
  }

  return 365 - daysLeft;
}
