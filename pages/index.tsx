import Introduction from "@/components/Introduction/Introduction";
import Layout from "@/components/Layout/Layout";
import Projects from "@/components/Projects/Projects";
import Services from "@/components/Services/Services";
import Skills from "@/components/Skills/Skills";
import Github from "@/components/git/Git";

export default function Home() {
  return (
    <Layout>
      <>
        <Introduction />
        <Github />
        <Skills />
        <Services />
        <Projects />
      </>
    </Layout>
  )
}
