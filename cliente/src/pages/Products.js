import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CardProduct from '../components/CardProduct';
import Paginacion from '../components/Paginacion';
import { getPageProducts } from '../services/productService';

const Products = () => {
    let {pag} = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        if(pag)
            getPageProducts(pag).then(({ data }) => { setProducts(data) })
        else
            pag=1;
    }, [pag]);
    return (
        <div className='d-flex justify-content-center flex-column align-items-center'>
            <h1 className='display-4'>Nuestros Productos</h1>
            <div className='d-flex justify-content-around flex-wrap w-100'>
                {products.map(prod=>
                    <CardProduct prod = {prod}></CardProduct>
                    )}
            </div>
            <Paginacion></Paginacion>
        </div>
    );
}

export default Products;
