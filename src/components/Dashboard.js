import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { url } from '../App';
import axios from 'axios';
import { Button } from 'bootstrap';

const Dashboard = () => {
  let[data, setData] = useState([]);
  let token = sessionStorage.getItem('token');
  let navigate = useNavigate();

  let logout = ()=>{
    sessionStorage.clear();
    navigate('/login');
  }

  let getData = async()=>{
    try {
      let res = await axios.get(`${url}/users`,{
        headers:{Authorization: `Bearer ${token}`}
      })
      toast.success(res.data.message);
      setData(res.data.users);
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
            <th>First Name</th>
            <th>Last Name</th>
            <th>Role</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((e,i)=>{
              return <tr key={e.id}>
                <td>{i+1}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.role}</td>
                <td>{e.email}</td>
              </tr>
            })
          }
        </tbody>
      </Table>
    );
}

export default Dashboard