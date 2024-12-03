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
                  placeholder="Enter Campaign Title"
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
                  placeholder="Enter Campaign Type"
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
                  type="text"
                  name="amount"
                  placeholder="Enter Minimum Donation Amount"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Deadline</span>
                </label>
                <input
                  type="text"
                  name="deadline"
                  placeholder="Enter Campaign Deadline"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* form third row */}
            <div className="flex flex-col lg:flex-row gap-5">
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="coffee Category"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control flex-1">
                <label className="label">
                  <span className="label-text">Details</span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Coffee Details"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo url"
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