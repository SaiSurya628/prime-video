import React from 'react'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import 'reactjs-popup/dist/index.css'

import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {details} = props
  const {thumbnailUrl, videoUrl} = details
  return (
    <div>
      <Popup
        trigger={<img alt="thumbnail" src={thumbnailUrl} className="images" />}
        className="popup-content"
      >
        {close => (
          <div className="video">
            <div>
              <ReactPlayer className="player" url={videoUrl} controls />
            </div>
            <button
              data-testid="closeButton"
              type="button"
              className="button"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
          </div>
        )}
      </Popup>
    </div>
  )
}
export default MovieItem
