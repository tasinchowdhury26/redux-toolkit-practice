import {
  decrement,
  increment,
  incrementByValue,
} from "../redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Home = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-700">
          Counter {`->`} {count}
        </h1>
        <div className="flex gap-5 justify-center my-5">
          <button
            className="p-5 rounded-md bg-green-500"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            className="p-5 rounded-md bg-green-500"
            onClick={() => dispatch(incrementByValue(2))}
          >
            Increment By 2
          </button>
          <button
            className="p-5 rounded-md bg-red-500"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
