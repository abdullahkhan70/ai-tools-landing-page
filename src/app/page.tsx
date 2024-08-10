import { BecomeTester } from "@/components/BecomeTester";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import RoundedImage from "@/components/RoundedImage";

export default function Home() {
  return (
    <main className="dark:bg-gray-900 flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-3xl items-center justify-between font-mono text-sm lg:flex">
        <Header />
      </div>
      <div className="lg:flex-row sm:w-full max-w-5xl justify-between font-mono text-sm self-center">
        <BecomeTester />
        {/* <RoundedImage /> */}
      </div>
      <Footer />
    </main>
  );
}
