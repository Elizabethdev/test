import React from 'react';
import BtnCard from './btnCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ResumenCard extends React.Component {
    render() {
        return (
            <div className="rounded overflow-hidden bg-gray-200 lg:bg-white xl:bg-white">
                <div className="px-6 py-4 lg:py-0 xl:py-0">
                    <div className="font-bold text-xl text-center mb-2 uppercase text-gray-700">
                        Hasta 12 meses sin intereses <FontAwesomeIcon icon="question-circle" />
                    </div>
                </div>
                <div className="arrow_box px-6 py-6 text-white uppercase text-center hidden lg:block xl:block">
                    Entrada Xcaret parque
                </div>
                <div className="flex flex-row item-center">
                    <div className="flex flex-col flex-grow px-3 py-2 w-full">
                        <label className="block text-center tracking-wide text-base text-gray-700 font-bold">Adultos:</label>
                        <label className="block text-center tracking-wide text-base text-gray-700 font-bold">$93.49 USD</label>
                        <input type="number" className="appearance-none w-full border border-gray-500 rounded mt-2 py-2 px-4 text-lg text-gray-800" placeholder="Adultos (12+ Años)"></input>
                    </div>
                    <div className="flex flex-col flex-grow px-3 py-2 w-full">
                        <label className="block text-center tracking-wide text-mediums text-gray-700 font-bold">Niños:</label>
                        <label className="block text-center tracking-wide text-mediums text-gray-700 font-bold">$46.75 USD</label>
                        <input type="number" className="appearance-none w-full border border-gray-500 rounded mt-2 py-2 px-4 text-lg text-gray-800" placeholder="Niños (5-11 Años)"></input>
                    </div>
                </div>
                <div className="flex flex-row item-center">
                    <div className="flex flex-col flex-grow px-3 py-2 w-full">
                        <div className="relative text-gray-600">
                            <input type="text" className="appearance-none w-full border border-gray-500 rounded mt-2 py-2 px-4 text-lg text-gray-800"/>
                            <button type="submit" className="absolute right-0 top-10 mt-5 mr-4"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-alt" className="svg-inline--fa fa-calendar-alt fa-w-14 text-green-600 text-lg" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"></path></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row item-center">
                    <div className="flex flex-col flex-grow px-3 py-2 w-10/12">
                        <BtnCard text={['Agregar ', <FontAwesomeIcon key="bus" icon="bus"/>, ' transportación']} ></BtnCard>
                    </div>
                    <div className="flex flex-col flex-grow px-3 py-2 w-2/12">
                        <BtnCard text="Info"></BtnCard>
                    </div>
                </div>
                <div className="flex flex-row item-center">
                    <div className="flex flex-col flex-grow px-3 py-2 w-10/12">
                        <BtnCard text={['Agregar ', <FontAwesomeIcon key="utensils" icon="utensils" />, ' alimentos y bebidas']} ></BtnCard>
                    </div>
                    <div className="flex flex-col flex-grow px-3 py-2 w-2/12">
                        <BtnCard text="Info"></BtnCard>
                    </div>
                </div>
                <div className="flex flex-row item-center">
                    <div className="flex flex-col flex-grow px-3 py-2 w-10/12">
                        <BtnCard text={['Agregar ', <FontAwesomeIcon key="camera" icon="camera" />, ' Fotopass']} ></BtnCard>
                    </div>
                    <div className="flex flex-col flex-grow px-3 py-2 w-2/12">
                        <BtnCard text="Info"></BtnCard>
                    </div>
                </div>
                <div className="flex flex-row item-center">
                    <div className="flex flex-col flex-grow px-3">
                        <label className="block text-center tracking-wide text-gray-900 text-3xl">Total $93.49 USD</label>
                    </div>
                </div>
                <div className="flex flex-row item-center">
                    <div className="flex flex-col flex-grow px-5 py-2">
                        <label className="block text-center tracking-wide text-gray-900 font-semibold text-sm">*Precios  sujeto a cambios si precio aviso, Aplica restricciones</label>
                    </div>
                </div>
                    <div className="flex flex-row item-center">
                        <div className="flex flex-col flex-grow px-3 py-2 w-6/12">
                        <BtnCard text="Agregar al carrito"  background="bg-red-400"  border=" " font="text-white" ></BtnCard>                    
                        </div>
                        <div className="flex flex-col flex-grow px-3 py-2 w-6/12">
                        <BtnCard text="Pagar" background="bg-red-500" border=" " font="text-white"></BtnCard>                    
                        </div>
                    </div>
                    <div className="flex flex-row item-center">
                    <div className="flex flex-col flex-grow px-3 pt-2 pb-4 w-12/12">
                        <BtnCard text="Ver descuentos y beneficios" ></BtnCard>
                    </div>
                </div>
            </div>
        );
    }
}
  
export default ResumenCard;
