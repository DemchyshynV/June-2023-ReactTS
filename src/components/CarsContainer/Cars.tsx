import {FC, useEffect, useState} from "react";

import {ICar} from "../../interfaces/carInterface";
import {carService} from "../../services/carService";
import {Car} from "./Car";
import {ISetState} from "../../types/ISetState";


interface IProps {
    flag: boolean,
    setCarForUpdate: ISetState<ICar>
}

const Cars: FC<IProps> = ({flag, setCarForUpdate}) => {
    const [cars, setCars] = useState<ICar[]>([]);


    useEffect(() => {
        carService.getAll().then(({data}) => setCars(data))
    }, [flag])

    return (
        <div style={{width: '50%'}}>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export {Cars};