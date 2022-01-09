import React from "react";
import Child2 from "./new";

class Child extends React.Component{
   constructor(props){
       super(props)
       console.log(props)
       this.state={
           data : "child data"
       }    
   }

   childupdate(){
    this.setState({
      data : "child Update"
    })
  }
    render(){
        return(
            <> 
             <h1>Child Componets</h1>

             <button onClick={()=>{this.childupdate()}}>Child change</button>
             <h2> child : {this.props.data}</h2>
             <Child2 child={this.state.data} p1={this.props.data}/>
             
            </>
        )
    }
}

export default Child