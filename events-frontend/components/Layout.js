import {useRouter} from "next/router"; 
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import Showcase from "./Showcase";
import styles from "@/styles/Layout.module.css";

const Layout = ({ title, keywords, description, children }) => {
	const router = useRouter();

	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
			</Head>

			<Header />
			{router.pathname == "/" && <Showcase />}
			<div className={styles.container}>
				{children}
			</div>
			<Footer />
		</div>
	)
} 

Layout.defaultProps = {
	title: "DJ Events | Find the best gigs",
	description: "Find the latest DJ and other events.",
	keywords: "music, events"
}

export default Layout;