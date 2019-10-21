import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo4 from '../../img/placeholder-logo4.png';

export class MobileMenu extends React.Component {
  render() {
    return (
        <nav className="nav-header flex border-b-2 border-white lg:hidden xl:hidden">
            <div className="flex items-center flex-shrink-0 mr-6 pl-4">
              <img src={logo4} alt="" className="object-cover object-center w-40" />
            </div>
            <div className="flex items-stretch">
                <div className="nav-icon-movil"><FontAwesomeIcon icon="user" /></div>
                <div className="nav-icon-movil"><FontAwesomeIcon icon="phone" /></div>
                <div className="nav-icon-movil"><FontAwesomeIcon icon="shopping-cart" /></div>
                <div className="nav-icon-movil"><FontAwesomeIcon icon="globe" /></div>
            </div>

            <div className="flex justify-center w-full py-4 bg-subhead-movil text-white text-2xl border-b-2 border-white border-t">
              Admisión Parque Xcaret 
            </div>
        </nav>
      );
    }
  }

  export default MobileMenu;