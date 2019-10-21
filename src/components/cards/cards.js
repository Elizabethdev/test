import React from 'react';
import CardImg from './cardImg';
import NewsCard from '../mobile/newsCard';
import DonwloadCard from '../mobile/donwloadCard';
import img400 from '../../img/400X300.png';
import img300 from '../../img/300X400.png';
import img900 from '../../img/900X100.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Cards extends React.Component{
    render(){
        const cards = [
            {id: 1, title: 'xcaret', url1: img300, url2:img400 },
            {id: 2, title: 'xenses', url1: img300, url2:img400 },
            {id: 3, title: 'xplor', url1: img300, url2:img400 },
          ];

        const content = cards.map((card) =>
            <CardImg key={card.id} card={card} />
        );
        return(
            <div className="container m-auto">
                <div className="flex flex-wrap items-center justify-center">
                    <p className="text-left text-lg font-bold text-gray-800 mt-2 pl-10 pr-3 w-full">
                        Los visitantes que compraron su admisión a Parque Xcaret también compraron:
                    </p>
                    {content}
                </div>

                <div className="flex-col p-10 lg:hidden xl:hidden">
                    <div className="w-full items-center py-2">
                        <p className="font-semibold text-2xl text-center">
                        Hasta <strong>12 meses</strong> sin intereses
                        </p>
                    </div>
                    <div className="w-full items-center">
                        <img src={img900} className="rounded-lg" alt="ejemplo 3"></img>                
                    </div>
                    <div className="w-full items-center py-2">
                        <p className="text-2xl m-2">Con los principales bancos y tarjetas emitidas en México</p>
                        <p className="text-2xl m-2">*No aplica Paypal 
                            <strong className="font-bold text-2xl"> Más opciones <FontAwesomeIcon size="lg" icon="angle-double-right" /></strong> 
                        </p>
                    </div>
                    <div className="w-full items-center py-2">
                        <NewsCard />
                    </div>
                    <div className="w-full items-center py-2">
                        <DonwloadCard />
                    </div>
                </div>
            </div>
        );
    }
}

export default Cards;