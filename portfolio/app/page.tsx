

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Aedin Richardson
          </h1>
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Code. Circuits. AI.
          </h1>
          <h2 className="font-italic leading-10 text-black dark:text-zinc-50">
            Full-stack developer building at the intersection of intelligent software, microcontrollers, and AI.
          </h2>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <a
              href="https://github.com/Alteoziel"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              GitHub
            </a>
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <a
              href="https://www.linkedin.com/in/aedin-richardson"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              LinkedIn
            </a>
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            <a
              href="mailto:aedinrichardson@gmail.com"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              aedinrichardson@gmail.com
            </a>
          </p>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            +1(801)885-4463
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <p>
            Hi!
          </p>
        </div>
      </main>
    </div>
  );
}
