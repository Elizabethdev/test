import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Menu extends React.Component {
  render(){
    return(
      <div className="text-sm uppercase">
        <ul className="flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0">
          <li>
            <a className="block px-4 py-1 md:p-2 lg:px-4" href="#">Parques</a>
          </li>
          <li>
            <a className="block px-4 py-1 md:p-2 lg:px-4" href="#">Tours</a>
          </li>
          <li>
            <a className="block px-4 py-1 md:p-2 lg:px-4" href="#">Actividades</a>
          </li>
          <li>
            <a className="block px-4 py-1 md:p-2 lg:px-4" href="#">Hotel Xcaret</a>
          </li>
          <li>
            <a className="block px-4 py-1 md:p-2 lg:px-4" href="#">Promociones y descuentos</a>
          </li>
          <li>
            <a className="block px-4 py-1 md:p-2 lg:px-4 relative overflow-visible" href="#">Carrito <FontAwesomeIcon icon="shopping-cart" size="xs" /><div className="absolute top-0 right-0 -mt-2 -mr-2 px-3 py-1 bg-red-500 rounded-full text-xs">1</div></a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;