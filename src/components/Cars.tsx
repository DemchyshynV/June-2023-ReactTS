import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../hooks";
import {Car} from "./Car";
import {useEffect} from "react";
import {carActions} from "../redux";

const Cars = () => {
    const {cars, trigger} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();
    const [query, setQuery] = useSearchParams();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [trigger, dispatch])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} query={query} setQuery={setQuery}/>)}
        </div>
    );
};

export {Cars};