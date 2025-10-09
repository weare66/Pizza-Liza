import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';

export const MainLayout: React.FC = () => {
  return (
    <div className="App">
      <div className="wrapper">

      {/* <AppContecst.Provider value={{searchValue, setSearchValue}}> */}
      <Header />

        <div className="content">

          <Outlet />

        </div>
      {/* </AppContecst.Provider> */}

      </div>
  </div>
  )
}
