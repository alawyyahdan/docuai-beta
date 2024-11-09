import { TextHoverEffect } from "@/components/ui/hover";
import { FlipWords } from "@/components/ui/textg";

export default function Home() {
  const words = ["better", "cute", "beautiful", "modern"];
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="h-[40rem] flex items-center justify-center">
          <TextHoverEffect text="DocuAI" />
        </div>
            <div className="justify-center text-center text-4xl mx-auto font-bold text-neutral-600 dark:text-neutral-400">
          Build your own
          <FlipWords words={words} /> <br />
          with our best AI-assistant
            </div>
        <a href="/login" className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Get Started</a>
    </div>
  );
}

