import { gsap } from 'gsap';
import React from 'react';
import { Draggable } from 'gsap/Draggable';

import { Navbar } from '#components/Navbar';
import Welcome from '#components/welcome';
import { Dock } from '#components/Dock';
import { Terminal } from '#window';
import Safari from '#window/Safari';
import Resume from '#window/Resume'
import Finder from '#window/Finder';
import Text from '#window/Text';
import Image from '#window/Image';
import Contact from "./window/Contact";
import Home from '#components/Home';





gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Home/>


      
      <Text/>
      <Safari/>
      <Resume/>
      <Finder/>
      <Terminal/>
      <Image/>
      <Contact/>
    </main>

  )
}

export default App
