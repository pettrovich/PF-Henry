import React from "react";
import { useEffect, Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { adminProducts } from "../../../../redux/actions/adminProductsA";
import CardAdminProducts from '../../../dashboard/CardAdminProducts';
import { Link } from "react-router-dom";
// import UpdateProduct from './UpdateProduct';
import { useAuth0 } from "@auth0/auth0-react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import  Loading  from '../../../loading/Loading';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import Error404NotAdmin from "../../../error404/Error404NotAdmin"



   //////FILTROS\\\\\\\

   import Grid from '@mui/material/Grid';
   import Typography from '@mui/material/Typography';
   import Box from '@mui/material/Box';

   import Ordenar from '../../../products/Ordenar';
   // import ProductsCard from '../../../products/ProductsCard';
   import Precio from '../../../products/Precio';
   import Marcas from '../../../products/Marcas';
   import Categorias from '../../../products/Categorias';
   import Envio from '../../../products/Envio';
   
   import { getAllProducts, getByCategory, byEnvios, getbrand, rangoByPrice, order } from "../../../../redux/actions/productsA"
   
   const Item = styled(Paper)(({ theme }) => ({
     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
     ...theme.typography.body2,
     padding: theme.spacing(1),
     textAlign: 'center',
     color: theme.palette.text.secondary,
     borderRadius: 0,
   }));
   
   const Img = styled('img')({
     margin: 'auto',
     display: 'block',
     maxWidth: '100%',
     maxHeight: '100%',
   });
   
   const ColorButton = styled(Button)(({ theme }) => ({
     color: theme.palette.getContrastText('#FFC400'),
     backgroundColor: '#FFC400',
     '&:hover': {
         backgroundColor: '#FFC400',
     },
   }));

 //////FILTROS\\\\\\\







const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
     
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
export default function AdminProd() {

    const dispatch = useDispatch();
    const product = useSelector((state) => state.adminProductsR.products);

    useEffect(() => {
        dispatch(adminProducts())
    }, [dispatch]);

    const { user, isAuthenticated } = useAuth0();
    const users = useSelector((state) => state.DashboardUsersR.allUsers);
    let findedUser;
    if (isAuthenticated) {
        findedUser = users.find(e => e.email === user.email)
    }


    //////FILTROS\\\\\\\

    const [state, setState] = useState({
      categoria: '',
      envio: '',
      marcas: '',
      minimo: 0,
      maximo: 0,
      orden: '',

  });

  const [copystate, setCopyState] = useState({
      categoria: '',
  });

  useEffect(() => {
      dispatch(getAllProducts());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
      if (state.categoria?.length > 2 && state.categoria !== copystate.categoria) { setCopyState({ ...copystate, categoria: state.categoria }); dispatch(getByCategory(state.categoria)); }
      if (state.marcas?.length > 2) dispatch(getbrand(state.marcas));
      if (state.minimo > 0) dispatch(rangoByPrice(state.minimo, state.maximo));
      if (state.envio?.length > 2) {
          setTimeout(() => {
              dispatch(byEnvios(state.envio));
          }, 500);
      }
      if (state.orden?.length > 2) {
          setTimeout(() => {
              dispatch(order(state.orden));
          }, 100);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const products = useSelector((state) => state.products.products);
  const productsCopy = useSelector((state) => state.products.productsCopy);
  const cantProducts = useSelector((state) => state.products.totalProducts);
  const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
      setCurrentPage(1);
  }, [products]);


function cleanFilters() {
  setState({ categoria: 'null', envio: null, marcas: '', minimo: 0, maximo: 0, orden: '' })
  dispatch(getAllProducts());
}

 //////FILTROS\\\\\\\

    return (
        <div>
        
        {
    (isAuthenticated && findedUser?.isAdmin)?
    <div>

{/* //////////Filtros\\\\\\\\\\\\ */}
    <Box sx={{ width: 1, marginTop: 3 }}>
    <Grid container direction='column'>

    <Grid item md={3} lg={2.3} xl={2}>
        <Categorias setState={setState} state={state} total={cantProducts} />
        <Item sx={{ marginTop: 3, display: 'flex', flexDirection: 'column' }} elevation={1}>
            <Typography variant='overline'>Envío</Typography>
            <div>
                <Envio setState={setState} state={state} />
            </div>
        </Item>
        <Item sx={{ marginTop: 3, display: 'flex', flexDirection: 'column' }} elevation={1}>
            <Typography variant='overline'>Marcas</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Marcas productsCopy={productsCopy} setState={setState} state={state} />
            </div>
        </Item>
        <Item sx={{ marginTop: 3, display: 'flex', flexDirection: 'column' }} elevation={1}>
            <Typography variant='overline'>Precio</Typography>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Precio setState={setState} state={state} />
            </div>
        </Item>
        <Item sx={{ marginTop: 2, textAlign: 'right', borderBottom: '1px solid', borderColor: '#022335' }} elevation={1} >
            <Ordenar setState={setState} state={state} />
        </Item>
        <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column' }} elevation={1}>
            <ColorButton onClick={() => cleanFilters()} variant='contained' disableElevation size='medium'>
                Reiniciar filtros
            </ColorButton>
        </div>

    </Grid>
    </Grid>
    </Box >

{/* //////////Filtros\\\\\\\\\\\\ */}


    <TableContainer component={Paper} sx={{ mt: 2,}}>
      <Table sx={{ minWidth: 700, bgcolor: "#e5e5e5", color: "#3a0ca3" }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Id</StyledTableCell>
            <StyledTableCell align="right">Nombre</StyledTableCell>
            <StyledTableCell align="right">Precio</StyledTableCell>
            <StyledTableCell align="right">Stock</StyledTableCell>
            <StyledTableCell align="right">Descuento</StyledTableCell>
            <StyledTableCell align="right">Cantidad Vendida</StyledTableCell>
            <StyledTableCell align="right">Categoria</StyledTableCell>
            <StyledTableCell align="right">Envio Gratis</StyledTableCell>
            <StyledTableCell align="right">Marca</StyledTableCell>
            <StyledTableCell align="right">Descripción</StyledTableCell>
            <StyledTableCell align="right">Activado/Desactivado</StyledTableCell>
            <StyledTableCell align="right">Modificar Producto</StyledTableCell>            
          </TableRow>
        </TableHead>
        <TableBody>
        {product[0]? product.map((p , index) => 
            <StyledTableRow key={index}>
                <StyledTableCell align="right">{p.id}</StyledTableCell>
                <StyledTableCell align="right">{p.name}</StyledTableCell>
                <StyledTableCell align="right">{p.price}</StyledTableCell>
                <StyledTableCell align="right">{p.stock}</StyledTableCell>
                <StyledTableCell align="right">{p.discount}</StyledTableCell>
                <StyledTableCell align="right">{p.amountSold}</StyledTableCell>
                <StyledTableCell align="right">{p.categories}</StyledTableCell>
                <StyledTableCell align="right">{p.freeShipping? 'Si' : 'No'}</StyledTableCell>
                <StyledTableCell align="right">{p.brand}</StyledTableCell>
                <StyledTableCell align="right">{p.description}</StyledTableCell>
                <StyledTableCell align="right">{p.disabled? 'Desactivado' : 'Activado'}</StyledTableCell>
                <StyledTableCell align="right"><Link to = {"/up/" + p.id}> <Button sx={{ width: '20ch', color: '#022335', bgcolor:'#dee2e6', borderColor:'#022335',  borderRadius: "5px"}}   variant="outlined" startIcon={<KeyboardReturnIcon fontSize = "large"/>}>
                Modificar Producto
                </Button> </Link>
                </StyledTableCell>               
                </StyledTableRow>
          ) : <Loading/>
        }
        </TableBody>
      </Table>
;
      <Stack direction="row" spacing={2} >
      <Link to= "/dashboard" ><Button sx={{ m: 1, width: '20ch', color: '#022335', bgcolor:'#dee2e6', borderColor:'#022335',  borderRadius: "5px"}}   variant="outlined" startIcon={<KeyboardReturnIcon fontSize = "large"/>}>
        volver
      </Button></Link> 

      </Stack>
    </TableContainer>
    </div> : <Error404NotAdmin/>
}      
        
{/*             <div>
                {product[0]? product.map(e => {

                    return (
                        <Fragment >
                            <CardAdminProducts
                                id={e.id}
                                key={e.id}
                                name={e.name}
                                price={e.price}
                                stock={e.stock}
                                discount={e.discount}
                                amountSold={e.amountSold}
                                categories={e.categories}
                                freeShipping={e.freeShipping}
                                brand={e.brand}
                                description={e.description}
                                disabled={e.disabled}

                            />
                             <UpdateProduct /> 
                            <Link to={"/up/" + p.id}>Modificar producto</Link>

                        </Fragment>
                    )
                }): <p>No hay productos disponibles</p>}
            </div> */}
            </div>
    )
}

