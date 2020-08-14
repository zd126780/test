import axios from "axios"
import store from "../store"
import router from "../router"

let instance = axios.create({
    baseURL: "/api",
    timeout: 6000
})


instance.interceptors.request.use((config) => {
    config.headers.authorization = store.state.user.token
    return config

}, (err) => {
    Promise.reject(err)
})

instance.interceptors.response.use((res) => {
    if(res.data.code==403){
        router.push('/login')
    }
    return res

}, (err) => {
    Promise.reject(err)
})

function get(url, params) {
    return instance.get(url, {
        params
    })
}
function post(url, data) {
    return instance.post(url, data)
}

export default {
    get,
    post
}