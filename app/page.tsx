import { TypewriterEffect } from './components/typewriterEffect';
import { cn } from './lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from 'app/components/ui/avatar';

const titleText = `A Web Developer from Taiwan`;

const skills = [
  'HTML 5',
  'CSS',
  'JS',
  'NextJS 14',
  'ReactJS',
  'Typescript',
  'Tailwind CSS',
  'Jest',
  'Storybook',
  'Cypress',
  'Shadcn/ui',
  'Drizzle ORM',
]

const SkillItem = ({ children }: { children: React.ReactNode }) => {
  return <li className='border border-input rounded-md shadow-lg hover:bg-accent bg-background hover:text-accent-foreground px-4 py-2'>{children}</li>
}

export default function Page() {
  const words = titleText.split(' ').map((text) => {
    return {
      text,
      className: 'mt-2',
    };
  });

  return (
    <>
      <section className="container min-h-[calc(100svh-56px)] py-6 grid grid-cols-1 items-center content-center justify-center md:grid-cols-[auto_1fr] md:grid-rows-[min-content_min-content] gap-x-6 gap-y-8 sm:max-w-3xl lg:max-w-5xl mx-auto">
        <Avatar className="h-48 w-48 row-span-1 col-span-1 m-auto">
          <AvatarImage src="/avatar.png" alt="Owen Chang avatar" />
          <AvatarFallback>CC</AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-center md:items-start row-span-1 col-span-1">
          <h1 className="text-3xl sm:text-5xl text-green-500 font-bold text-left mb-2 sm:mb-4 inline">
            {"Owen Chang"}
          </h1>
          <TypewriterEffect
            words={words}
            className={cn(`text-left text-3xl sm:text-4xl  md:text-5xl mt-1`)}
            cursorClassName="w-[4px] h-6 sm:h-8 lg:h-9"
          />
        </div>
        <ul className='row-span-1 col-span-1 md:col-span-2 flex flex-wrap gap-2 list-none'>
         {skills.map((skill) => (
           <SkillItem key={skill} >{skill}</SkillItem>
         ))}
        </ul>
      </section>
      <section className='container'>
        <h3 className="text-3xl sm:text-5xl font-bold text-gray-200 mb-2 sm:mb-4 text-center py-4">
          Thank you for coming, my portfolio will keep updating
        </h3>
      </section>
    </>
  );
}
