import {useAppDispatch, useAppSelector} from "../hooks/reduxHooks";
import {useEffect} from "react";
import {carActions} from "../redux/slices/carsSlice";

const CarsPage = () => {
    const {cars} = useAppSelector(state => state.cars);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, []);

    return (
        <div>
            {JSON.stringify(cars)}
        </div>
    );
};

export {CarsPage};