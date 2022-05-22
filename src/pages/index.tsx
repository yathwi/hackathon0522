import Head from "next/head";
import { PageHeader } from "@/ component/PageHeader";
import { PageFooter } from "@/ component/PageFooter";
import { Hero } from "@/ component/Hero";
import { StrongPoint } from "@/ component/StorongPoint";
import { Cta } from "@/ component/Cta";
import { Flow } from "@/ component/Flow";
import { About } from "@/ component/About";

const Home: React.FC = () => (
 
  <>
    <Head>
      <title>Root4you</title>
    </Head>
    <div> 
      <PageHeader />
      <Hero />
      <About />
      <StrongPoint />
      <Flow/>
      <Cta />
      <PageFooter />
    </div>
  
  </>

);

export default Home;
