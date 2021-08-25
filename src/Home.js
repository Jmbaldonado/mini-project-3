import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Section from './components/Section';
import SectionData from './components/SectionData.js';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)

const Home = () => {

    const SectionItem = SectionData.map((data) => (
        <Section
          key = {data.id}
          id = {data.id}
          image = {data.image}
          title = {data.title}
          desc = {data.desc}
          button1 = {data.button1}
          button2 = {data.button2}
        />
      ))
      
    return (
        <div>
        <Navigation/>
        <Hero/>
        {SectionItem}
        <Carousel/>
        <Footer/>
        </div>
    )
}

export default Home
