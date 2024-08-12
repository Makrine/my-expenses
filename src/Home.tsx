import ItemList from "./ItemList";
import useFetch from "./useFetch";



const Home = () => {
    const { data: products, isPending, error } = useFetch('http://localhost:8000/items');  

    // create handleDelete function
    const handleDelete = (id: number) => {
        
    }

    return (
        <div className="home">
            {isPending && <div>Loading...</div>}
            {products && <ItemList items={products} title="Expenses" handleDelete={handleDelete}/>}
        </div>
    );
}

export default Home;
