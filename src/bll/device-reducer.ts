import {AppDispatch} from './store'
import {deviceAPI, DeviceResponse} from '../api/device-api'


enum DEVICE_ACTIONS_TYPES {
    SET_DEVICE = 'DEVICE/SET_DEVICE',

}

type DeviceActions =
    | ReturnType<typeof setDevice>


export type DeviceInitialState = DeviceResponse

const initialState: DeviceInitialState = {
    count: 1,
    rows: [
        {id:1, name:'самсунг', price:350, rating:4, img: 'https://www.anypics.ru/download.php?file=201211/1440x900/anypics.ru-50057.jpg'}
    ]
}

export const deviceReducer = (state = initialState, action: DeviceActions): DeviceInitialState => {
    switch (action.type) {
        case DEVICE_ACTIONS_TYPES.SET_DEVICE:
            return {...state, ...action.payload}

        default:
            return state
    }
}

const setDevice = (payload: DeviceResponse) => ({
    type: DEVICE_ACTIONS_TYPES.SET_DEVICE,
    payload
} as const)


export const fetchDevices = () => async (dispatch: AppDispatch) => {
    try {
        const response = await deviceAPI.getDevices()
        dispatch(setDevice(response.data))
        console.log(response.data.rows)
    } catch (e) {
        console.log(e)
    }
}

// id: 1,
//     img: 'https://www.anypics.ru/download.php?file=201211/1440x900/anypics.ru-50057.jpg',
//     brandId: 2,
//     createdAt: new Date().getDate(),
//     updatedAt: new Date().getDate(),
//     name: 'самсунг',
//     price: 350,
//     rating: 4,
//     typeId: 3