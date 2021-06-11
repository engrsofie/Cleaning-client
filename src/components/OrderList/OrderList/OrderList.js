import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import SideBar from '../../SideBar/SideBar';
import OrderListTable from '../OrderListTable/OrderListTable';

const OrderList = () => {
     const [signedInUser, setSignedInUser] = useContext(UserContext);
     const [orders, setOrders] = useState([]);
    console.log(orders);
        useEffect(() => {
          fetch("https://cleanerservice12.herokuapp.com/orderList", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ email: signedInUser.email }),
          })
            .then((res) => res.json())
            .then((data) => setOrders(data));
        }, []);

    return (
      <div className="row">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
        <div className="col-md-9">
          <OrderListTable orders={orders}></OrderListTable>
        </div>
      </div>
    );
};

export default OrderList;