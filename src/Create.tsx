const Create = () => {
    return ( 
        <div className="create">
            <h2>Add a New Item</h2>
            <form>
                <label>Item:</label>
                <input
                    type="text"
                    required
                />
                <label>Shop:</label>
                <input
                    type="text"
                    required
                />
                <label>Price:</label>
                <input
                    type="float"
                    required
                />
                <button>Add Item</button>
            </form>
        </div>
     );
}
 
export default Create;