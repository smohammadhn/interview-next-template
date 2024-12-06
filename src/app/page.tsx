import Link from 'next/link';

export default function HomePage() {
  return (
    <main className='grid place-items-center text-center p-10'>
      <div className='font-bold text-[3rem]'>
        <h1>Welcome to Bubares Team interview</h1>
        <p>We wish you all the best!</p>
        <p>💪🔥</p>

        <ul className='text-[2rem] flex flex-col'>
          <li>
            <Link href='/task-1' className='underline'>
              Go to Task 1
            </Link>
          </li>
          <li>
            <Link href='/task-2' className='underline'>
              Go to Task 2
            </Link>
          </li>
          <li>
            <Link href='/task-3' className='underline'>
              Go to Task 3
            </Link>
          </li>
          <li>
            <Link href='/task-4' className='underline'>
              Go to Task 4
            </Link>
          </li>
          <li>
            <Link href='/task-5' className='underline'>
              Go to Task 5
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
