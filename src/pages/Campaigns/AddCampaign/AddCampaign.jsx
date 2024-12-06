import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../provider/AuthProvider';

const AddCampaign = () => {
    const { user } = useContext(AuthContext);
    
    const handleAddCampaign = (event) => {
      event.preventDefault();

      const form = event.target;

      const title = form.title.value;
      const type = form.type.value;
      const minDonation = form.minDonation.value;
      const donors = form.donors.value;
      const deadline = form.deadline.value;
      const description = form.description.value;
      const userName = form.userName.value;
      const userEmail = form.userEmail.value;
      const image = form.image.value;

      const newCampaign = {
        title,
        type,
        minDonation,
        donors,
        deadline,
        description,
        userName,
        userEmail,
        image,
      };

      // Send New Campaign Data to The Server
      fetch("http://localhost:5000/campaigns", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCampaign),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              title: "Success!",
              text: "Campaign Added Successfully",
              icon: "success",
              confirmButtonText: "Okay",
            });
          };
          form.reset();
        });
    };

    return (
      <div className="lg:w-3/4 mx-auto my-12">
        <div className="card bg-[#F4F3F0] w-full shrink-0 shadow-2xl">
          <div className="flex flex-col mx-auto text-center pt-8">
            <h1 className="text-4xl font-bold">Add New Campaign</h1>
            <p className="w-3/4 mx-auto">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <form onSubmit={handleAddCampaign} className="card-body">
            {/* form first row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Campaign Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="The name of the campaign"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Campaign Type</span>
                </label>
                <input
                  type="text"
                  name="type"
                  placeholder="The type/category of the campaign"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* form second row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Minimum Donation Amount</span>
                </label>
                <input
                  type="number"
                  name="minDonation"
                  placeholder="Minimum donation amount required"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Donors</span>
                </label>
                <input
                  type="number"
                  name="donors"
                  placeholder="The number of people who have donated"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* form third row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="date"
                  name="deadline"
                  placeholder="Campaign deadline in MM-DD-YYYY format"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Detailed information about the campaign"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* form forth row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input
                  type="text"
                  name="userName"
                  value={user.displayName}
                  placeholder="The name of the campaign creator"
                  className="input input-bordered"
                  required
                  readOnly
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  value={user.email}
                  placeholder="The email of the campaign creator"
                  className="input input-bordered"
                  required
                  readOnly
                />
              </div>
            </div>
            {/* Photo URL Row */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="URL of the campaign image"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-neutral">Add Campaign</button>
            </div>
          </form>
        </div>
      </div>
    );
};

export default AddCampaign;