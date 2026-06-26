import React from 'react'
import HomeHero from './HomeHero'
import HomeAbout from './HomeAbout'
import HomeInventory from './HomeInventory'
import HomeFinancing from './HomeFinancing'
import HomeServices from './HomeServices'
import HomeWhyChooseUs from './HomeWhyChooseUs'
import HomeTestimonials from './HomeTestimonials'
import GetInTouch from '../../Components/GetInTouch'

const Home = () => {
  return (
    <>
    <HomeHero/>
    <HomeAbout/>
    <HomeInventory/>
    <HomeFinancing/>
    <HomeServices/>
    <HomeWhyChooseUs/>
    <HomeTestimonials/>
    <GetInTouch/>
    </>
  )
}

export default Home