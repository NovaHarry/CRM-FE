import React from 'react'
import Leads from './Leads'
import ServiceRequests from './ServiceRequests'
import Users from './Users'
import { Button } from 'bootstrap'

const Dashboard = () => {
  return (
    <div>
        <div className='title'>
        <h1>Users</h1>
        <Users/>
        </div>
        <div className='title'>
        <h1>LEADS</h1>
        <Leads/>
        </div>
        <div className='title'>
        <h1>ServiceRequests</h1>
        <ServiceRequests/>
         </div>
    </div>
  )
}

export default Dashboard