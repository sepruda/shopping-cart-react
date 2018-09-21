import React, { Component} from 'react';
import Backdrop from '../Backdrop/Backdrop';

import './Modal.css'

class Modal extends Component {

    // performance enhancment 
    // shouldComponentUpdate(nextProps) {
    //     return nextProps.showModal !== this.props.show;
    // }
    
    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className="Modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)': 'translate(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </React.Fragment>
        )
    }
} 

export default Modal;