import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Farcaster Poll Frame</title>
        <meta property="fc:frame" content="vNext" />
        <meta
          property="fc:frame:image"
          content="http://...image-question.png"
        />
        <meta property="fc:frame:button:1" content="Green" />
        <meta property="fc:frame:button:2" content="Purple" />
        <meta property="fc:frame:button:3" content="Red" />
        <meta property="fc:frame:button:4" content="Blue" />
      </Head>
      <h1>Farcaster Poll</h1>
      <p>
        This is a Farcaster poll. The actual poll content is controlled by the
        meta tags in the HTML head.
      </p>
    </div>
  );
}
