import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

const CounterContainer = () => {
  const number = useSelector((staet) => staet.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;
