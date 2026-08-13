import {useState} from "react"

function CoffeeForm({editingCoffe,onSave,onCancel}){
    const[name,setName]=useState(
        editingCoffe? editingCoffe.name : ""
    );

    const[price,setPrice]=useState(
        editingCoffe? editingCoffe.price : ""
    );

    const[category,setCategory]=useState(
        editingCoffe? editingCoffe.category:"Hot Coffee"
    );

    const[size,setSize]=useState(
        editingCoffe ? editingCoffe.size:"Medium"
    );

    function handleSubmit(event){
        event.preventDefault();

        if(name.trim()===""|| price ===""){
            alert("please enter name and price");
            return;
        }

        const coffeeData={
            name:name,
            price:Number(price),
            category:category,
            size:size,
        };
        onSave(coffeeData);
    }

    return(
        <div className="form-wrapper">
            <div className="form-header">
                <div>
                    <h2>{editingCoffe? "Edit Coffee":"Add New Coffee"}</h2>
                    <p>
                        {editingCoffe? "update your coffee details"
                        : "Add a new Coffee to your menu"    
                    }
                    </p>
                </div>
                <button
                    type="button"
                    className="close-btn"
                    onClick={onCancel}
                    >{"\u00D7"}</button>
            </div>


            <form onSubmit={handleSubmit}>
                <div className="form-grid">
                    <div className="input-group"></div>
                    <label>Coffee Name</label>
                    <input
                        type="text"
                        placeholder="enter coffee name"
                        value={name}
                        onChange={(event)=>setName(event.target.value)}
                        />
                </div>

                <div className="input-group">
                    <label>Price</label>
                    <input
                        type="number"
                        placeholder="Enter Price"
                        value={price}
                        onChange={(event)=>setPrice(event.target.value)}
                        />
                </div>

                <div className="input-group">
                    <label>Category</label>
                    <select
                        value={category}
                        onChange={(event)=>setCategory(event.target.value)}
                    >
                        <option value="Hot Coffee">Hot Coffee</option>
                         <option value="cold Coffee">cold Coffee</option>
                          <option value="Dessert">Dessert</option>
                    </select>
                </div>

                <div classname="input-group">
                    <label>Size</label>
                    <select
                    value={size}
                    onChange={(event)=>setSize(event.target.value)}
                    >
                        <option value="Small">Small</option>
                         <option value="Medium">Medium</option>
                          <option value="Large">Large</option>
                    </select>
                </div>

                <div className="form-actions">
                    <button
                    type="button"
                    className="cancel-btn"
                    onClick={onCancel}
                    >
                    </button>

                    <button type="submit" className="save-btn">{editingCoffe?"update Coffee" : "Add Coffee"}</button>
                </div>

            </form>
                    
        </div>
    );
}
export default CoffeeForm;