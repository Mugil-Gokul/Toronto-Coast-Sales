import React from 'react'
import TruckHero from './TruckHero'
import TruckGallery from './TruckGallery'
import TruckOverview from './TruckOverview'
import TruckSpecifications from './TruckSpecifications'
import TruckFeatures from './TruckFeatures'
import TruckDescription from './TruckDescription'
import RelatedInventory from './RelatedInventory'
import GetInTouch from '../../../Components/GetInTouch'

const TruckDetails = () => {
  return (
    <>
    <TruckHero/>
    <TruckGallery/>
    <TruckOverview/>
    <TruckSpecifications/>
    <TruckFeatures/>
    <TruckDescription/>
    <RelatedInventory/>
    <GetInTouch/>
    </>
  )
}

export default TruckDetails