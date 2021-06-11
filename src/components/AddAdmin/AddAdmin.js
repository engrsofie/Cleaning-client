import React from 'react';
import { useState } from 'react';
import SideBar from '../SideBar/SideBar';

const AddAdmin = () => {
    const [admin,setAdmin] = useState({});
    // console.log(admin)

    const handleBlur = (e)=> {
        const newAdmin = {...admin};
        newAdmin[e.target.name] = e.target.value;
        setAdmin(newAdmin);
    }

    const handleSubmit = (e)=> {
        e.preventDefault();
        const adminData = {...admin};
        fetch("https://cleanerservice12.herokuapp.com/addAdmin", {
          method: "POST",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify(adminData),
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data)
        })
    }

    return (
      <div className="row">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
        <div className="col-md-9">
          <div className="col-md-6 mx-auto">
            <h2>Add Admin</h2>
            <form onSubmit={handleSubmit}>
              <input
                onBlur={handleBlur}
                className="form-control mb-3"
                type="text"
                name="admin"
                id=""
              />
              <input type="submit" value="Add admin" />
            </form>
          </div>
        </div>
      </div>
    );
};

export default AddAdmin;