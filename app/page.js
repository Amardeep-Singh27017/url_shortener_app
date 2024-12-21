import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";


const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <main className="bg-purple-100">
        <section className="grid md:grid-rows-1 grid-rows-2 md:grid-cols-2 md:h-[90vh] h-[84vh] md:pb-0 pb-2">
          <div className="flex flex-col items-center justify-center md:h-[60vh] md:mt-20">
            <p className={`md:text-3xl text-2xl px-2 text-center font-bold ${poppins.className}`}>
              The best url shortener in the world.
            </p>
            <p className="text-center p-2 md:px-10 px-8">
            Easily convert long URLs into short, shareable links with our user-friendly app. Track clicks and engagement in real-time for better insights!
            </p>
            <div className='flex gap-3 mt-3 text-white'>
              <Link href="/shorten"><button className='bg-purple-500 font-bold p-3 py-1 rounded-lg shadow-sm'>Try Now</button></Link>
              <Link href="/github"><button className='bg-purple-500 font-bold p-3 py-1 rounded-lg shadow-sm'>Github</button></Link>
            </div>
          </div>
          <div className="flex justify-start relative md:h-[60vh] md:mt-20">
            <Image className="mix-blend-darken" alt="next image" src={"/short_img.webp"} fill />
          </div>
        </section>
      </main>
    </>
  );
}
