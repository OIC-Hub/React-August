import { useState } from "react";

const State = () => {
    const [num, setNum] = useState(0)
    const [inputValue, setInputValue] = useState("")
const [items, setItems] = useState(['Apple', 'Banana']);

// ✅ Add an item
// setItems([...items, 'Cherry']);

// ✅ Remove an item
function removeItem(){
    setItems(items.filter(item => item !== 'Banana'));
}

function updateItem(){
setItems(items.map(item => item === 'Apple' ? 'Mango' : item));

}

function AddFruit(e) {
     e.preventDefault();
    setItems(prevItems => [...prevItems, inputValue]);
    setInputValue("");
}

    return (
        <>
        {/* <button onClick={() => setNum(num + 1)}>Click to Increase</button><span>{num}</span><button onClick={() => setNum(num - 1)}>Click to Decrease</button> */}
        {items.map((item) => (
        <p>{item}</p>
        ))}

        <form action="" onSubmit={AddFruit} >
            <input type="text" value={inputValue}   onChange={(e) => setInputValue(e.target.value)}  />
            <button>Add Fruit</button>
        </form>

        <button onClick={() => removeItem()}>Remove Fruit</button>
        <button onClick={() => updateItem()}>Update Fruit</button>

        </>
    )
}

export default State;