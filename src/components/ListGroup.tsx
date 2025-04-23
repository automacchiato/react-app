function ListGroup() {
  let items = ["Kuching", "Miri", "Bintulu", "Samarahan", "Serian"];
  items = [];

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>Item not found </p>}
      <ul className="list-group">
        {items.map((items) => (
          <li>{items}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
