import { toast } from 'react-toastify'

const Feedback = () => {
  return (
    <div className="bg-white my-20 p-5 lg:p-10 lg:rounded shadow-lg">
      <h1 className="text-3xl text-center font-semibold border-b-2 pb-2">
        Leave A Feedback For Us.
      </h1>
      <div className="lg:flex lg:gap-3 mt-5 mb-3">
        <input
          type="text"
          className="input input-bordered focus:outline-none lg:w-1/2 w-full text-lg mb-3"
          placeholder="Enter Your Name"
        />
        <input
          type="email"
          className="input input-bordered focus:outline-none lg:w-1/2 w-full text-lg"
          placeholder="Enter Your Email"
        />
      </div>
      <input
        type="text"
        className="input input-bordered focus:outline-none w-full text-lg"
        placeholder="Subject"
      />
      <textarea
        className="textarea textarea-bordered focus:outline-none w-full text-lg my-5"
        rows="8"
        placeholder="Feedback....."
      ></textarea>
      <div className="flex justify-end">
        <button
          className="btn btn-primary px-10 text-xl font-semibold gap-2"
          onClick={() => toast.info('Sending ...')}
        >
          Send
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            className="bi bi-send-plus-fill"
            viewBox="0 0 16 16"
          >
            <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 1.59 2.498C8 14 8 13 8 12.5a4.5 4.5 0 0 1 5.026-4.47L15.964.686Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
            <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Feedback
