
import React from 'react'

const Collections = (props) => {

  const {title,image1,image2,image3,image4} = props.gents
  return (
    <div>
      <div className="collectionSection">
        <h2>{title}</h2>
        <div className="menimages">
          <img src={image1}/>
          <img src={image2}/>
          <img src={image3}/>
          <img src={image4}/>
        </div>
      </div>
    </div>
  )
}
export default Collections