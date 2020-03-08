import React from 'react';
import Clients from '../clients/Clients';
import Sidebar from './Sidebar';

const Dashboard = () => {
  return (
    <div className='row'>
      <div className='col-md-10 mt-4'>
        <Clients />
      </div>
      <div className='col-md-2 mt-4'>
        <Sidebar />
      </div>
    </div>
  );
};

export default Dashboard;
