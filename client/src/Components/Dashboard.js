import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const navigate = useNavigate();

  const getUser = async () => {
    try {
        const response = await axios.get("http://localhost:8000/login/success", { withCredentials: true });

        console.log("response",response)
    } catch (error) {
      console.log(error)
      navigate("*")
    }
}


useEffect(() => {
  getUser()
}, [])
  return (
    <div style={{textAlign:"center"}}>
        <h1>Dashboard</h1>
      </div>
  )
}

export default Dashboard