import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';

const OrderListTable = ({ orders }) => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [admin, setIsAdmin] = useState(false);
      useEffect(() => {
        fetch("https://cleanerservice12.herokuapp.com/isAdmin", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email: signedInUser.email }),
        })
          .then((res) => res.json())
          .then((data) => setIsAdmin(data));
      }, []);
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Service</th>
          <th scope="col">Status</th>
          {/* <th scope="col">Action</th> */}
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr>
            <th scope="row">{index + 1}</th>
            <td>{order.data.name}</td>
            <td>{order.data.email}</td>
            <td>{order.data.service}</td>
            {/* <td>{order._id}</td> */}
            {admin ? (
              <td>
                {/* <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Change Status
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => handleUpdateStatus(order._id, "Done")}
                    >
                      Done
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleUpdateStatus(order._id, "Pending")}
                    >
                      Pending
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => handleUpdateStatus(order._id, "Ongoing")}
                    >
                      Ongoing
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
              </td>
            ) : (
              <td>{order.data.status}</td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderListTable;