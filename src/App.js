import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Main from './pages/main'
import Contactpage from './pages/contacts'
import Photos from './pages/photos'
import Publication from './pages/publication'

function App() {
  return (
    <>
      <BrowserRouter>
    <nav className='navigation'>
      <Link to='/'>main</Link>
      <Link to='/publication'>publication </Link>
      <Link to='/photos'>photos </Link>
      <Link to='/contacts'>contacts</Link>
    </nav>
    
      <Routes>
        <Route path='' element={<Main/> }/>
        <Route path='publication' element={<Publication/> }>
          <Route path='https://viktoriiamatviichuk.github.io/hw16/'></Route>
        </Route>
        <Route path='photos' element={<Photos/> }/>
        <Route path='contacts' element={<Contactpage/> }/>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
