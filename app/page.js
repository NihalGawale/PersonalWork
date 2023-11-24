"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="px-2 py-3 md:p-24">
        <div className="flex flex-col space-y-6 lg:space-y-0 lg:grid max-w-screen-xl px-4 pt-16 pb-8 mx-suto  lg:gap-8 xl:gap-0 lg:py-16 lg:px-8 lg:grid-cols-12">
          <div className="mr-auto lg:my-16 place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Premium Office Chairs for Prolonged Comfort
            </h1>
            <p className="max-w-2xl mb-6 font-semibold text-gray-500 text-lg lg:mb-8 lg:text-xl">
              Make Your Long Hour Meetings Comfortable!
            </p>
            <button
              type="button"
              onClick={() => router.push("/explore")}
              className="mt-1.5 inline-block bg-black px-5 py-3 text-xs font-semibold uppercase tracking-wide text-white"
            >
              Explore
            </button>
          </div>
          <div className="relative lg:mt-0  h-56 lg:h-full lg:w-full lg:col-span-5 flex ">
            <Image
              fill={true}
              style={{
                objectFit: "cover", // cover, contain, none
              }}
              src="/assets/chairImage2.jpg"
              alt="chairImage2"
            />
          </div>
        </div>
      </div>
      <div className="py-16 w-full bg-[#141414] text-white">
        <div className="max-w-screen-xl mx-6 pr-4">
          <p className="text-3xl font-bold">
            Welcome to ComfortCraft, where luxury meets affordability in the
            world of office seating!{" "}
          </p>
          <div className="relative h-[484px] my-16">
            <Image
              fill={true}
              style={{
                objectFit: "cover", // cover, contain, none
              }}
              src="/assets/chairImage4.jpg"
              alt="chairImage4"
            />
          </div>
          <p className="text-gray-400 text-lg font-semibold">
            Immerse yourself in a selection of ergonomically crafted chairs that
            prioritize your well-being and productivity. Our range seamlessly
            blends style, durability, and budget-friendly pricing, ensuring you
            can invest in the quality you deserve without compromise.
          </p>
        </div>
      </div>
      <div className="py-16 w-full">
        <div className="max-w-screen-xl mx-6 pr-4">
        <div className="relative h-[400px] my-16 shadow-xl">
            <Image
              fill={true}
              style={{
                objectFit: "cover", // cover, contain, none
              }}
              src="/assets/chairImage5.jpg"
              alt="chairImage5"
            />
          </div>
          <p className="text-xl font-semibold  text-gray-500">Your comfort journey begins here, backed by a 2-year warranty and the assurance of a complimentary first-time service. </p>
          <p className="text-[26px] font-black pt-10 text-black">"Embark on a journey of comfort and success! Don't just sit; thrive. Order now and let the journey begin!" </p>
          
        </div>
      </div>
    </main>
  );
}
