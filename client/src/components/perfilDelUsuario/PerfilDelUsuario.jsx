import * as React from 'react';
import {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userOrderA } from '../../redux/actions/userOrderA';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalMallIcon from '@mui/icons-material/LocalMall';

import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import Divider from '@mui/material/Divider';

import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import Logout from '../logout/Logout'

import style from './assets/PerfilDelUsuario.module.css'
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Stack from '@mui/material/Stack';








export default function PerfilDelUsuario(){
    const {user, isAuthenticated, isLoading} = useAuth0()
    const allUser = useSelector ((state) => state.DashboardUsersR.allUsers); 
      
    const usuario = user && allUser.find  (u =>u.email === user.email) 

    const [open, setOpen] = React.useState(true);
    const [openA, setOpenA] = React.useState(true);
    const [openB, setOpenB] = React.useState(true);

    const handleClick = () => {
    setOpen(!open);
    };

    const handleClickA = () => {
        setOpenA (!openA);
        };

    const handleClickB = () => {
        setOpenB (!openB);
        };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userOrderA(usuario.id))
    }, [])



    const order  = useSelector ((state) => state.userOrderR.userOrder); 


    if(isLoading){
        return <p> Loading... </p>
    }
        return (

            isAuthenticated && (
                <Grid container justify = "center"  sx={{width: '6200ch', my: "5%", mx: "35%", maxWidth: "100%" }}>     
        <List 
        
            sx={{   maxWidth: "100%", bgcolor: 'gray ', borderRadius: "10px", color: "#FFC400 " , width: '100vh'}}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
            <ListSubheader  sx={{mb: 5, width: '100%', maxWidth:  "100%", bgcolor: 'gray ', borderRadius: "10px", color: "#FFC400 " }} component="div" id="nested-list-subheader">
                <div >
                <ListItem >
                    <ListItemAvatar  >
                        <Avatar 
                         alt="Remy Sharp"
                         src="/static/images/avatar/1.jpg"
                         sx={{ width: 60, height: 60}}
                        >
                        {usuario.picture? <img src={usuario.picture} className= {style.foto} alt= ""/>: <img className= {style.foto} src={user.picture} alt= ""/> } 
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText    primary= {<p >Bienvenido {usuario.name}!!</p>} secondary= {usuario.isAdmin === true? <p className= {style.subTitulo}> Perfil del Administrador:  {usuario.username} </p> : ""} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
               

                </div>
            </ListSubheader>
            }
        >

            {/* <br/> */}
            <ListItemButton onClick={handleClick}>
            <ListItemIcon>
                <AccountCircleIcon  className= {style.subTitulo} fontSize = "large"/>
            </ListItemIcon>
            <ListItemText primary="Mis datos" />
            
            {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <div>
                   <div>
                       {usuario.username !== null? <p className= {style.subTitulo}>Usuario: {usuario.username}</p> 
                        : <p className= {style.subTitulo}>Complete su usuario</p>}
                    </div>  
                    <div>
                       {usuario.email !== null? <p className= {style.subTitulo}>Email: {usuario.email}</p> 
                        : <p className= {style.subTitulo}>Complete su email</p>}
                    </div> 
                    <div>
                        {usuario.dni !== null? <p className= {style.subTitulo}>DNI: {usuario.dni}</p> 
                        : <p className= {style.subTitulo}>Complete su DNI</p>}
                    </div>
                    <div>
                        {usuario.celphone !== null? <p className= {style.subTitulo}>Telefono: {usuario.celphone}</p> 
                        : <p className= {style.subTitulo}>Complete su Telefono</p>}
                    </div>

                    <div>
            
                        <Stack direction="row" spacing={2} fontSize = "small">

                        <Button className= {style.modificar} variant="outlined" startIcon={<EditIcon fontSize = "large"/>}>
                            <Link className= {style.modificar} to = {"/loginData/" + usuario.id}> Modificar datos </Link>
                        </Button>

                        </Stack>
                    </div>



                    {/* <Link to = {"/loginData/" + usuario.id}> <button >Modificar datos</button> </Link> */}
                </div>

                       
                </ListItemIcon>
                <ListItemText primary="" />
                </ListItemButton>
            </List>
            </Collapse>





            <ListItemButton onClick={handleClickA}>
            <ListItemIcon>
                <LocationOnIcon  className= {style.subTitulo} fontSize = "large"/>
            </ListItemIcon>
            <ListItemText primary="Dirección" />
            {openA ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openA} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <div>
                    <div>
                       {usuario.email !== null? <p className= {style.subTitulo}>Email: {usuario.email}</p> 
                        : <p className= {style.subTitulo}>Complete su Email</p>}
                    </div>  
                    <div>
                        {usuario.dni !== null? <p className= {style.subTitulo}>DNI: {usuario.dni}</p> 
                        : <p className= {style.subTitulo}>Complete su DNI</p>}
                    </div>
                    <div>
                        {usuario.celphone !== null? <p className= {style.subTitulo}>Telefono: {usuario.celphone}</p> 
                        : <p className= {style.subTitulo}>Complete su Telefono</p>}
                    </div>
                    <div>
            
                        <Stack direction="row" spacing={2} fontSize = "small">

                        <Button className= {style.modificar} variant="outlined" startIcon={<EditIcon fontSize = "large"/>}>
                            <Link className= {style.modificar} to = {"/loginAddress/" + usuario.id}> Modificar datos </Link>
                        </Button>

                        </Stack>
                    </div>
                   
                </div>
       
                </ListItemIcon>
                <ListItemText primary="" />
                </ListItemButton>
            </List>
            </Collapse>

            <ListItemButton onClick={handleClickB}>
            <ListItemIcon>
                <LocalMallIcon  className= {style.subTitulo} fontSize = "large"/>
            </ListItemIcon>
            <ListItemText primary="Mis compras" />
            {openB ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openB} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                <div>
                    {order[0]? order.map (o => 
                        <div>
                            <p>{o.payment_status}</p>
                            <p>{o.merchant_order_id}</p>
                            <Stack direction="row" spacing={2} fontSize = "small">
                            <Button className= {style.modificar} variant="outlined" startIcon={<EditIcon fontSize = "large"/>}>
                            <Link className= {style.modificar} to = {"/orderDetail/" + o.merchant_order_id}> Ver detalles </Link>
                            </Button>

                            </Stack>

                        </div>
                        
                        
                     ) : <p className= {style.subTitulo}>Aún no has realizado una compra</p>

                    
                    } 
                    
                </div>
       
                </ListItemIcon>
                <ListItemText primary="" />
                </ListItemButton>
            </List>
            </Collapse>


        </List>
        </Grid>
         )
    );
  }
