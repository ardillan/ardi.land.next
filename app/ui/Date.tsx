import { parseISO, format } from "date-fns";
import styles from "./Date.module.css";
import { formatDate } from "@/lib/helpers";

export default function Date(dateObject: { dateString: string }): JSX.Element {
  const { dateString } = dateObject;

  const date = parseISO(dateString);

  return (
    <time className={styles.date} dateTime={dateString}>
      {formatDate(dateString, "readable")}
    </time>
  );
}
