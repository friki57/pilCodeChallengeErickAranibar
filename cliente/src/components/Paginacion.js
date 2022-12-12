import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { getCantProducts } from '../services/productService';
import { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';

const Paginacion = () => {
    let { pag } = useParams();
    const [cant, setCant] = useState([]);
    useEffect(() => {
        if (pag)
            getCantProducts().then(({ data }) => { setCant(data/20) })
        else
            pag=1
    }, [pag]);
    return (
        <div>
            {
                pag<=1?
                    <div>
                        <Link className={'btn rounded-0 btn-secondary ' } to={"/1"}>{"<<"}</Link>
                        <div className={'btn rounded-0 btn-primary'}>{1}</div>
                        <Link className={'btn rounded-0 btn-secondary ' } to={"/2"}>{2}</Link>
                        <Link className={'btn rounded-0 btn-secondary ' } to={"/3"}>{3}</Link>
                        <Link className={'btn rounded-0 btn-secondary ' } to={"/"+cant}>{">>"}</Link>
                    </div>
                    : pag < cant ?
                        <div>
                            <Link className={'btn rounded-0 btn-secondary '} to={"/1"}>{"<<"}</Link>
                            <Link className={'btn rounded-0 btn-secondary '} to={"/" + (parseInt(pag) - 1)}>{pag - 1}</Link>
                            <div className={'btn rounded-0 btn-primary'}>{pag}</div>
                            <Link className={'btn rounded-0 btn-secondary '} to={"/" + (parseInt(pag) + 1)}>{1 * pag + 1}</Link>
                            <Link className={'btn rounded-0 btn-secondary '} to={"/" + cant}>{">>"}</Link>
                        </div>
                        :
                        <div>
                                <Link className={'btn rounded-0 btn-secondary '} to={"/1"}>{"<<"}</Link>
                                <Link className={'btn rounded-0 btn-secondary '} to={"/" + (parseInt(cant) - 2)}>{cant - 2}</Link>
                                <Link className={'btn rounded-0 btn-secondary '} to={"/" + (parseInt(cant) - 1)}>{1 * cant - 1}</Link>
                                <div className={'btn rounded-0 btn-primary'}>{cant}</div>
                                <Link className={'btn rounded-0 btn-secondary '} to={"/" + cant}>{">>"}</Link>
                        </div>
            }
        </div>
    );
}

export default Paginacion;
