import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MoviesSlider from '../MoviesSlider'
import './index.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
}

const PrimeVideo = props => {
  const {moviesList} = props

  const hmm = moviesList.filter(each => each.categoryId === 'COMEDY')

  return (
    <div className="main">
      <img
        className="image"
        alt="prime video"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
      />
      <div className="second">
        <h1 className="head">Action Movies</h1>
        <div className="cure">
          <Slider {...settings}>
            {moviesList
              .filter(each => each.categoryId === 'ACTION')
              .map(each => (
                <MoviesSlider key={each.id} details={each} />
              ))}
          </Slider>
        </div>
        <div className="second-sub">
          <h1 className="head">Comedy Movies</h1>
          <Slider {...settings}>
            {hmm.map(each => (
              <MoviesSlider key={each.id} details={each} />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
