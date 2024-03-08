import {useState} from 'react';
import {FaTrashAlt } from 'react-icons/fa';

const Content = () => {
    const [items, setItems] = useState([
        {
           id: 1,
           checked: true,
           item: "one half pound bag of Cocoa Covered Almonds Unsalted"
        },
        {
            id: 2,
            checked: true,
            item: "Item2"
        },
        {
            id: 3,
            checked: false,
            item: "Item3"
        }
      ]);

      const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        localStorage.setItem('SHoppinglist', JSON.stringify(listItems));
      }

      const hnadleDelete = (id) => {
        console.log(id) 
      }
    // const [count, setCount] = useState(0);
    // const name = "Jeho"
// const handleNameChange = () => {
//   const names = ['Ebuka', 'James', 'Jeho', 'Onyinye'];
//   const int = Math.floor(Math.random() * 4);
//   setName(names[int]);
// }

// const handleClick = () => {
//     setCount(count + 1)
//     setCount(count + 1)
//     console.log(count)
// }
 
// const handleClick2 = () => {
//     console.log(count)
// }

// const handleClick3 = (e) => {
//     console.log(e.target.innerText)
// }

  return (
    <main>
     {/* <p onDoubleClick={handleClick}>
         Hello {name}! 
    </p>
    <button onClick={handleNameChange}>Change Name</button>       
    <button onClick={handleClick}>Click It</button>       
    <button onClick={handleClick2}>Click It</button>        */}
        <ul>
            {items.map((item) => (
                <li className="item" key={item.id}>
                    <input 
                    type="checkbox"
                    onChange={() => handleCheck(item.id)}
                    checked = {item.checked}
                    />
                    <label 
                    style={(item.checked) ? {textDecoration: 'line-through'} : null}
                        onDoubleClick={() => handleCheck(item.id)}
                    >{item.item}</label>
                    <FaTrashAlt 
                    onClick={() => handleDelete(item.id)}
                        role="button" 
                        tabIndex="0" 
                     />

                </li>
            ))}
        </ul>
   </main>
  )
}

export default Content