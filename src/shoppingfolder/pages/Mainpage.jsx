
import React from 'react' 
import { useState } from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'

import {Gents,Ladies} from '../data'
import Womencollection from '../components/Womencollection'

const Mainpage = () => {
   
    const [gentsfash,setGentsfash] = useState(Gents)
    const [ladiesfash,setLadiesfash] = useState(Ladies)
  return (
    <div>
        <Header/>
        <Banner/>
        <Collections gents={gentsfash}/>
        <Womencollection ladies={ladiesfash}/>
        <Footer/>
        

    </div>
  )
}

export default Mainpage