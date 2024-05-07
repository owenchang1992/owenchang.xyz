import { TypewriterEffect } from "./components/typewriter-effect";

const titleText = ""

export default function Page() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Aceternity.",
      className: "text-green-500 dark:text-green-500",
    },
  ];

  return (
    <section className="container flex-1">
      <div className="flex flex-col items-center justify-center h-[40rem]">
        <TypewriterEffect words={words} />
      </div>
    </section>
  );
}
