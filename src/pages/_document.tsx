import Document, { Html, Head, Main, NextScript } from "next/document";


export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta name="description" content="Landing Page Music Library" />
                    <meta property="og:title" content="Marcos" />
                    <meta property="og:description" content="Music Library - Lading Page" />
                    <meta property="og:type" content="website" />
                    <meta prefix="og: http://ogp.me/ns#" property="og:title" content="Music Library" />
                    <meta prefix="og: http://ogp.me/ns#" property="og:type" content="Music Library" />
                    <meta name="linkedin:url" content="https://www.linkedin.com/in/maarcoseduardo/" />
                    <meta name="author" content="Marcos Eduardo" />
                    <meta name="title" content="Marcos Eduardo" />
                    <meta name="keywords" content="Marcos, marcos, Marcos Eduardo" />
                </Head>
                <body>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;900&display=swap" rel="stylesheet" />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

