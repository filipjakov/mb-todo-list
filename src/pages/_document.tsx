import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					{/* Favicon */}
					<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
					<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
					<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
					<link rel="manifest" href="/favicon/site.webmanifest" />
					<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#fa3244" />
					<link rel="shortcut icon" href="/favicon/favicon.ico" />
					<meta name="msapplication-TileColor" content="#ff0000" />
					<meta name="msapplication-config" content="/favicon/browserconfig.xml" />
					<meta property="fb:app_id" content="2845741545662785" />
					<meta property="al:android:package" content="com.sportening" />
					<meta property="al:android:app_name" content="Sportening" />
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
