import React, { Component } from 'react';
import './Tour.scss'

export default class Tour extends Component {
    state = {
        showInfo: false
    };
    handleClick = () => {
        console.log(this);
        this.setState({
            showInfo: !this.state.showInfo
        });
    }

    removeTour = () =>{
        this.props.removeTourCallback(this.props.tour.id);
    }
  render() {
      
   return(
       <article className='tour'>
           <div className="img-container">
              <img src={this.props.tour.img} alt="" /> 
              <span className="close-btn" onClick={this.removeTour}><i className = "fas fa-window-close"></i></span>  
            </div>
            <div className="tour-info">
                <h3>{this.props.tour.city}</h3>
                <h4>{this.props.tour.name}</h4>    
                <h5>info {" "}
                    <span onClick={this.handleClick}><i className="fas fa-caret-square-down"></i></span>
                </h5>
                {this.state.showInfo && <p>{this.props.tour.info}</p>}
            </div>
       </article>
   )
  }
}
