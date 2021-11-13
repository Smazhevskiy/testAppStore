import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../bll/store'
import {fetchDevices} from '../../bll/device-reducer'
import {DeviceResponse, DeviceType} from '../../api/device-api'

export const Devices = () => {

    const dispatch = useDispatch()
    const devices = useSelector<RootState, Array<DeviceType>>(state => state.device.rows)

    useEffect(() => {
        dispatch(fetchDevices())
    }, [dispatch])

    return (
        <div>
            {devices.map(d => {
                return <div key={d.id}>
                    <div>Марка {d.name}</div>
                    <div>Rating {d.rating}</div>
                    <div>Цена {d.price}</div>
                </div>
            })}
        </div>
    )
}