import React from 'react';
import SideBar from '../../SideBar/SideBar';
import AddTestimonialForm from '../AddTestimonialForm/AddTestimonialForm';

const AddTestimonial = () => {
    return (
      <div className="row">
        <div className="col-md-3">
          <SideBar></SideBar>
        </div>
        <div className="col-md-9">
            <AddTestimonialForm></AddTestimonialForm>
        </div>
      </div>
    );
};

export default AddTestimonial;