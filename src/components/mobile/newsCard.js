import React from 'react';
import BtnCard from '../buscador/btnCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NewsCard extends React.Component{
    render(){
        return(
            <div className="bg-white border border-gray-300 rounded overflow-hidden">
                <div className="px-6 py-4">
                    <div className="flex flex-row justify-center">
                        <div className="flex flex-row px-3 py-2 w-full justify-center">
                            <FontAwesomeIcon className="" icon="envelope-open" size="6x"></FontAwesomeIcon>
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="flex flex-col flex-grow px-3 py-2 w-full">
                            <p className="text-black font-semibold text-xl">Recibe promociones y noticias de Xcaret para disfrutar en tus próximas vacaciones</p>   
                        </div>
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="flex flex-col flex-grow px-3 py-2 w-full">
                        <BtnCard text="Suscribirme" background="bg-black" border=" " font="text-white" extraClassName="uppercase"></BtnCard>      
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default NewsCard;