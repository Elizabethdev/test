import React from 'react';

class MobileTabs extends React.Component{
    render(){
        return(
            <div className="">
                <ul className="flex">
                    <li className="flex-shrink">
                        <a className="border-r border-white text-center text-white block py-2 px-4 bg-green-700 hover:bg-green-700 arrow-tab-movil" href="#">¿Qué es Xcaret?</a>
                    </li>
                    <li className="flex-shrink">
                        <a className="border-r border-white text-center text-white block bg-green-600 hover:bg-green-700 py-2 px-4" href="#">Que Incluye</a>
                    </li>
                    <li className="flex-shrink">
                        <a className="border-r border-white text-center text-white block bg-green-600 hover:bg-green-700 py-2 px-4" href="#">Recomendaciones</a>
                    </li>
                    <li className="flex-shrink">
                        <a className="border-r border-white text-center text-white block bg-green-600 hover:bg-green-700 py-2 px-4" href="#">Información Importante</a>
                    </li>
                </ul>
            </div>
            
        );
    } 
}

export default MobileTabs;