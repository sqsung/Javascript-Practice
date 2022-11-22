import React from 'react';
import ProductsTable from './ProductsTable.js';

export default function StoreTable(props) {
    const { products, filter } = props;

    const targetProduct = products.filter(p => p.name === filter.text);
    const filteredProducts = targetProduct.length > 0 ? targetProduct : products;

    const result = filteredProducts.reduce((acc, cur) => {
        if (acc.hasOwnProperty(cur.category)) {
            return {
                ...acc,
                [cur.category] : [...acc[cur.category], cur],
            }
        } else {
            return {
                ...acc,
                [cur.category] : [cur],
            }
        }
    }, {});

    const keys = Object.keys(result);

    return (
        <table>
            <thead>
                <tr style={{fontWeight: 'bold'}}>
                    <td>Name</td>
                    <td>Price</td>
                </tr>
            </thead>
            <tbody>
                { keys.map((key, idx) =>
                    <ProductsTable category={key} items={result[key]} key={idx} inStockOnly={filter.inStockOnly} /> )}
            </tbody>
        </table>
    )
}