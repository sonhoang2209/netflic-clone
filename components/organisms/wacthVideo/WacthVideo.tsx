import React from 'react'
interface props {
  movieId: string | string[] | undefined
}

function WacthVideo({ movieId }: props) {
  console.log(movieId)

  return (
    <iframe
      allowFullScreen
      id="iframe"
      src={`https://www.2embed.ru/embed/tmdb/movie?id=${movieId}`}
      frameBorder="0"
      className="h-auto w-max md:h-96 md:w-full"
    ></iframe>
  )
}

export default WacthVideo
