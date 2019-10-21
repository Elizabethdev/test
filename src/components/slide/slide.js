import React from 'react';
import img from '../../img/850X400-slide.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSlide: [
                {url: img, className: 'items-center w-full slider-item-active relative'},
                {url: img, className: 'items-center w-full slider-item relative'},
                {url: img, className: 'items-center w-full slider-item relative'}
            ],
            active: 0,
        }
      }
    
    handleClick() {
        const imgSlide = this.state.imgSlide.slice();
        let active = 0;
        this.state.active === imgSlide.length - 1 ? active = 0 : active = this.state.active + 1;
    
        imgSlide.forEach((item, index) => { 
          if(active === index){
                item.className = 'items-center w-full slider-item-active relative';
          }else{
                item.className = 'items-center w-full slider-item relative';
          }
        })
    
        this.setState({
            imgSlide: imgSlide,
            active: active
        })
    }
    
    renderImgSlide(items) {
        const listItems = items.map((item, index) =>
            <div key={index} className={item.className}>
                <img src={item.url} alt="" className="block w-full" onClick={() => this.handleClick(index)}></img> 
            </div>
        );
        return listItems; 
    }
    render() {
        return (
            <div className="carousel slide">
                <div className="relative w-full overflow-hidden">
                    {this.renderImgSlide(this.state.imgSlide)}
                </div>
            </div>
        );
    }
}

export default Slide;
