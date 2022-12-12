import { Navbar, NavbarBrand } from 'reactstrap';
import {Card, CardBody, CardTitle, CardSubtitle, CardText, Button} from "reactstrap"

const CardProduct = (props) => {
    return (
        <Card className='m-3'
            style={{
                width: '18rem'
            }}
        >
            <img
                alt="Sample"
                src={props.prod.product_image}
            />
            <CardBody>
                <CardTitle tag="h5">
                    {props.prod.product_name}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    Stock: {props.prod.stock}
                </CardSubtitle>
                <Button>
                    Button
                </Button>
            </CardBody>
        </Card>
    );
}

export default CardProduct;
