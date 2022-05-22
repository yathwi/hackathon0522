import Head from "next/head";
import { PageHeader } from "@/ component/PageHeader";
import { Hero } from "@/ component/Hero";
import { About } from "@/ component/About";
import { StrongPoint } from "@/ component/StorongPoint";
import { Flow } from "@/ component/Flow";
import { Cta } from "@/ component/Cta";
import { PageFooter } from "@/ component/PageFooter";

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
