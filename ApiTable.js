// export default App;
import React, { Component } from 'react';
import DatatablePage from './datatables';
const APIurl = 'https://webserviceexample.io/api/v2/';
export default class ApiTable extends Component {
 _isMounted = false;
 constructor(props) {
        super(props);
        this.state = { jobs: [] };
}
// Lifecycle method
componentDidMount() {
// Make HTTP request to web service
//APIurl is define on line 4
        fetch(APIurl)
            .then(res => res.json())
            .then(res => {
                this.setState({jobs: res.articles})
                console.log(this.state.jobs)
            }) 
}
render() {
    //push returned api to a constant var
    const jobs = this.state.jobs;
    //then before we render on screen we build a list from our api data
    //in your case each list line ( <li>) will be replace with a table row (<tr>)
    //so iterate through each one and then return it results
    let x = jobs.map((item, i) => { 
      var t = <li key={i}> <img src={item.image} /> <br /> <strong>{item.title} </strong> <br /> {item.date} - {item.desc}  - Read more <a href={item.link}> here </a> 
      </li>       
      return t
    });
    //finally we render onto screen byusing the JSX - this is JS in HTML injected
    return (
      <div className="App">
        {x}
      </div>
    );
  }
}
