import axios from 'axios';
import React, {Component} from 'react'; 
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css'
class Upload extends Component { 
   state = { 
     
      selectedFile: null,
            error: null,
            responseflag: false,
            data:{}

    }; 
        
 onButtonPress = () => {
    this.setState({
      responseflag: false
    });
  }

    onFileChange = event => { 
      
      this.setState({ selectedFile: event.target.files[0] }); 
     }; 
     
    onFileUpload = () => { 
        this.setState({
        error: null
      });

    
      const formData = new FormData(); 
      if(this.state.selectedFile == null)
      {

      this.setState({
        error: "Please select file"
      });
        return;
      }
      formData.append( 
        "statement", 
        this.state.selectedFile
      ); 
    
      console.log(this.state.selectedFile); 
       const url = 'http://localhost:5000/api/upload';
      
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    }
     axios.post(url, formData,config)
        .then((res)=>{
            console.log(res.data['response'])
          this.setState({
        data: res.data['response']
      });
           this.setState({
        responseflag: true
      });
           this.setState({ selectedFile: null}); 

          }).catch((error)=>{
            console.log(error)
          })
    }; 
     
    fileData = () => { 
      if (this.state.selectedFile) { 
             return ( 
          <div> 
            <h2>File Details:</h2> 
            <p>File Name: {this.state.selectedFile.name}</p> 
            <p>File Type: {this.state.selectedFile.type}</p> 
            <p> 
              Last Modified:{" "} 
              {this.state.selectedFile.lastModifiedDate.toDateString()} 
            </p> 
          </div> 
        ); 
      } else { 
        return ( 
          <div> 
            <br /> 
            
          </div> 
        ); 
      } 
    }; 
     
    render() { 
      let tabe;
      console.log("test render")
      let flag = this.state.responseflag
     const columns = [{  
       Header: 'seller_type',  
       accessor: 'seller_type'  
      },{  
      Header: 'amount',  
      accessor: 'amount'  
      }]  
     console.log(flag)
      if(flag){
         return (
         <div>
<ReactTable  
      data={this.state.data} 
      columns={columns} 
      defaultPageSize = {5}   
   />

   
   <button onClick={this.onButtonPress}> 
                  Return! 
                </button> 
    <h5>Click button to return to homepage </h5>
   </div>
      );
      }
    
   
   
     
  return ( 

  <div class="bg-secondary">


        <div class="bg-secondary"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height:"100px"
        }}> 
        
              <div> 
                <input type="file" onChange={this.onFileChange} /> 
                <button onClick={this.onFileUpload}> 
                  Upload! 
                </button> 
            </div> 
          {this.fileData()} 

        </div> 
         <div   style={{
          display: "flex",
          justifyContent: "center",

      
      
        }} ><h3>{this.state.error}</h3></div>
      }
       
    
        
         </div>
         

      ); 
  
}


  }

  

  
  export default Upload;