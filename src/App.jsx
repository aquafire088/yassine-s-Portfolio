import { gsap } from 'gsap';
import React from 'react';
import { Draggable } from 'gsap/Draggable';

import { Navbar } from '#components/Navbar';
import Welcome from '#components/welcome';
import { Dock } from '#components/Dock';
import { Terminal } from '#window';



gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      <Terminal/>
    </main>

  )
}

export default App
