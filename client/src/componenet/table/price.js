
import React, { Component } from 'react'
import axios from 'axios'
import ReactTable from "react-table-6"; 
import 'react-table-6/react-table.css'

 class Table extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      loading:true
    }
  }
  async getUsersData(){
    const res = await axios.get('http://localhost:5000/api/upload')
    console.log(res.data)
    this.setState({loading:false, users: res.data})
  }
  componentDidMount(){
    this.getUsersData()
  }
  render() {
    const columns = [{  
      price: 'ID',  
      seller_type:'ID',
     }
     
    
  ]
    return (
      <ReactTable  
      data={this.state.users}  
      columns={columns}  
   />
    )
  }
}
export default Table;