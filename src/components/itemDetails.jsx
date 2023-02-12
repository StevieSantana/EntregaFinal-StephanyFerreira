import { Button, Card } from "react-bootstrap";
import { Link,  } from "react-router-dom";
import { products } from "./products";


const ItemDetails = ({ product }) => {
    
  return (
    <div  >
      <Card style={{ width: "18rem", backgroundColor: "#090909", borderColor:"pink", display: "flex", marginBottom:"2.5rem", marginTop: "2.5rem", marginLeft:"2.5rem", marginRight:"2.5re"}}>
        <Card.Img variant="top" src={product.img} />
        <Card.Body>
          {/* <Card.Title>{product.product}</Card.Title> */}
          <Card.Text>
          <h4>{product.autor}</h4>
          <h4>{product.year}</h4>
          <h4>{product.category}</h4>
          <h5>{product.description}</h5>
          <h4>${product.price}</h4>
          </Card.Text>
          <Link to={`/item/${product.id}`}>
            <Button className="b-detail" variant="primary" style={{ color: "black", backgroundColor:"rgb(200, 63, 86)", textDecorationStyle:"none", display:"flex", justifyContent:"flex-end" }}>Ver detalle</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetails;
