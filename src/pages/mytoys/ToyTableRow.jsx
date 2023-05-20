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
        <button className="btn btn-warning" onClick={() => upToy(_id)}>
          Edit
        </button>
        <button className="btn btn-error" onClick={() => delToy(_id)}>
          Del
        </button>
      </td>
    </tr>
  )
}

export default ToyTableRow
