import React, { useState } from "react";

const AddServiceForm = () => {
  
  const [services, setServices] = useState({});
  const [image, setImage] = useState(null);
  console.log(services, image);

  const handleBlur = (e) => {
    const newService = { ...services };
    newService[e.target.name] = e.target.value;
    setServices(newService);
  };

  const handleImage = (e) => {
    const newImage = e.target.files[0];
    setImage(newImage);
  };

   const handleSubmit = (e) => {
     e.preventDefault();
     const formData = new FormData();
     formData.append("image", image);
     formData.append("name", services.name);
     formData.append("price", services.price);

     fetch("https://cleanerservice12.herokuapp.com/addService", {
       method: "POST",
       body: formData,
     })
       .then((res) => res.json())
       .then((data) => {
         if (data) {
           console.log(data);
           alert("Service added successfully");
           e.target.reset();
         }
       })
       .catch((err) => {
         console.log(err);
       });
   };

  return (
    <div>
      <div className="col-md-6 mx-auto">
        <h1 className="text-center">Add Service </h1>

        <form onSubmit={handleSubmit}>
          <input
            onBlur={handleBlur}
            className="form-control "
            name="name"
            placeholder="Product Name"
          />
          <br />
          <input
            onBlur={handleBlur}
            className="form-control"
            name="price"
            placeholder="Price"
          />{" "}
          <br />
          <input
            onChange={handleImage}
            name="exampleRequired"
            className="form-control"
            type="file"
          />
          <br />
          <input type="submit" value="Add Product" />
        </form>
      </div>
    </div>
  );
};

export default AddServiceForm;
