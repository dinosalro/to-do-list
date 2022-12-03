import React from 'react'
import banner from './banner.png'
import {ContainerBanner} from './bannerStyled'

const Banner = () => {
  return (
    <ContainerBanner>
      <img src={banner}/>
    </ContainerBanner>
  )
}

export default Banner
