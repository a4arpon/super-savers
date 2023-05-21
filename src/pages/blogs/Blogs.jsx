import useTitle from '../../hooks/useTitle'

const Blogs = () => {
  useTitle('Blogs | SuperSaver')
  return (
    <div className="container mx-auto my-20">
      <div className="grid lg:grid-cols-2 gap-3">
        <div className="card w-full bg-base-200 shadow-md">
          <div className="card-body">
            <h2 className="card-title mb-3">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h2>
            <p>
              Access tokens are short life cycle tokens that allow users to
              access protected apis. Refresh tokens are life cycle tokens that
              can be used to get new access tokens without having to
              re-authenticate. We store Access tokens should in browser&rsquo;s
              localStorage, while we store refresh tokens in a secure location,
              such as a database.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-200 shadow-md">
          <div className="card-body">
            <h2 className="card-title mb-3">
              Compare SQL and NoSQL databases?
            </h2>
            <div className="flex flex-col w-full lg:flex-row gap-3">
              <div className="lg:w-1/2">
                <p className="mb-2 border-b-2 border-gray-400 pb-2">
                  SQL databases are relational databases that use structured
                  query language (SQL) to store and retrieve data.
                </p>
                <p className="mb-2 border-b-2 border-gray-400 pb-2">
                  SQL databases are better for applications that require complex
                  queries and transaction management.
                </p>
              </div>
              <div className="lg:w-1/2">
                <p className="mb-2 border-b-2 border-gray-400 pb-2">
                  NoSQL databases are non-relational databases that store data
                  in a variety of formats, including key-value pairs, documents,
                  and graphs.
                </p>
                <p className="mb-2 border-b-2 border-gray-400 pb-2">
                  NoSQL databases are better for applications that require high
                  performance and scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-full bg-base-200 shadow-md">
          <div className="card-body">
            <h2 className="card-title mb-3">
              What is express js? What is Nest JS ?
            </h2>
            <p className="mb-2">
              Express.js is a minimal web application framework for Node.js. It
              is easy to learn and use, and it provides a wide range of features
              for building scalable web applications.
            </p>
            <p>
              Nest.js is a framework built on Express.js that provides a more
              structured approach to building web applications. It is used for
              building complex and scalable web applications.
            </p>
          </div>
        </div>
        <div className="card w-full bg-base-200 shadow-md">
          <div className="card-body">
            <h2 className="card-title mb-3">
              What is MongoDB aggregate and how does it work?
            </h2>
            <p>
              MongoDB aggregation is a way to perform complex queries on data in
              a MongoDB collection. It is a way to process data from a
              collection and return computed results. It works by filter, group,
              and calculate values on the data.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogs
