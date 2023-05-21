import { Link } from 'react-router-dom'

const ToyTableRow = ({ toy, serial, delToy, upToy }) => {
  const { _id, title, price, quantity, rating, category } = toy
  return (
    <tr>
      <th>{serial + 1}</th>
      <td>{title}</td>
      <td>{price}$</td>
      <td>{quantity}</td>
      <td>{rating}</td>
      <td>{category}</td>
      <td className="flex gap-1">
        <Link className="btn font-semibold btn-primary" to={'/toy/' + _id}>
          View
        </Link>
        <label
          className="btn font-semibold btn-warning"
          htmlFor="my-modal-3"
          onClick={() => upToy(toy)}
        >
          Edit
        </label>
        <button
          className="btn font-semibold btn-error"
          onClick={() => delToy(_id)}
        >
          Del
        </button>
      </td>
    </tr>
  )
}

export default ToyTableRow
