import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { Item } from './Interface';
import './ItemDetails.css';

interface Params {
    id: string;
}

const ItemDetail: React.FC = () => {
    const { id } = useParams<Params>();
    const { data: item, isPending, error } = useFetch<Item>(`http://localhost:8000/items/${id}`);

    return ( 
        <div className="item-detail-container">
            <h2>Item Detail {id}</h2>
            {isPending && <div className="loading">Loading...</div>}
            {error && <div className="error">{error}</div>}
            {item && (
                <article>
                    <h2>{item.item}</h2>
                    <p className="price">Price: €{item.price.toFixed(2)}</p>
                    <p>Shop: {item.shop}</p>
                    <p>Date: {item.date}</p>
                    <p>Comment: {item.comment}</p>
                    <p>Category: {item.category}</p>
                </article>
            )}
        </div>
    );
}

export default ItemDetail;
