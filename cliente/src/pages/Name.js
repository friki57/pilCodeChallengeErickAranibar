import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import CardProduct from '../components/CardProduct';
import { getByNameProducts } from '../services/productService';

const useQuery = () => new URLSearchParams(useLocation().search);

const NameProducts = () => {
    //const [newName, setNewName] = useState("");
    const newName = useRef("");
    const [products, setProducts] = useState([]);
    let name = useQuery().get('name');
    useEffect(() => {
    if (name.length>2)
            getByNameProducts(name).then(({ data }) => { setProducts(data) });
    }, [name]);
    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1 className='display-4'>Busca un producto por su nombre</h1>
            <div className="input-group">
                <div className="form-outline">
                    <input type="search" ref={newName} id="form1" className="form-control" />
                </div>
                <Link className={'btn btn-primary '} to={"/name?name=" + newName.current.value }>Buscar</Link>
            </div>
            
            <div className='d-flex justify-content-around flex-wrap w-100'>
                {products.map(prod =>
                    <CardProduct prod={prod}></CardProduct>
                )}
            </div>
        </div>
    );
}

export default NameProducts;
