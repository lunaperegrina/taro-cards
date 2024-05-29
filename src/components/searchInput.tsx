'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { JSX, SVGProps, useState } from "react"

interface Card {
  type: "major" | "minor"
  name_short: string
  name: string
  value: string
  value_int: number
  meaning_up: string
  meaning_rev: string
  desc: string
}


export function SearchInput({ cards }: {
  cards: Card[]
}) {

  const [search, setSearch] = useState('')

  if (!cards) {
    return null
  }

  const filteredCards = cards?.filter(card => {
    const cardName = card.name.toLowerCase().includes(search.toLowerCase())
    const cardMeaningUp = card.meaning_up.toLowerCase().includes(search.toLowerCase())
    const cardMeaningRev = card.meaning_rev.toLowerCase().includes(search.toLowerCase())
    const cardDesc = card.desc.toLowerCase().includes(search.toLowerCase())
    
    return cardName || cardDesc || cardMeaningUp || cardMeaningRev
  })
  console.log(cards[0])
  return (
  <div>
      <div className="flex items-center justify-center mt-96 mb-4">
      <div className="relative w-[600px]">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          className=" px-4 py-2 pr-10 text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 dark:bg-gray-800 dark:text-white dark:border-gray-600"
          placeholder="Pesquisar..."
          type="search"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <SearchIcon className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
    {search && filteredCards.map((card) => (
      <div key={card.name} className="w-[600px] mb-6">
        <p className="text-xl font-bold">{card.name}</p>
        <p className="mb-2"><span className="font-bold">Vertical:</span> {card.meaning_up}</p>
        <p><span className="font-bold">Invertida:</span> {card.meaning_rev}</p>
       {/* <Button variant={'link'} className="pl-0">Description</Button> */}
      </div>
    ))}
  </div>
  )
}

function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}