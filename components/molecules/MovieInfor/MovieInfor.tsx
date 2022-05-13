import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { Genre } from '../../../untils/typings'
import { movieState } from '../../atoms/modalAtom'

function MovieInfor() {
  const [movie, setMovie] = useRecoilState(movieState)
  const [genres, setGenres] = useState<Genre[]>([])
  useEffect(() => {
    if (!movie) return
    async function fecthMovie() {
      const data = await fetch(
        `https://api.themoviedb.org/3/${movie?.media_type === 'tv' ? 'tv' : 'movie'}/${
          movie?.id
        }?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&append_to_response=videos`
      ).then(response => response.json())
      if (data?.genres) {
        setGenres(data.genres)
      }
    }

    fecthMovie()
  }, [movie])
  return (
    <div className="flex space-x-16 rounded-b-md bg-[#181818] px-10 py-8">
      <div className="space-y-6 text-lg">
        <div className="flex items-center space-x-2 text-sm">
          <p className="font-semibold text-green-400">{movie!.vote_average * 10}% Match</p>
          <p className="font-light">{movie?.release_date || movie?.first_air_date}</p>
          <div className="flex h-4 items-center justify-center rounded border border-white/40 px-1.5 text-xs">
            HD
          </div>
        </div>
        <div className="flex flex-col gap-x-10 gap-y-4 font-light md:flex-row">
          <p className="w-9/12">{movie?.overview}</p>
          <div className="flex flex-col space-y-3 text-sm">
            <div>
              <span className="text-[gray]">Genres:</span>{' '}
              {genres.map(genre => genre.name).join(', ')}
            </div>

            <div>
              <span className="text-[gray]">Original language:</span> {movie?.original_language}
            </div>

            <div>
              <span className="text-[gray]">Total votes:</span> {movie?.vote_count}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieInfor
