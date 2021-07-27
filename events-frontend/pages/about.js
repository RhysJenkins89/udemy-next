import Link from "next/link";
import Layout from "@/components/Layout";

const AboutPage = () => {
  return (
    <Layout title="About DJ Events">
      <h1>This is the about page.</h1>
      <p>This is an app to find the latest gigs.</p>
      <p>Version: Steven is a f a i l u r e.</p>
      <Link href="/">Home</Link>
    </Layout>
  )
}

export default AboutPage;