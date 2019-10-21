import React from 'react';
import './styles/tailwind.scss';
import Header from './components/header/header';
import Slide from './components/slide/slide';
import Contenido from './components/content/contenido';
import Cards from './components/cards/cards';
import Footer from './components/footer/footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons'
 
library.add(fas,fab)

function App() {
  return (
    <div className="App">
      <Header />
      <Slide />
      <Contenido />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
