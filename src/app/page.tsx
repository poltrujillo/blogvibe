/* eslint-disable react/no-unescaped-entities */
import Logo from '@/components/logo';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="py-20 flex flex-col items-center gap-10">
      <h1 className="text-3xl font-bold text-center">
        Welcome to my Application
      </h1>
      <p className="text-center w-1/2">
        This app also contains albums and user contacts information. Project
        made with Next.js to practice and showcase my skills as a fullstack
        developer. The link to my github profile is{' '}
        <Link
          target="blank"
          className="underline"
          href="https://github.com/poltrujillo"
        >
          here
        </Link>
        . Don't forget to check it out!
      </p>
      <Logo color="secondary" size={{ width: 216, height: 164 }} />
    </main>
  );
}
