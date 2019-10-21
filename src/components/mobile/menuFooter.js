import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class MenuFooter extends React.Component{
    render(){
        return(
            <div className="flex justify-between p-2 text-base lg:w-full flex-row flex-wrap">
                <div className="flex items-center justify-center py-3 flex-col">
                    <div className="rounded-full border h-16 w-16 flex items-center justify-center ">
                        <FontAwesomeIcon size="lg" icon="home" />
                    </div>
                    <p className="pt-1">Inicio</p>
                </div> 
                <div className="flex flex-wrap items-center justify-center py-3 flex-col">
                    <div className="rounded-full border h-16 w-16 flex items-center justify-center ">
                        <FontAwesomeIcon size="lg" icon="heart" />
                    </div>
                    <p className="pt-1">Parques</p>
                </div> 
                <div className="flex flex-wrap items-center justify-center py-3 flex-col">
                    <div className="rounded-full border h-16 w-16 flex items-center justify-center ">
                        <FontAwesomeIcon size="lg" icon="map" />
                    </div>
                    <p className="pt-1">Tours</p>
                </div> 
                <div className="flex flex-wrap items-center justify-center py-3 flex-col">
                    <div className="rounded-full border h-16 w-16 flex items-center justify-center ">
                        <FontAwesomeIcon size="lg" icon="star" />
                    </div>
                    <p className="pt-1">Actividades</p>
                </div> 
                <div className="flex flex-wrap items-center justify-center py-3 flex-col">
                    <div className="rounded-full border h-16 w-16 flex items-center justify-center ">
                        <FontAwesomeIcon size="lg" icon="hotel" />
                    </div>
                    <p className="pt-1">Hospedaje</p>
                </div>
                <div className="flex flex-wrap items-center justify-center py-3 flex-col">
                    <div className="rounded-full border h-16 w-16 flex items-center justify-center ">
                        <FontAwesomeIcon size="lg" icon="hand-holding-usd" />
                    </div>
                    <p className="pt-1">Ahorra</p>
                </div> 
                
            </div>
        );
    }
}

export default MenuFooter;