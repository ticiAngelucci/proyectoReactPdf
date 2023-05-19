import React, { useState, useEffect } from 'react'
import UserService from '../services/UserService';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

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

    return (
        <Card className="container" sx={{ marginTop: "20px", backgroundColor: "#f4fbfe", borderRadius: "19px" }}>
            <section class="sectionCardDragDrop">
                <div > Firmantes</div>
            </section>
            <Box
                component="form"
                sx={{
                    width: 500,
                    maxWidth: '100%',
                }}
                noValidate
                autoComplete="off"
            >

                <TextField
                    fullWidth label="email" id="fullWidth"
                    variant="filled"
                    size="small"
                />

            </Box>
            <Card>
                <div>
                    Firmantes a notificar
                </div>
                <div>
                    Los siguientes contactos serán notificados para firmar el presente documento
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th> Usuario Email</th>
                        </tr>

                    </thead>
                    {/* <tbody>
                    {
                        user.map(
                            user =>
                                <tr key={user.id}>
                                    <td> {user.email}</td>

                                </tr>

                        )
                    }

                </tbody> */}


                </table>
                <Button sx={{
                    marginTop: "20px", backgroundColor: "#48c1f4",
                    color: "white", borderRadius: "19px"
                }}>Enviar</Button>

            </Card>



        </Card>
    )
}
