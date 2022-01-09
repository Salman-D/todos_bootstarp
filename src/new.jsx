import React from "react";
// import Child2 from "./new";

class Child extends React.Component{
   constructor(props){
       super(props)
       console.log(props)

   }
    render(){
        return(
            <> 
             <h1>Child child  Componets</h1> 
             <h2> child : {this.props.child}</h2>
             <h2> child : {this.props.p1}</h2>     
            </>
        )
    }
}

export default Child