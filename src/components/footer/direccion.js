import React from 'react';

class Brands extends React.Component{
    render(){
        return(
            <div className="flex lg:flex-row xl:flex-row">
                <div className="lg:flex-shrink p-3 text-base lg:w-full">
                    <p className="text-base m-2">Xcaret - México, Chetumal - Puerto Juárez Federal Highway, Km. 282, Rancho Xcaret, Playa del Carmen, Quintana Roo, México, CP 77710.</p>
                    <p className="text-base m-2">Teléfono Cancún:998-883-3143 www.xcaret.com/en/ Open Monday to Sunday from 8-.30 a.m. to 10:30 p.m.</p>
                    <p className="text-base m-2">© Copyright 2019 Experiencias Excaret Parques, S.A.P.I de C.V</p>
                </div>
            </div>
        );
    }
}

export default Brands;