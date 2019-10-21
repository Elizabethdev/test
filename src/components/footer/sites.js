import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LogosCertificados from './logos';

function Section(props) {
    const sites = props.sites.map((site, index) =>
        <li key={index}>
            <a className="block px-4 py-1 md:p-2 lg:px-4" href="#">{site}</a>
        </li>
    );
    return(
        <div className="flex-col p-3 text-base lg:w-1/5">
            <p className="font-bold">{props.tagSites}</p>
            <hr/>
            <div className="text-sm">
                <ul className="flex flex-col -mx-4 md:items-start md:mr-4 lg:mr-8">
                    {sites}
                </ul>
            </div>
        </div>
    );
}

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
    }
    return <div className="flex flex-wrap items-center justify-between">{items}</div>;
}

function RepeatDiv(props){
    let div = [];
    for (let i=0; i < props.nTimes; i++){
        div.push(props.children(i));
    }
    return <div className="flex flex-row flex-wrap pt-2">{div}</div>;
}
function DivPhone(props) {
    return(
        <div className="flex-col w-1/2 lg:w-1/3 xl:1/3">
            <div className="text-center text-sm  text-white font-semibold bg-green-900 rounded m-2 p-2">
                {props.pais}: {props.tel}
            </div>
        </div>
    );
}

class Brands extends React.Component{
    render(){
    const tagSites = ['Destinos', 'Sitios Xcaret', 'Comprar', 'Sobre Xcaret', 'Otros'];
    const sites = [
        ['Cancún', 'Riviera Maya', 'Playa del Carmen', 'Tulum', 'Cobá', 'Quintana Roo', 'Chichén Itza'],
        ['Acerca de Xcaret', 'Acerca de Xel-Há', 'Acerca de Xplor', 'Acerca de Xplor Fuego', 'Acerca de Xavage', 'Acerca de Xoximilco', 'Acerca de Xenses'],
        ['Comprar Xcaret', 'Comprar Xel-Há', 'Comprar Xplor', 'Comprar Xplor Fuego', 'Comprar Xavage', 'Comprar Xoximilco', 'Comprar Xenses'],
        ['Mapa de Sitio', 'Blog Xcaret', 'Atracciones en Xcaret', 'Gastronomia en Xcaret', 'Actividades opcionales', 'Promociones', '¿Ya nos visitaste?'],
        ['Acerca de Grupo Xcaret', 'Contáctanos', 'Afiliados', 'Agencias Online', 'Bodas', 'Grupos', 'Sala de prensa'],
    ];

    const paisPhone = [
        {pais:'USA-CAN', tel:'1-855-326-0682'},
        {pais:'Brazil', tel:'0-800-892-3371'}, 
        {pais:'Argentina', tel:'0800-122-0384'}, 
        {pais:'Colombia', tel:'01-800-952-0705'}, 
        {pais:'Spain', tel:'900-965-224'}, 
        {pais:'Chile', tel:'0-800-835-016'}, 
    ];
        return(
            <div className="py-3">
                <Repeat numTimes={5}>
                    {(index) => <Section key={index} tagSites={tagSites[index]} sites={sites[index]} />}
                </Repeat>
                
                <div className="flex flex-col-reverse lg:flex-row xl:flex-row">
                    <div className="lg:flex-shrink-0 p-3 text-base lg:w-1/5">
                        <p className="font-bold hidden lg:block">Redes Sociales</p>
                        <hr className="hidden lg:block"/>
                        <div className="text-sm py-3">
                            <ul className="flex justify-between lg:justify-start xl:justify-start mr-4 lg:-mx-4 xl:-mx-4">
                                <li className="inline-block">
                                    <a className=" px-4 py-1 md:p-2 lg:px-4" href="#"><FontAwesomeIcon size="lg" icon={['fab', 'facebook-f']} /></a>
                                </li>
                                <li className="inline-block">
                                    <a className="px-4 py-1 md:p-2 lg:px-4" href="#"><FontAwesomeIcon size="lg" icon={['fab', 'twitter']} /></a>
                                </li>
                                <li className="inline-block">
                                    <a className="px-4 py-1 md:p-2 lg:px-4" href="#"><FontAwesomeIcon size="lg" icon={['fab', 'instagram']} /></a>
                                </li>
                                <li className="inline-block">
                                    <a className="px-4 py-1 md:p-2 lg:px-4" href="#"><FontAwesomeIcon size="lg" icon={['fab', 'youtube']} /></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <LogosCertificados className="flex p-2 text-base lg:w-full lg:hidden xl:hidden" />
                    <div className="lg:flex-shrink p-3 text-base lg:w-4/5">
                        <p className="font-bold">Customer services/ Sales</p>
                        <hr/>
                        <div className="">
                            <p className="text-base pt-6">Monday to Friday from 7:00 AM to 12:00 AM / Saturday and Sunday from 7:00 AM to 10:00 PM. LocalTime.</p>
                            <div className="pt-6">
                                <p className="text-base font-bold">Toll free number within México</p>
                                <div className="flex pt-2">
                                    <div className="inline-block text-center text-sm w-1/2 lg:w-1/3 text-white font-semibold bg-green-900 rounded m-2 p-2">
                                        Cancún: 998-883-3147
                                    </div>
                                    <div className="inline-block text-center text-sm w-1/2 lg:w-1/3 text-white font-semibold bg-green-900 rounded m-2 p-2">
                                        Playa del Carmen: 984-206-0038
                                    </div>
                                </div>
                            </div>
                            <div className="lg:pt-6 xl:pt-6">
                                <p className="text-base font-bold">Rest of the world</p>
                                <RepeatDiv nTimes={6}>
                                    {(index) => <DivPhone key={index} pais={paisPhone[index]['pais']} tel={paisPhone[index]['tel']} />}
                                </RepeatDiv>
                            </div>
                        </div>
                    </div>
                </div>
                <LogosCertificados className="justify-between p-2 text-base lg:w-full hidden lg:flex xl:flex" />
            </div>
        );
    }
}

export default Brands;