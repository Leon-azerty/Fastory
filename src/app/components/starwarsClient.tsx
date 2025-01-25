'use client'

import { ItemProps } from '@/lib/type'
import { useState } from 'react'
import Filter from './filter'

export default function StarwarsClient({ items }: { items: ItemProps }) {
  const [selected, setSelected] = useState('people')

  return (
    <section className="flex">
      <Filter setSelected={setSelected} />
      <div className="grid grid-cols-3 gap-4">
        {items[selected].map((item, index) => (
          <div key={index} className="p-4">
            <h2 className="text-lg font-bold">
              {item.name ? item.name : item.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  )
}
