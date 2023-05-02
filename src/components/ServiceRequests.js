import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { url } from '../App';
import axios from 'axios';
import { Button } from 'bootstrap';

const ServiceRequests = () => {
  let[data, setData] = useState([]);
  let token = sessionStorage.getItem('token');
  let navigate = useNavigate();

  let logout = ()=>{
    sessionStorage.clear();
    navigate('/login');
  }

  let getData = async()=>{
    try {
      let res = await axios.get(`${url}/serviceRequests/allServices`,{
      })
      console.log(res);
      toast.success(res.data.message);
      setData(res.data.services);
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
            <th>Service Requests</th>
            <th>Assignee</th>
            <th>Due Date</th>
            <th>Priority</th>
            <th>Assignee Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e,i)=>{
              return <tr key={e.id}>
                <td>{i+1}</td>
                <td>{e.serviceTask}</td>
                <td>{e.assignee}</td>
                <td>{e.due_date}</td>
                <td>{e.priority}</td>
                <td>{e.assigneeEmail}</td>
                <td>{e.status}</td>
              </tr>
            })
          }
        </tbody>
      </Table>
    );
}

export default ServiceRequests;