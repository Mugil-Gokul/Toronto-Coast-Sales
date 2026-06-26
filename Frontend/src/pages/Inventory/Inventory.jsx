import React from 'react'
import InventoryHero from './InventoryHero'
import InventoryFilters from './InventoryFilters'
import InventoryCard from './InventoryCard'
import InventoryGrid from './InventoryGrid'
import InventoryPagination from './InventoryPagination'
import GetInTouch from '../../Components/GetInTouch'

const Inventory = () => {
  return (
    <>
    <InventoryHero/>
    <InventoryFilters/>
    <InventoryGrid/>
    <InventoryPagination/>
    <GetInTouch/>
    </>
  )
}

export default Inventory