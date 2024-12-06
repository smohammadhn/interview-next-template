/*
Task Description:

Persist the dark/light mode on refresh!

when refreshing the page, the dark/light mode should not reset.

Time estimation: 5 mins

*/

'use client';

import { useState } from 'react';

import { cn } from '@/lib/utils';

export default function PageTaskThree() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const isDark = theme === 'dark';

  return (
    <main
      className={cn(
        'p-10 text-center h-screen',
        isDark && 'bg-gray-900 text-white'
      )}
    >
      {/* theme change buttons */}
      <ul className='flex gap-4 justify-center'>
        <li>
          <button
            className='outline p-2 rounded-full'
            onClick={() => setTheme('light')}
          >
            Light Mode
          </button>
        </li>
        <li>
          <button
            className='outline p-2 rounded-full'
            onClick={() => setTheme('dark')}
          >
            Dark Mode
          </button>
        </li>
      </ul>

      {/* page content */}
      <div>
        <p className='font-bold p-4'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Exercitationem quidem, repudiandae excepturi doloribus corporis saepe
          tempore impedit illo similique. Dignissimos, temporibus illo!
          Consectetur sequi minus officia repudiandae sed eum doloremque in,
          itaque magnam voluptatum. Necessitatibus, facilis veritatis ab, sit
          incidunt voluptas hic rem quo, numquam laboriosam ipsam sunt est minus
          quis pariatur dicta nemo corrupti atque et illo voluptatem omnis
          deserunt. Itaque ratione quisquam dignissimos, possimus molestias
          beatae saepe nulla atque temporibus ipsum reprehenderit sapiente
          nesciunt quis. Ad numquam magni repellat, quas suscipit mollitia
          dignissimos officia, dolores rem fugiat vel assumenda laborum
          explicabo enim eius molestias voluptas in! Voluptates, hic!
        </p>
      </div>
    </main>
  );
}
