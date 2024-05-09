import { TypewriterEffect } from './components/typewriterEffect';
import { cn } from './lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from 'app/components/ui/avatar';

const titleText = `A Web Developer from Taiwan`;

export default function Page() {
  const words = titleText.split(' ').map((text) => {
    return {
      text,
      className: 'mt-2',
    };
  });

  return (
    <>
      <section className="container h-[100svh] flex flex-col md:flex-row items-center justify-center gap-7 sm:max-w-3xl lg:max-w-5xl mx-auto">
        <Avatar className="h-48 w-48">
          <AvatarImage src="/avatar.png" alt="Owen Chang avatar"/>
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-3xl sm:text-5xl text-green-500 font-bold text-left mb-2 sm:mb-4">
            Owen Chang
          </h1>
          <TypewriterEffect
            words={words}
            className={cn(`text-left text-3xl sm:text-4xl  md:text-5xl mt-1`)}
            cursorClassName="w-[4px] h-6 sm:h-8 lg:h-9"
          />
        </div>
      </section>
      <section className='container'>
        <h3 className="text-3xl sm:text-5xl font-bold text-gray-200 mb-2 sm:mb-4 text-center py-4">
          Thank you for coming, my portfolio will keep updating recently...
        </h3>
      </section>
    </>
  );
}
