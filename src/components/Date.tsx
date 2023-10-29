import { parseISO, format } from "date-fns";
import styles from "./Date.module.css";

export default function Date(dateObject: { dateString: string }): JSX.Element {
  const { dateString } = dateObject;

  const date = parseISO(dateString);

  return (
    <time className={styles.date} dateTime={dateString}>
      {format(date, "LLLL d, yyyy")}
    </time>
  );
}
