import React from 'react';
import Child from './child';

class App extends React.Component{

  constructor(){
    super()
    this.state={
      name:"hello",
      course : "smit"
    }
  }

  abc(){
    this.setState({
      name : "new value"
    })
  }

  render(){
    return(
      <>
       <b>
           <h1>parent : {this.state.name}</h1>   
       </b>
          <button onClick={()=>this.abc()}>Click ME</button>
            <Child data={this.state.name}/>
      
      </>
    )
  }
}

export default App;



// import { render } from 'react-dom';

// class App extends React.Component {
//   constructor(){
//     super()
//     this.state={
//       name:'Salman'
//     }
// }
// abc(){
//   this.setState({
//     name:'new value'
//   })
// }

//   render(){
//     return(
//       <>
//       {/* <child>{this.state.name}</child>
//        */}
//       <Child/>
//         <h1>{this.props.name}</h1>
//         <button onClick={()=>this.abc()}>Clicked mee</button>
//       </>
//     )
//   }
// }


// export default App;