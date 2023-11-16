import React, {useState} from 'react';
import "./counter.css";


const Counter = () => { 
    //  counter is a state initialized to 0 
    const [counter, setcounter] = useState(0) 
    
    // Function is called everytime increment button is clicked 
    const handleClick1 = () => { 
        // counter state is incremented 
        setcounter(counter + 1) 
    } 
    
    // Function is called everytime decrement button is clicked 
    const handleClick2 = () => { 
        // counter state is decremented 
        setcounter(counter - 1) 
    } 
    return (
        <div className="counter">
            <h1>The Bestest Counter App</h1>
            <h2>Current value of count is {counter}</h2>
            <button onClick={handleClick1} >Increment</button>
            <button onClick={handleClick2}>Decrement</button>
        </div>
    );
}
    


export default Counter;
