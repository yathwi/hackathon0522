import Head from "next/head";
import { About } from "@/ component/About";
import { Cta } from "@/ component/Cta";
import { Flow } from "@/ component/Flow";
import { Hero } from "@/ component/Hero";
import { PageFooter } from "@/ component/PageFooter";
import { PageHeader } from "@/ component/PageHeader";
import { StrongPoint } from "@/ component/StorongPoint";

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
