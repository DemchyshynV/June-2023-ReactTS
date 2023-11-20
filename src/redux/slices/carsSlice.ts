import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {ICar} from "../../interfaces/carInterface";
import {IPagination} from "../../interfaces/paginationInterface";
import {carService} from "../../services/carService";

interface IState {
    cars: ICar[]
}

const initialState: IState = {
    cars: []
}

const getAll = createAsyncThunk<IPagination<ICar>, void>(
    'carsSlice/getAll',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await carService.getAll();
            return data
        } catch (e) {
            return rejectWithValue(e)
        }
    }
)
const carsSlice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload.items
            })
});

const {reducer: carReducer, actions} = carsSlice;

const carActions = {
    ...actions,
    getAll
}

export {
    carActions,
    carReducer
}