import React from 'react';

class CardImg extends React.Component{
    render(){
        console.log(this.props.card);
        return(
            <div className="flex-shrink-0 m-6 relative overflow-hidden bg-purple-500 rounded-lg max-w-xs shadow-lg">
                <div className="bg-white m-auto border-1  border-dashed border-gray-100 shadow-md rounded-lg overflow-hidden">
                    <img src={this.props.card.url1} alt="" className="w-full object-cover object-center lg:hidden xl:hidden" />
                    <img src={this.props.card.url2} alt="" className="w-full object-cover object-center hidden lg:block xl:block" />
                </div>
            </div>
        );
    }
}

export default CardImg;