//import logo from './logo.svg';
import React from 'react';
import './scss/app.scss';
//import axios from 'axios';

import { Header } from './components/Header';
// import { Categories } from './components/Categories';
// import { Sort } from './components/Sort';
// import { PizzaBlock } from './components/PizzaBlock';
// import { Skeleton } from './components/PizzaBlock/Skeleton';
//import pizzas from './assets/pizzas.json'
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';
import { NoteFound } from './pages/NoteFound';

//export const AppContecst = React.createContext();



function App() {

  //const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="App">
      <div className="wrapper">

      {/* <AppContecst.Provider value={{searchValue, setSearchValue}}> */}
        <Header />

        <div className="content">

            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='*' element={<NoteFound/>}/>
            </Routes>

        </div>
      {/* </AppContecst.Provider> */}

    </div>
  </div>
  );
}

export default App;


