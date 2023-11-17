import {FC, PropsWithChildren} from "react";
import {SetURLSearchParams} from "react-router-dom";

import {ICar} from "../interfaces";
import {useAppDispatch} from "../hooks";
import {carActions} from "../redux";

interface IProps extends PropsWithChildren {
    car: ICar,
    query: URLSearchParams
    setQuery: SetURLSearchParams
}

const Car: FC<IProps> = ({car, setQuery, query}) => {
    const {id, brand, price, year} = car;
    const page = query.get('page');
    const dispatch = useAppDispatch();

    // const setEvent = () => {
    //     setQuery({'page':'1'})
    // };

    return (
        <div>
            {page && <h1>{page}</h1>}
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => dispatch(carActions.setCarForUpdate({carForUpdate: car}))}>update</button>
            <button onClick={() => dispatch(carActions.deleteById({id}))}>delete</button>
            {/*<button onClick={setEvent}>delete</button>*/}

        </div>
    );
};

export {Car};