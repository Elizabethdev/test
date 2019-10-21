import React from 'react';
import ToolBar from './toolbar';
import Menu from './menu';
import MobileMenu from '../mobile/mobileMenu';

import logo4 from '../../img/placeholder-logo4.png';

class Header extends React.Component {
    render(){
      return (
        <header>
          <div className="container m-auto">
            <nav className="nav-header hidden lg:flex xl:flex">
              <div className="flex items-center flex-no-shrink flex-row m-3">
                <img src={logo4} alt="" className="object-cover object-center w-40" />
              </div>
              <div className="flex items-end flex-no-shrink flex-col">
                <ToolBar />
                <Menu />
              </div>
            </nav>
          </div>
          <MobileMenu />
        </header>
      );
    }
  }

export default Header;