import React from 'react'

const Womencollection = (props) => {

    const {title,image1,image2,image3,image4} = props.ladies

  return (
    <div className="womenscollection">
        <h2>{title}</h2>
        <div className="womenimages">
            <img src={image1}/>
            <img src={image2}/>
            <img src={image3}/>
            <img src={image4}/>
        </div>
    </div>
  )
}

export default Womencollection