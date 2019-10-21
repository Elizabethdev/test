import React from 'react';
import Brands from './brands'
import Sites from './sites'
import Address from './direccion'
import MenuFooter from '../mobile/menuFooter'

class Footer extends React.Component{
    render(){
        return(
            <footer>
                <div className="container m-auto">
                    <Brands />
                    <Sites />
                </div>
                <div className="w-full"><hr /></div>
                <div className="container m-auto">
                    <Address />
                </div>
                <div className="w-full lg:hidden xl:hidden"><hr /></div>
                <div className="container m-auto lg:hidden xl:hidden">
                    <MenuFooter />
                </div>
            </footer>
        );
    }
}

export default Footer;