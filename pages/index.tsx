import Contact from "@/components/Contact/Contact";
import Introduction from "@/components/Introduction/Introduction";
import Layout from "@/components/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <>
        <Introduction />
        <Contact/>
      </>
    </Layout>
  )
}
