import axiosClient from './axiosClient'

const MovieAPI = {
  getMoviePopular: params => {
    const url = '/movie/popular'
    return axiosClient.get(url, { params })
  },

  getMovieTop: params => {
    const url = 'movie/top_rated'
    return axiosClient.get(url, { params })
  },
  getMovieLatest: params => {
    const url = '/movie/latest'
    return axiosClient.get(url, { params })
  },

  getMovieDetail: id => {
    const url = `movie/${id}`
    return axiosClient.get(url)
  },

  getMovieTrailer: id => {
    const url = `movie/${id}/`
    return axiosClient.get(url)
  },

  getTVPopular: params => {
    const url = '/tv/popular'
    return axiosClient.get(url, { params })
  },
  getMovieTrending: params => {
    const url = '/trending/movie/day'
    return axiosClient.get(url, { params })
  },
  getTVDetail: id => {
    const url = `tv/${id}`
    return axiosClient.get(url)
  },
  getGenres: params => {
    const url = '/genre/movie/list'
    return axiosClient.get(url, { params })
  },
  getGenresTV: params => {
    const url = '/genre/tv/list'
    return axiosClient.get(url, { params })
  },
  getMovieCredits: id => {
    const url = `/movie/${id}/credits`
    return axiosClient.get(url)
  },
  getMovieRecommended: id => {
    const url = `/movie/${id}/recommendations`
    return axiosClient.get(url)
  },
  getMovieReview: id => {
    const url = `/reviews/${id}`
    return axiosClient.get(url)
  }
}

export default MovieAPI
//done
