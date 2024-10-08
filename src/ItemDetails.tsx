import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { Item } from './Interface';
import './ItemDetails.css';
import { useHistory } from 'react-router-dom';
import { ENDPOINTS } from './config/config';

interface Params {
    id: string;
}

const ItemDetail: React.FC = () => {
    const { id } = useParams<Params>();
    const { data: item, isPending, error } = useFetch<Item>(ENDPOINTS.ITEMS + '/' +id);
    const history = useHistory();

    const handleDelete = () => {
        fetch(ENDPOINTS.ITEMS + '/' + id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        });
    }


    return ( 
        <div className="item-detail-container">
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
                    <button className="btn-delete-item" onClick={handleDelete}>Delete</button>
                </article>
            )}
        </div>
    );
}

export default ItemDetail;
