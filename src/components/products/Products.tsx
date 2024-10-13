import React from 'react';
import {data} from "../../data";

const Products = () => {
    return (
        <div>

            <p>{data.brand}</p>

            <p>{data.tags.map(tag => <li>{tag}</li>)}</p>
        </div>
    );
};

export default Products;