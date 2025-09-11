import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';

function ProductCard({ title, description, totalqr, totalusedqr, imageurl }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageurl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>

        <Card.Text>
          Total QR: <span>{totalqr}</span>{' '}
        </Card.Text>
        <Card.Text>
          Total Used QR:<span>{totalusedqr}</span>
        </Card.Text>
      </Card.Body>

      {/* <Card.Body>
        <Card.Text>Total QR: <span>{totalqr}</span> </Card.Text>
        <Card.Text >Total Used QR:<span>{totalusedqr}</span></Card.Text>
      </Card.Body> */}
    </Card>
  );
}

export default ProductCard;
