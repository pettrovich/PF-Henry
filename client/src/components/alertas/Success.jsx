import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getOrder } from '../../redux/actions/createOrderA';
import { useDispatch } from 'react-redux';
import { limpiarCarrito } from '../../redux/actions/carritoA';
import { useAuth0 } from "@auth0/auth0-react";

export default function Success() {
    const users = useSelector((state) => state.DashboardUsersR.allUsers);
    const { user } = useAuth0();

    let findedUser = users?.find(e => e?.email === user?.email);

    const queryParams = new URLSearchParams(window.location.search);
    const orderId = queryParams.get("merchant_order_id");


    const dispatch = useDispatch();

    useEffect(() => {
        if (orderId?.length > 1) dispatch(getOrder(orderId, findedUser?.id));
        dispatch(limpiarCarrito());
        setTimeout(() => {
            window.location.href = 'http://localhost:3000/';
        }, 1500);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            <h1>Pago exitoso</h1>
            <h3>Ahora será redirigido al inicio</h3>
        </div>
    )
}
