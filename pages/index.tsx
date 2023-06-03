import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Introduction from "@/components/Introduction/Introduction";
import Layout from "@/components/Layout/Layout";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";

export default function Home() {
  return (
    <Layout>
      <>
        <Introduction />
        <About />
        <Skills />
        <Services/>
        <Portfolio />
        <Contact />
      </>
    </Layout>
  )
}
