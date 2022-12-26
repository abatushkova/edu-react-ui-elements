import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Home } from '../Home/Home';
import { Docs } from '../Docs/Docs';
import { Support } from '../Support/Support';
import { Blog } from '../Blog/Blog';
import './App.scss';

function App() {
  return (
    <div className="hero">
      <HashRouter>
        <Header />
        <div className="hero__body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/support" element={<Support />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
      </HashRouter>
      <Footer />
    </div>
  )
}

export default App;
