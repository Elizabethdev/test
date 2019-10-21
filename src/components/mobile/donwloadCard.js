import React from 'react';
import img100 from '../../img/400X100.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class DonwloadCard extends React.Component{
    render(){
        return(
            <div className="bg-white border border-gray-300 rounded overflow-hidden">
                <div className="px-6 py-4">
                    <div className="flex flex-row item-center">
                        <div className="flex flex-col flex-grow px-3 py-2 w-2/12">
                            <FontAwesomeIcon className="" icon="mobile-alt" size="6x"></FontAwesomeIcon>
                        </div>
                        <div className="flex flex-col flex-grow px-3 py-2 w-10/12">
                            <p className="text-black font-semibold text-xl">Descarga gratis nuestra app y disfruta de una experiencia única en tu visita</p>              
                        </div>
                    </div>
                    <div className="flex flex-row item-center">
                        <div className="flex flex-col flex-grow px-3 py-2 w-2/12">
                        </div>
                        <div className="flex flex-col flex-grow px-3 py-2 w-10/12">
                        <img src={img100} className="rounded-lg" alt=""></img>                                                          
                        </div>
                    </div>
                    <div className="flex flex-row item-center">
                        <div className="flex flex-col flex-grow px-3 py-2 w-2/12">
                        </div>
                        <div className="flex flex-col flex-grow px-3 py-2 w-10/12">
                        <img src={img100} className="rounded-lg" alt=""></img>                                                          
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default DonwloadCard;