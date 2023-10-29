import "@/styles/global.css";
import { fontInter400, fontFraiche } from "@/components/Fonts";

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        :root {
          --inter-font: ${fontInter400.style.fontFamily};
          --fraiche-font: ${fontFraiche.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
