import React from 'react'
import { Navbar } from '../components/Navbar'
import Announcement from '../components/Announcement'
import Product from '../components/Product'
import Products from '../components/Products'
import Feedback from '../components/Feedback'

export const Home = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Products/>
        <Feedback/>
    </div>
  )
}
