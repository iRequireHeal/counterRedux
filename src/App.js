import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {
    increment,
    decrement,
    reset,
} from "./actions/action";

function App() {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>это хуита должна считать</h1>
            <h3>{counter}</h3>
            <button onClick={() => dispatch(increment())}>+очко</button>
            <button onClick={() => dispatch(decrement())}>-очко</button>
            <button onClick={() => dispatch(reset())}>обнулить</button>
        </div>
    );
}

export default App;
