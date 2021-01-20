import React, { Component } from "react";
import Upload from './componenet/Report/file upload.js';

import Navbar from "./componenet/layout/Navbar.js";
import Table from"./componenet/table/price.js";
 class App extends Component {
  render() {
    return (
              <div className="App">
        
       <Navbar/>
       <Upload/>
       
       </div>
    );
  }
}
export default App;