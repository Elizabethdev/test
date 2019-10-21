import React from 'react';

class MobileTabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tabs: [],
            index: 1,
            classActive: '',
            className: '',
            classContenido: '',
            classActiveCont: '',
        };
    
    }
    componentDidMount(){
        this.setState({
            tabs: this.props.tabs,
            classActive: this.props.tabs[this.state.index].classActive,
            className: this.props.tabs[this.state.index].className,
            classContenido: this.props.tabs[this.state.index].classContenido,
            classActiveCont: this.props.tabs[this.state.index].classActiveCont
        });
        
    }
    componentWillUnmount() {
        // clearInterval(this.timerID);
    }

    handleClick(i){
        const auxTabs = this.state.tabs.slice();
        
        auxTabs.forEach((item, index) => {
            if(index == i){
                item.className = this.state.classActive;
                item.classContenido = this.state.classActiveCont; 
            }
            else{
                item.className = this.state.className;
                item.classContenido = this.state.classContenido; 
            }
        })

        this.setState({
            tabs: auxTabs
        })

    }

    renderTabSquare(tabs){
        const renderTabs= tabs.map((tab, index) =>
            <li key={index} className= {`flex-shrink border-r border-white ${tab.className}`}>
                <a className="text-center text-white block py-2 px-4 uppercase" onClick={()=> this.handleClick(index)}>
                    {tab.text}
                </a>
            </li>
        );
        return renderTabs;
    }    

    renderContent(items) {
        const contenido = items.map((item, index) =>
            <div className={item.classContenido} key={index}> {item.Contenido} </div>
        );
        return contenido;
    }

    render(){
        return(
            <div className="w-full pt-4">
                <ul className="justify-center flex">
                    {this.renderTabSquare(this.state.tabs)}
                </ul>
                <div className="p-4 pt-10">
                    {this.renderContent(this.state.tabs)}
                </div>
            </div>
            
        );
    } 
}

export default MobileTabs;