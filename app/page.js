import Banner from "@/components/Home/Banner";
import Cook from "@/components/Home/Cook";
import ExpartChefs from "@/components/Home/ExpartChefs";
import Feature from "@/components/Home/Feature";
import NewsLater from "@/components/Home/NewsLater";
import OurGellary from "@/components/Home/OurGellary";
import Image from "next/image";

export default function Home() {
  return (
      <>
      <Banner />
      <Feature />
      <Cook />
      <ExpartChefs />
      <OurGellary />
      <NewsLater />
      </>
  );
}
