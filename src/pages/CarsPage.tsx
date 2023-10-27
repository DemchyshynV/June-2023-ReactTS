import {useState} from "react";
import {Outlet} from "react-router-dom";

import {Cars} from "../components/CarsContainer/Cars";
import {CarForm} from "../components/CarsContainer/CarForm";
import {ICar} from "../interfaces/carInterface";

const CarsPage = () => {
    const [flag, setFlag] = useState<boolean>(null)
    const [carForUpdate, setCarForUpdate] = useState<ICar>(null);

    const trigger = (): void => {
        setFlag(prevState => !prevState)
    }
    return (
        <div>
            <CarForm trigger={trigger} carForUpdate={carForUpdate}/>
            <hr/>
            <div style={{display: "flex", justifyContent: 'space-between'}}>
                <Cars flag={flag} setCarForUpdate={setCarForUpdate}/>
                <Outlet/>
            </div>
        </div>
    );
};

export {CarsPage};