import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LargeCard from "@/components/LargeCard";
import MediumCard from "@/components/MediumCard";
import SmallCard from "@/components/SmallCard";
import Head from "next/head";
import Link from "next/link";


export default function Home({exploreData, cardsData}){

  return(
    <div className="" >

      <Head>
        <title>AIRBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Header/> 
    <Banner />    

    <main className="max-w-7xl mx-auto px-8 sm:px-16">
      <section className="pt-6"> 
        <h2 className="text-4xl font-semibold pb-5">Explore Nearby 
          </h2>  
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map(({img, distance, location}) => (
            <SmallCard
                   key={img}
                   img={img}
                   distance={distance}
                   location={location} 
                    />
                ))}
                </div> 
            </section>

            <section>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
        <div className='flex space-x-3 overflow-scroll'>
            {cardsData?.map(({img, title}) =>(
              <MediumCard
              key={img}
              img={img}
              title={title}
              />
            ))}
            </div>
            </section>
            <LargeCard  
            img="https://links.papareact.com/4cj"
            title="The Gratest Outdoors"
            description="Wishlists curated by Avishkar and Airbnb"
            butonText="Get Inspired"
            />
    </main>
    <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G")
    .then((res) => res.json());
  const cardsData = await fetch("https://www.jsonkeeper.com/b/VHHT")
    .then((res) => res.json());
  return {
    props: {
      exploreData,
      cardsData
    }
  }
}