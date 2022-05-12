import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* Favicon */}
					<link rel="icon" href="/favicon.ico" sizes="any" />
					<link rel="icon" href="/icon.svg" type="image/svg+xml" />
					<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
					<link rel="manifest" href="/manifest.webmanifest" />

					<title>TODO App</title>
					<meta name="description" content="The ultimate TODO app with dark mode support" />

					{/* <meta property="og:url" content="" /> */}
					<meta property="og:title" content="TODO App" />
					<meta property="og:description" content="The ultimate TODO app with dark mode support" />

					<meta property="og:type" content="website" />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
