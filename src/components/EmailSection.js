import React, { useState, useEffect } from 'react'
import UserService from '../services/UserService';
import EmailAdd from './EmailAdd';
import EmailList from './EmailList';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function UserComponent() {

    /*  const [user, setUsers] = useState([])
 
     useEffect(() => {
         getUsers()
     }, [])
 
     const getUsers = () => {
 
         UserService.getUsers().then((response) => {
             setUsers(response.data)
             console.log(response.data);
         });
     }; */
    const [list, setList] = useState([]);
    const handleAddItem = addItem => {
        setList([...list, addItem]);
    };
    return (
        <Card className="container" sx={{ marginTop: "20px", backgroundColor: "#f4fbfe", borderRadius: "19px" }}>
            <section class="sectionCardDragDrop">
                <div > Firmantes</div>
            </section>
            <div>
                {/*(A-1)*/}
                <EmailAdd handleAddItem={handleAddItem} />
                {/*(C)*/}
                <EmailList list={list} setList={setList} />
            </div>
            <Button sx={{
                marginTop: "20px", backgroundColor: "#48c1f4",
                color: "white", borderRadius: "19px"
            }}>Enviar</Button>
        </Card>
    )
}
