const AddToy = () => {
  const handleToySubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className="my-20 container mx-auto p-2">
      <form onSubmit={handleToySubmit}>
        <h1 className="text-center text-4xl my-5 border-b-2 pb-2 font-bold">
          Add New Toy
        </h1>
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="mb-2">
            <label>Enter Toy Name</label>
            <input
              type="text"
              className="input input-bordered w-full mt-2"
              name="title"
            />
          </div>
          <div className="mb-2">
            <label>Enter Toy Price</label>
            <input type="text" className="input input-bordered w-full mt-2" />
          </div>
          <div className="mb-2">
            <label>Enter Toy Ratings</label>
            <input
              type="text"
              defaultValue="3.5"
              className="input input-bordered w-full mt-2"
            />
          </div>
          <div className="mb-2">
            <label>Enter Toy Img Link</label>
            <input type="text" className="input input-bordered w-full mt-2" />
          </div>
          <div className="mb-2">
            <label>Enter Toy Category</label>
            <select className="select select-bordered w-full mt-2">
              <option disabled>Select A Toy Category</option>
              <option value="20">Avengers Toy</option>
              <option value="15">Titans Toy</option>
              <option value="10">Justice League Toy</option>
            </select>
          </div>
          <div className="mb-2">
            <label>Enter Toy Details</label>
            <textarea
              name=""
              className="textarea textarea-bordered w-full mt-2"
            ></textarea>
          </div>
        </div>
        <div className="w-full text-center mt-4">
          <button
            className="btn btn-primary btn-outline border-2 w-full lg:w-1/2 font-semibold"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddToy
