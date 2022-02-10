import { Container } from '@mui/material'
import React from 'react'
import Img404 from './404.jpg'
import Grid from '@mui/material/Grid';
const index = () => {
    return (
        <div className="container-fluid">
            <img src={Img404} className="img-fluid" alt="404" />
        </div>
    )
}

export default index