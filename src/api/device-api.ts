import {instance} from './axios-instance'

export type DeviceType = {
    id: number,
    name: string,
    price?: number,
    rating: number,
    img?: string
}

export type DeviceResponse = {
    count: number,
    rows: [DeviceType]
}


export const deviceAPI = {
    getDevices: () => instance
        .get<DeviceResponse>('/api/device')
}

// id: number,
//     name: string,
//     price: number,
//     rating: number,
//     img: string,
//     createdAt: number,
//     updatedAt: number,
//     typeId: number,
//     brandId: number,