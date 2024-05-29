'use srver'

import { SearchInput } from "@/components/searchInput"

export default async function Page() {
  const cards = await fetch("https://tarotapi.dev/api/v1/cards/").then(res => res.json())

  // console.log(cards)
  return (
    <div className="flex items-center justify-center">
      <SearchInput cards={cards.cards} />
    </div>
  )
}


