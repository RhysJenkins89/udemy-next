import Layout from "@/components/Layout";
import Link from "next/link";
import { API_URL } from "@/config/index";

export default function HomePage() {
  return (
    <Layout>
      <h1>Upcoming events</h1>
      <Link href="/about">About</Link>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/api-events`);
  const events = await res.json();
  console.log(events);
  return {
    props: {}
  }
}