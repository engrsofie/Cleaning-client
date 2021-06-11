import React from 'react';
import SideBar from '../SideBar/SideBar';
import AddServiceForm from '../AddServiceForm/AddServiceForm';

const AddService = () => {
    return (
        <div className=" row">
            <div className="col-md-3">
                <SideBar></SideBar>
            </div>
            <div className="col-md-9">
                <AddServiceForm></AddServiceForm>
            </div>
        </div>
    );
};

export default AddService;