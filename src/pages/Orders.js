import React from 'react'
import { Typography, Button, Link,Select ,MenuItem , Box, Alert, CircularProgress, Grid, Card, List, ListItem, TableCell, TableRow, TableBody, TableContainer, Table, TableHead } from '@mui/material';  
import Layout from '../components/Layout';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAnOrder } from '../features/auth/authSlice';
import { useState } from 'react';

const Orders = () => {

    const {id} = useParams();

    const dispatch = useDispatch();

    const {currentOrder, isLoading} = useSelector((state) => state?.auth);

    useEffect(() => {
        dispatch(getAnOrder(id))
    }, [id]);

    const [totalAmount, setTotalAmount] = useState(0);

    let total = 0;
    useEffect(() => {
        for (let i = 0; i < currentOrder?.orderItems?.length; i++) {
        total += currentOrder?.orderItems[i]['price'] * currentOrder?.orderItems[i]['quantity'];
        
        }
        setTotalAmount(total)
    }, [])
    
     console.log(currentOrder, 'rrrrrrrrr');

     if (isLoading) {
        return <div className='w-[100%] h-[50vh] flex items-center justify-center'>
            <CircularProgress />
        </div>
    }
  return (
      <div>
      {/* {loading ? (<CircularProgress />) : error ? (<Alert varient="danger" />) : 
        
      } */}


    <Grid container spacing={1} sx={{padding: '1rem'}}>
    <Grid item md={9} xs={12} >
        <Card >
        <List>
            <ListItem>
                <Typography component='h4' variant='h4' >Shipping Address</Typography>
            </ListItem>
            <ListItem>
                {currentOrder?.shippingInfo?.address }
            </ListItem>
            <ListItem>
                {/* Status :  {' '} {
                    isDelivered ? `deliverd at ${deliveredAt}` : `not Delivered`
                } */}
            </ListItem>
        </List>
        </Card>
        <Card >
            <List>
                <ListItem>
                    <Typography component='h4' variant='h4' >Payment Method</Typography>
                </ListItem>
                <ListItem>
                    {'Stripe'}
                </ListItem>
                <ListItem>
                    Status :  {currentOrder?.orderStatus}
                </ListItem>
            </List>
        </Card>
        <Card>
        <List>
            <ListItem>
                <Typography component='h4' variant='h4' >Order Items</Typography>
            </ListItem>
            <ListItem>
            



        <TableContainer>
            <Table sx={{ minWidth: 650 }} aria-label="simple table" >
            <TableHead>
                <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Quantity</TableCell>
                <TableCell>Price</TableCell>
                </TableRow>
            </TableHead>



            <TableBody>
                





            {currentOrder?.orderItems?.map((item) => (
                <TableRow
                key={item?.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                {/* <TableCell component="th" scope="row">
                    {row._key}
                </TableCell> */}
                <TableCell ><Link href={`/product/${item?.product?._id}`} passHref><Link variant='contained'><img className='w-[4rem] h-[4rem]' src={item?.product?.images[0]?.url || '/images/headphone.jpg'} /></Link></Link></TableCell> 
                <TableCell><Link href={`/product/${item?.product?._id}`} passHref><Link><Typography>{item?.product?.title} </Typography></Link></Link></TableCell>
                <TableCell>
                    {item?.quantity}
                </TableCell>
                <TableCell><Typography>$ {item?.price}</Typography></TableCell>
                </TableRow>
            ))}




            </TableBody>
            </Table>
            </TableContainer>
            </ListItem>
        
        </List>
    </Card>
    </Grid>
    <Grid item md={3} xs={12}>
    <Card>
    <List>
        <ListItem>
            <Typography variant='h4' >Order Summary</Typography>
        </ListItem>
        <ListItem>
            <Grid container>
                <Grid item xs={6}>
                    <Typography>
                        Items:
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography align='right' >${totalAmount}</Typography>
                </Grid>
            </Grid>
        </ListItem>
        <ListItem>
            <Grid container>
                <Grid item xs={6}>
                    <Typography>
                        Shipping:
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography align='right' >$ 5</Typography>
                </Grid>
            </Grid>
        </ListItem>
        <ListItem>
            <Grid container>
                <Grid item xs={6}>
                    <Typography>
                        Tax:
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography align='right' >${'15'}</Typography>
                </Grid>
            </Grid>
        </ListItem>
        <ListItem>
            <Grid container>
                <Grid item xs={6}>
                    <Typography>
                        Total:
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography align='right' >${totalAmount + 5 + 15}</Typography>
                </Grid>
            </Grid>
        </ListItem>
        {/* <ListItem>
            {order?.isPaid ? 'Paid Successfully' : 
            clicked ? <Box sx={{border: '1px solid #ffffff',}}>Paid Successfully</Box>: 
            <Button onClick={() => {'setPayment()';}} variant='contained'>
                Pay Now
            </Button>}
        </ListItem> */}
    </List>                 
    </Card> 
    </Grid>                     
    </Grid>
    </div>
    )
    }

    export default Orders










// item?.product?.images[0]['url']


    