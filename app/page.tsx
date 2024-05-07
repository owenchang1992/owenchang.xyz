import { TypewriterEffect } from "./components/typewriterEffect";
import { cn } from "./lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "app/components/ui/avatar"

const titleText = `A Web Developer from Taiwan`

export default function Page() {
  const words = titleText.split(" ").map((text) => {
    return {
      text,
      className: "mt-2"
    }
  })

  return (
    <section className="container flex-grow">
      <div className="flex flex-col md:flex-row items-center justify-center gap-7 h-[40rem] sm:max-w-3xl lg:max-w-5xl mx-auto">
        <Avatar className="h-48 w-48">
          <AvatarImage src="/avatar.png" />
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl sm:text-5xl text-green-500 font-bold text-left mb-2 sm:mb-4">Owen Chang</h1>
          <TypewriterEffect 
            words={words}
            className={cn(`text-left text-3xl sm:text-4xl  md:text-5xl mt-1`)}
            cursorClassName="w-[4px] h-6 sm:h-8 lg:h-9"
          />
        </div>
      </div>
    </section>
  );
}
