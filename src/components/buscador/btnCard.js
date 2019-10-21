import React from 'react';

class BtnCard extends React.Component{
    render(){
        return(
            <button className={`${this.props.background ? this.props.background : 'bg-transparent'} ${this.props.font ? this.props.font : 'text-gray-700 font-semibold'}  ${this.props.border ? this.props.border : 'border border-gray-800'} ${this.props.extraClassName ? this.props.extraClassName : ''} rounded-full py-2 px-4 hover:bg-green-600`}>
              {this.props.text}
            </button>
        );
    } 
}

export default BtnCard;