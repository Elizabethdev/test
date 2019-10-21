import React from 'react';

function allProps(index) {
    return {
      id: index,
      visible: true,
      aria: true,
    };
}

function Tab1Content() {
    return(
        <ul className="list-disc text-sm">
            <li>Recorridos en tres ríos subterráneos (incluye bolsa de seguridad durante el recorrido).</li>
            <li>La presentación de Xcaret México Espectacular.</li>
            <li>Acceso a la playa, la caleta y pozas naturales.</li>
            <li>Visitas al Acuario de Arrecife de coral, el Mariposario y el Aviario.</li>
            <li>Mundo de Niños, un divertido espacio únicamentepara los más pequeños.</li>
            <li>Espectáculo Ecuestre, voladores de Papantla y Danzas Prehispánicas.</li>
            <li>Sendero de la selva tropical.</li>
            <li>Chalecos salvavidas y llantas flotantes.</li>
            <li>Camastros, hamacas y áreas de descanso.</li>
            <li>Sanitarios, vestidores y regaderas.</li>
            <li>Otros servicios (WiFi, cajeros automáticos y tiendas).</li>
            <li>Estacionamiento gratuito.</li>
        </ul>
    );
}

function Tab(props) {
    return(
        <div className="mt-2 mt-lg-5" id={`tab-${props.props['id']}`} role="tabpanel" aria-expanded={props.props['aria']}>
            {props.content}
        </div>
    );
}

function TabDetails(props){
    const propTypes  = [
        {id: 0, visible: false, aria: false},
        {id: 1, visible: false, aria: false},
        {id: 2, visible: false, aria: false},
    ];
    propTypes[props.value] = allProps(props.value);
    let tabRender;
    if(props.value === '0'){
        tabRender = <Tab props={propTypes[props.value]} content={<Tab1Content/>} />;
    } else{
        tabRender = <Tab props={propTypes[props.value]} content={<h2><strong>tab {props.value}</strong></h2>} />;
    }
    return(
        <div className="tabs-details pl-6 m-5">
            {tabRender}
        </div>
    );
}

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeTab = this.handleChangeTab.bind(this);
        this.state = {index: "0",
        };
    }

    handleChangeTab(e) {
        this.setState({index: e.target.rel});
    }
    
    render(){
        return(
            <div>
                <ul className="flex border-b border-green-600">
                    <li className= {`mr-1 ${this.state.index  === '0' ? '-mb-px' : ''}`}>
                        <a className={`react-tab ${this.state.index  === '0' ? 'tab-selected' : 'text-black hover:text-green-600'}`} rel="0" onClick={this.handleChangeTab}>Primer tab</a>
                    </li>
                    <li className={`mr-1 ${this.state.index  === '1' ? '-mb-px' : ''}`}>
                        <a className={`react-tab ${this.state.index  === '1' ? 'tab-selected' : 'text-black hover:text-green-600'}`} rel="1" onClick={this.handleChangeTab}>Segunda tab</a>
                    </li>
                    <li className={`mr-1 ${this.state.index  === '2' ? '-mb-px' : ''}`}>
                        <a className={`react-tab ${this.state.index  === '2' ? 'tab-selected' : 'text-black hover:text-green-600'}`} rel="2" onClick={this.handleChangeTab}>Tercera tab</a>
                    </li>
                </ul>
                <TabDetails value={this.state.index} />
            </div>
        );
    }
}
export default Tabs;