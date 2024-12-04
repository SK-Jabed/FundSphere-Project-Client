import React from 'react';

const AddCampaign = () => {
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
          <form className="card-body">
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
                  placeholder="The name of the campaign creator"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">User Email</span>
                </label>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="The email of the campaign creator"
                  className="input input-bordered"
                  required
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