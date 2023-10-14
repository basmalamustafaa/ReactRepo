
//hena ana b-create hook a2dr a-use it wana b-get products aw b-get brands l2n nafs part el use query da mwgod fe 3
// different components keda h3ml my own hook

import { useQuery } from 'react-query';
import axios from 'axios'

export default function GetApi(key, endPoint) {
    let BaseUrl = 'https://ecommerce.routemisr.com'

    function getData() {
        return axios.get(`${BaseUrl}/api/v1/${endPoint}`)
    }
    return useQuery(key, getData, { cacheTime: 30000 })
}