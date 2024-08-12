import React from 'react';
import { Item } from "./Interface";

// Define an interface for the props
interface ItemListProps {
    items: Item[];
    title: string;
    handleDelete: (id: number) => void;
}

// Utility function to group items by date
const groupByDate = (items: Item[]) => {
    return items.reduce((groups, item) => {
        const date = item.date;
        if (!groups[date]) {
            groups[date] = [];
        }
        groups[date].push(item);
        return groups;
    }, {} as Record<string, Item[]>);
};

// Define the ItemList component with typed props
const ItemList: React.FC<ItemListProps> = ({ items, title, handleDelete }) => {
    // Sort items by date
    const sortedItems = [...items].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    // Group items by date
    const groupedItems = groupByDate(sortedItems);

    // Calculate subtotals and total
    const dateEntries = Object.entries(groupedItems);
    const totals = dateEntries.map(([date, itemsForDate]) => ({
        date,
        subtotal: itemsForDate.reduce((sum, item) => sum + item.price, 0)
    }));

    const grandTotal = totals.reduce((sum, { subtotal }) => sum + subtotal, 0);

    return (
        <div className="item-list">
            <h2>{title}</h2>
            {totals.map(({ date, subtotal }) => (
                <div key={date} className="date-group">
                    <h3>{date}</h3>
                    {groupedItems[date].map(item => (
                        <div className="item-preview" key={item.id}>
                            <div className="item-info">
                                <h2>{item.item}</h2>
                                <p>{item.shop}</p>
                            </div>
                            <div className="price-container">
                                <div className="price">€{item.price.toFixed(2)}</div>
                                <button className="btn-delete-item" onClick={() => handleDelete(item.id)}>Delete</button>
                            </div>
                        </div>
                    ))}
                    <div className="subtotal">
                        <strong>Subtotal:</strong> €{subtotal.toFixed(2)}
                    </div>
                </div>
            ))}
            <div className="total">
                <h3>Total:</h3>
                <div className="total-amount">€{grandTotal.toFixed(2)}</div>
            </div>
        </div>
    );
};

export default ItemList;
