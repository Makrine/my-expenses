import './Create.css';
import { useState } from 'react';
import { Item } from './Interface';
import { useHistory } from 'react-router-dom';
import { ENDPOINTS } from './config/config';

const Create: React.FC = () => {

    const [itemName, setItemName] = useState<string>('');
    const [shop, setShop] = useState<string>('');
    const [price, setPrice] = useState<number>(0);
    const [date, setDate] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [category, setCategory] = useState<string>('');

    const [isPending, setIsPending] = useState<boolean>(false);
    const history = useHistory();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newItem: Item = {
            item: itemName,
            shop: shop,
            price: price,
            date: date,
            comment: comment,
            category: category
        };

        fetch(ENDPOINTS.ITEMS, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
            
        }).then(() => {
            setIsPending(false);
            history.push('/');
        })
    };

    return ( 
        <div className="create-container">
            <h2 className="create-title">Add a New Item</h2>
            <form className="create-form" onSubmit={handleSubmit}>
                <label className="create-label">Item:</label>
                <input
                    type="text"
                    className="create-input"
                    required
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
                <label className="create-label">Shop:</label>
                <input
                    type="text"
                    className="create-input"
                    required
                    value={shop}
                    onChange={(e) => setShop(e.target.value)}
                />
                <label className="create-label">Price:</label>
                <input
                    type="number"
                    step="0.01"
                    className="create-input"
                    required
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                />
                <label className="create-label">Date:</label>
                <input
                    type="date"
                    className="create-input"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <label className="create-label">Comment:</label>
                <input
                    type="text"
                    className="create-input"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <label className="create-label">Category:</label>
                <select
                    className="create-input"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="Food">Food</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Other">Other</option>
                </select>
                {!isPending &&  <button type="submit" className="create-button">Add Item</button>}
                {isPending &&  <button type="submit" className="create-button" disabled>Adding item...</button>}
            </form>
        </div>
    );
}

export default Create;
