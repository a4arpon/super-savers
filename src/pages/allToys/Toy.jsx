import { Link } from 'react-router-dom'

const Toy = ({ toy, number }) => {
  const { _id, title, price, seller, category, quantity } = toy
  return (
    <tr>
      <th>{number}</th>
      <td>
        {title.substring(0, 60) || 'Not Available'}
        {title.length > 60 && '...'}
      </td>
      <td>{price || 0}$</td>
      <td>{category.toUpperCase() || 'Not Available'}</td>
      <td>{quantity || 'Not Available'}</td>
      <td>{seller || 'Not Available'}</td>
      <td>
        <Link to={'/toy/' + _id} className="btn btn-primary">
          View Details
        </Link>
      </td>
    </tr>
  )
}

export default Toy
