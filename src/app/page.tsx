/* eslint-disable react/no-unescaped-entities */
import Logo from '@/components/logo';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="py-20 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold text-center mt-10">
        Welcome to my Application
      </h1>
      <p className="text-center w-1/2">
        This app also contains albums and user contacts information. Project
        made with Next.js to practice and showcase my skills as a fullstack
        developer. The link to the github repository is{' '}
        <Link
          target="blank"
          className="underline"
          href="https://github.com/poltrujillo"
        >
          here
        </Link>
        . Don't forget to check out my profile and the other projects i have
        available!
      </p>
      <Logo color="secondary" size={{ width: 216, height: 164 }} />
    </main>
  );
}
