import { Button } from '@mui/material'
import React from 'react'
import { useNavigate } from "react-router-dom";

const reload = ()=>{
    const navigate = useNavigate();
        navigate('/')
}
function Verify() {
  return (
    <div>
        <span>Goto email and varify our email </span>
        <Button onClick={reload}> Refersh</Button>
    </div>
  )
}

export default Verify