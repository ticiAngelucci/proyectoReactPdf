import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EmailAdd from './emailComponents/EmailAdd'
import EmailList from './emailComponents/EmailList'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'

export default function EmailSection() {
const postEmails = () => {
    axios.post('/user', list.description)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}
    const [list, setList] = useState([]);
    list.map(data => console.log(data.description))
    const handleAddItem = addItem => {
        setList([...list, addItem]);
    };
    return (

        <Grid
            container
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="center"
            alignItems="flex-start"
            sx={{ borderRadius: "18px" }}
        >

            <div class="sectionCardDragDrop">
                Firmantes
            </div>
            <div>
                <EmailAdd handleAddItem={handleAddItem} />
                <EmailList list={list} setList={setList} />
            </div>
            <Button sx={{
                marginTop: "20px", backgroundColor: "#48c1f4",
                color: "white", borderRadius: "19px"
            }}>Enviar</Button>
        </Grid>
    )
}
