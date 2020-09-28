import React, { Component } from 'react'


class WorldClock extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             date:new Date() ,
             USTime:'16:26:12',
             londonTime:'10:26:11',               
        }
    }
    

    callMe(){
        setInterval(()=>{
           this.setState({
               date:new Date()
           });

        },1000)
    }

    clickHandler=(event)=>{
        this.setState({
            USTime:'20:16:12'
        })
    }
    
    render() {
        return (
            <div className="container"> 
               <div className="US-Time">
                    <label>Set United State time:</label>
                    <input type="text" />

                    <button onClick={this.clickHandler}>Submit</button>
               </div>

               <div className="time">
                   <div className="Us">
                       <label>United State:</label>
                       <h2>{this.state.USTime} </h2>
                   </div>
                   <div className="Us">
                       <label>London</label>
                       <h2>{this.state.londonTime}</h2>
                   </div>
                   <div className="Us">
                       <label>India</label>
                       <h2>{this.state.date.toLocaleTimeString([],{hour12:false})}</h2>
                       {this.callMe()}
                   </div>
                   
               </div>
            </div>
        )
    }
}

export default WorldClock
