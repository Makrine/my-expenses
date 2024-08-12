import ItemList from "./ItemList";
import useFetch from "./useFetch";
import { Item } from "./Interface";



const Home = () => {
    const { data: products, isPending, error } = useFetch<Item[]>('http://localhost:8000/items');  

    // create handleDelete function
    const handleDelete = (id: number | undefined) => {
        console.log('delete item with id', id);
    }

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {products && <ItemList items={products} title="Expenses" handleDelete={handleDelete}/>}
        </div>
    );
}

export default Home;
