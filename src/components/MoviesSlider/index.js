import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {details} = props

  return (
    <div className="sliderContainer">
      <MovieItem details={details} />
    </div>
  )
}
export default MoviesSlider
