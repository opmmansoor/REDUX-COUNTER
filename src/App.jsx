
import { increment,decrement,reset } from './counterSlice';
import { useDispatch, useSelector } from 'react-redux'

function App() {
 const dispatch = useDispatch();
 const countdown = useSelector((state) => state.counter.count);

  return (
    <>
      <h1>COUNTER</h1>
      <h1>{countdown}</h1>
      <button onClick={() => dispatch(increment())}>PLUS</button>
      <button onClick={() => dispatch(decrement())}>MINUS</button>
      <button onClick={() => dispatch(reset())}>REST</button>
    </>
  )
}

export default App
