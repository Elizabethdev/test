import React from 'react';
import img from '../../img/850X400-slide.png';

class Slide extends React.Component {
    render(){
      return (
        <div className="bg-gray-200 pt-20">
	        <div className="carousel-inner relative overflow-hidden w-full">
                <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" ></input>
                <div className="carousel-item absolute opacity-0" >
                    <div className="block h-full w-full bg-indigo-500 text-white text-5xl text-center">
                    <img src={img} className="App-logo" alt="slide" />
                    {/* Slide 1 */}
                    </div>
                </div>
                
                <ol className="carousel-indicators">
                    <li className="inline-block mr-3">
                        <label className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                    </li>
                    <li className="inline-block mr-3">
                        <label className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                    </li>
                    <li className="inline-block mr-3">
                        <label className="carousel-bullet cursor-pointer block text-4xl text-white hover:text-blue-700">•</label>
                    </li>
                </ol>
	        </div>
        </div>
      );
    }
  }

export default Slide;