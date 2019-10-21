import React from 'react';
import Tabs from './tabs';
import TabsMobile from '../mobile/tabs';
import BtnCard from '../buscador/btnCard';
import ResumenCard from '../buscador/resumenCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ContenidoText(params) {
    return(
        // <div className="p-4 pt-10">
            <p className="text-gray-800 text-lg font-semibold">Xcaret es el parque en Playa del Carmen con más de 50 atracciones 
            naturales y culturales en donde te reencuentras con la naturaleza en su maravilloso marco
            rico en flora y fauna; Y con México, en atracciones que te recuerdan lo grandiosa que es 
            esta tierra. Descubre por qué Xcaret es el lugar más emblemático de la Riviera Maya </p>
        // </div>
    );
}

class Contenido extends React.Component{
    render(){
        const sendTabsCompra = [
            {text:'Compra tu admisión', className:'bg-green-700 arrow-tab-movil', classActive:'bg-green-700 arrow-tab-movil', Contenido: <ResumenCard />, classContenido: '', classActiveCont:''},
            {text:'Atracciones', className:'bg-green-600 hover:bg-green-700', classActive:'bg-green-700 arrow-tab-movil', Contenido: 'Tab contenido 1', classContenido: 'hidden', classActiveCont:''},
            {text:'Gastronomía', className:'bg-green-600 hover:bg-green-700', classActive:'bg-green-700 arrow-tab-movil', Contenido: 'Tab cocontenito 2', classContenido: 'hidden', classActiveCont:''},
            {text:'Como llegar', className:'bg-green-600 hover:bg-green-700', classActive:'bg-green-700 arrow-tab-movil', Contenido: 'Tab contenido 3', classContenido: 'hidden', classActiveCont:''}
        ];
        const sendTabsM = [
            {text:'¿Qué es Xcaret?', className:'bg-green-700 arrow-tab-movil', classActive:'bg-green-700 arrow-tab-movil', Contenido: <ContenidoText />, classContenido: '', classActiveCont:''},
            {text:'Que Incluye', className:'bg-green-600 hover:bg-green-700', classActive:'bg-green-700 arrow-tab-movil', Contenido: 'Tab contenido 1', classContenido: 'hidden', classActiveCont:''},
            {text:'Recomendaciones', className:'bg-green-600 hover:bg-green-700', classActive:'bg-green-700 arrow-tab-movil', Contenido: 'Tab cocontenito 2', classContenido: 'hidden', classActiveCont:''},
            {text:'Información Importante', className:'bg-green-600 hover:bg-green-700', classActive:'bg-green-700 arrow-tab-movil', Contenido: 'Tab contenido 3', classContenido: 'hidden', classActiveCont:''}
        ];
        return(
            <div className="container m-auto px-10 lg:p-10">
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
                        <TabsMobile tabs={sendTabsCompra} />
                    </div>
                </div>
                <div className="flex flex-no-shrink text-grey-700 lg:hidden xl:hidden">
                    <TabsMobile tabs={sendTabsM} />
                </div>
            </div>
        );
    }
}

export default Contenido;