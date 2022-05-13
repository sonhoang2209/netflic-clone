import { useRouter } from 'next/router'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

function Button() {
  return <div>Button</div>
}

interface btnProps {
  movieId: number
}

export const ButtonPlay = ({ movieId }: btnProps) => {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push(`/movie/${movieId}/wacth`)}
      className="flex items-center gap-x-2 rounded bg-white px-8 text-xl font-bold text-black transition hover:bg-[#e6e6e6]"
    >
      <FaPlay className="h-7 w-7 text-black" />
      play
    </button>
  )
}

export default Button
