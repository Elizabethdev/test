import React from 'react';
import logo4 from '../../img/placeholder-logo4.png';

function Logo(props) {
    return(
        <div className="flex-col p-3">
            <img src={logo4} alt="" className={`object-cover object-center ${props.className}`} />
        </div>
    );
}

function Repeat(props) {
    let items = [];
    for (let i = 0; i < props.numTimes; i++) {
      items.push(props.children(i));
    }
    return <div className="flex flex-wrap items-center justify-center py-3">{items}</div>;
}

class Brands extends React.Component{
    render(){
        return(
            <div className="py-3">
                <Repeat numTimes={8}>
                    {(index) => <Logo key={index} className="w-32" />}
                </Repeat>
                <Repeat numTimes={2}>
                    {(index) => <Logo key={index} className="w-32" />}
                </Repeat>
                <div className="flex flex-wrap items-center justify-center py-3">
                    <Logo className="w-40" />
                </div>
                <Repeat numTimes={3}>
                    {(index) => <Logo key={index} className="w-32" />}
                </Repeat>
                <div className="flex flex-wrap items-center justify-center py-3">
                    <Logo className="w-40" />
                </div>
            </div>
        );
    }
}

export default Brands;