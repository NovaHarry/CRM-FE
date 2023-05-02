import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { url } from '../App';
import axios from 'axios';
import { Button } from 'bootstrap';

const Leads = () => {
  let[data, setData] = useState([]);
  let token = sessionStorage.getItem('token');
  let navigate = useNavigate();

  let logout = ()=>{
    sessionStorage.clear();
    navigate('/login');
  }

  let getData = async()=>{
    try {
      let res = await axios.get(`${url}/leads/allLeads`,{
      })
      toast.success(res.data.message);
      setData(res.data.leads);
    } catch (error) {
      if(error.response.status === 401 || error.response.status === 400)
      {
        toast.error(error.response.data.message);
        logout()
      }
    }
  }
  useEffect(()=>{
    if(token){
      getData();
    }
    else{
      logout()
    }
  },[])

  return (
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>#</th>
            <th>Company Name</th>
            <th>Sector</th>
            <th>Symbol</th>
            <th>Avg. Cost of Price</th>
            <th>Market Price</th>
            <th>No. Of Shares</th>
            <th>Email (Official)</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e,i)=>{
              return <tr key={e.id}>
                <td>{i+1}</td>
                <td>{e.companyName}</td>
                <td>{e.sector}</td>
                <td>{e.Symbol}</td>
                <td>{e.avgPrice}</td>
                <td>{e.marketPrice}</td>
                <td>{e.numberofShares}</td>
                <td>{e.officialEmail}</td>
              </tr>
            })
          }
        </tbody>
      </Table>
    );
}

export default Leads