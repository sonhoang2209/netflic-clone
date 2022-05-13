/* eslint-disable react/no-children-prop */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Heading from '../../atoms/Heading'
import Header from '../../organisms/header/Header'
import WacthVideo from '../../organisms/wacthVideo/WacthVideo'
import filmAPI from '../../../pages/api/axios/filmAPI'
import { Movie } from '../../../untils/typings'
import { AiFillStar } from 'react-icons/ai'
import StarRate from '../../atoms/StarRate'
import FilmItem from '../../molecules/FilmItem'
import MovieInfor from '../../molecules/MovieInfor/MovieInfor'

function WatchTemp() {
  const pathImage = 'https://image.tmdb.org/t/p/w500'
  const router = useRouter()
  const movieId = router.query?.movieId
  const [movieDetail, setMovieDetail] = useState<Movie | null>()
  const [films, setFilms] = useState<Movie[]>([])

  useEffect(() => {
    const getmovieDetails = async () => {
      const movieDetail = await filmAPI.getMovieDetail(movieId)
      setMovieDetail(movieDetail.data)
    }
    getmovieDetails()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const getFilm: () => Promise<void> = async () => {
      const film = await filmAPI.getMovieRecommended(movieId)
      setFilms(film.data.results)
    }
    getFilm()
  }, [])

  const renderRecommentFilm = () => {
    return films.map((film, index) => {
      return index < 8 ? (
        <FilmItem
          key={index}
          id={film.id}
          poster_path={pathImage + film.poster_path}
          title={film.title}
          vote_average={film.vote_average}
        />
      ) : (
        ''
      )
    })
  }

  return (
    <div>
      <Header />
      <div className="h-20 bg-black"></div>
      <div className="lg:flex">
        <div className="lg:w-[65%] lg:p-10">
          <WacthVideo movieId={movieId} />
          <div className="">
            <h1 className=" my-4 text-2xl md:text-6xl">{movieDetail?.title}</h1>
            {movieId && <MovieInfor />}
          </div>
        </div>
        <div className="lg:w-[35%]">
          <Heading children="Top Phim" />
          <div className="px-5">{renderRecommentFilm()}</div>
        </div>
      </div>
    </div>
  )
}

export default WatchTemp
