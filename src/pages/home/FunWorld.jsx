import { toast } from 'react-toastify'

const FunWorld = () => {
  return (
    <div className="lg:flex gap-3 my-20 p-5 lg:p-10 bg-white lg:rounded-lg shadow-lg">
      <div className="lg:w-1/2 flex justify-center items-center lg:pr-10 mb-2 lg:mb-0 border-b-2 lg:border-b-0 pb-5 lg:pb-0">
        <h3 className="text-4xl font-semibold leading-relaxed text-gray-600">
          Sometimes you need to visit
          <span className="text-error lg:text-6xl">
            {' '}
            SuperSaver&rsquo;s
          </span>{' '}
          fun world with your{' '}
          <span className="text-error lg:text-5xl">family</span> and
          <span className="text-error lg:text-5xl"> friends</span>. If
          you&rsquo;re already interested to do this then
          <span className="text-info"> register </span>
          and <span className="text-warning lg:text-5xl"> grab</span> your{' '}
          <span className="text-success lg:text-6xl">ticket</span> soon.
        </h3>
      </div>
      <div className="lg:w-1/2">
        <h1 className="text-2xl font-semibold border-b-2 pb-2 mb-4">
          Book Your Ticket Now
        </h1>
        <div className="mb-2">
          <input
            type="text"
            className="input input-bordered focus:outline-none text-lg w-full"
            placeholder="Your Name"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="input input-bordered focus:outline-none text-lg w-full"
            placeholder="Your Phone"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            className="input input-bordered focus:outline-none text-lg w-full"
            placeholder="Coupon, If you have any."
          />
        </div>
        <div className="mb-3">
          <label className="text-lg my-2">When you will come? Set a date</label>
          <input
            type="date"
            className="input input-bordered focus:outline-none text-lg w-full"
          />
        </div>
        <div className="mb-2 ">
          <label className="text-lg mb-3">Select a package in your need.</label>
          <select className="select select-bordered w-full focus:outline-none">
            <option>4 Members Family Pack</option>
            <option>6 Members Family Pack</option>
            <option>8 Members Family Pack</option>
            <option>12 Members Family Pack</option>
            <option>More than 12 Members Family Pack</option>
          </select>
        </div>
        <button
          className="btn btn-error mt-3 font-semibold text-lg"
          onClick={() => toast.info('Service Will Be Available Soon.')}
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  )
}

export default FunWorld
