// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React, { Component } from 'react';
import './App.css';
import Table1 from './components/Table1';
import Table2 from './components/Table2';
import Table3 from './components/Table3';
import DatatablePage from './components/datatable';
var data = [
  {id: 1, name: 'Gob', value: '2'},
  {id: 2, name: 'Buster', value: '5'},
  {id: 3, name: 'George Michael', value: '4'},
  {id: 4, name: 'George Michael1', value: '10'}
];
 
 
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <p className="Table-header">Basic Table</p>
        <div id="collapse1"><Table1 data={data}/></div>
        <div class="table-wrapper-scroll-y my-custom-scrollbar"><Table2 data={data}/></div>
        
        <Table3 data={data}/> */}
        <DatatablePage data={data}/>
      </div>
    );
  }
}
 
export default App;