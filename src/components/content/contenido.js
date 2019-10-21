import React from 'react';
import Tabs from './tabs';
import TabsMobile from '../mobile/tabs';
import BtnCard from '../buscador/btnCard';
import ResumenCard from '../buscador/resumenCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Contenido extends React.Component{
    render(){
        return(
            <div className="container m-auto p-10">
                <div className="hidden lg:flex xl:flex flex-no-shrink text-grey-700">
                    <div className="justify-start lg:w-3/5 xl:w-3/5">
                        <nav className="bg-grey-light rounded w-full">
                            <ol className="list-reset flex text-grey-dark">
                                <li><a href="#" className="text-blue font-bold"> <FontAwesomeIcon icon="home" size="sm"/> Home</a></li>
                                <li><span className="mx-2">//</span></li>
                                <li><a href="#" className="text-blue font-bold">Admisiones</a></li>
                            </ol>
                        </nav>
                        <div className="py-6">
                            <h1 className="font-bold uppercase">Entrada xcaret parque,</h1>
                            <p className="text-left text-sm font-bold text-gray-700 my-5">
                                Esta es una prueba para validar la descripción del producto...
                            </p>
                            <div className="flex-row mb-5">
                                <h2 className="inline-block font-bold uppercase text-gray-600 mr-2">Entrada xcaret parque,</h2>
                                <span className="inline-block line-through text-gray-600">prueba prueba prueba</span>
                            </div>
                            
                            <p className="text-sm">
                                <FontAwesomeIcon className="text-grey-700" icon="clock" size="sm"/><label className="text-grey-700 font-bold"> Duración: </label> X horas  
                            </p>
                            <p className="text-sm">
                                <FontAwesomeIcon className="text-grey-700" icon="heart" size="sm"/><label className="text-grey-700 font-bold"> Categoria: </label> X categorias  
                            </p>
                            <p className="text-sm">
                                <FontAwesomeIcon className="text-grey-700" icon="clock" size="sm"/><label className="text-grey-700 font-bold"> Horario: </label> X horario  
                            </p>
                        </div>
                    
                        <Tabs />

                        <div className="flex pt-4">
                            <div className="inline-block items-start w-1/2">
                                <BtnCard font="text-gray-500" text={['', <FontAwesomeIcon key="angle-double-left" icon="angle-double-left"/>, ' Xcaret Total']} border="border border-gray-500"></BtnCard>
                            </div>
                            <div className=" inline-block items-end w-1/2">
                                <BtnCard font="text-gray-500" text={['Xcaret Plus ', <FontAwesomeIcon key="angle-double-right" icon="angle-double-right"/>, '']} border="border border-gray-500"></BtnCard>
                            </div>
                        </div>
                    </div>
                    <div className="justify-start w-full lg:w-2/5 xl:w-2/5"> 
                        <ResumenCard />
                    </div>
                </div>
                <div className="flex flex-no-shrink text-grey-700 lg:hidden xl:hidden">
                    <div className="justify-start w-full">
                        <ResumenCard />
                    </div>
                </div>
                <div className="flex flex-no-shrink text-grey-700 lg:hidden xl:hidden">
                    <div className="justify-start w-full pt-4">
                        <TabsMobile />
                    </div>
                </div>
            </div>
        );
    }
}

export default Contenido;