import Image from "next/image";
import styles from "./page.module.css";
import { Typography } from "@mui/joy";

export default function Home() {
  return (
    <main className={styles.main}>
      <Typography>Welcome, From material UI library</Typography>
    </main>
  );
}
