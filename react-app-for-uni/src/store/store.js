import  { makeAutoObservable } from "mobx"
import AuthService from "../services/authService"
import axios from "axios"
import { API_URL } from "../http/interceptor"

export default class Store{
    user = {}
    isAuth = false;
    constructor() {
        makeAutoObservable(this)
    }
    setAuth(bool){
        this.isAuth = bool
    }
    setUser(user){
        this.user = user
    }
    async login(email,password){
        try {
            const response = await AuthService.login(email,password)
            console.log(response)
            localStorage.setItem('token',response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        }catch (err){
            console.log(err.response?.data?.message)
        }
    }
    async registration(email,password){
        try {
            const response = await AuthService.registration(email,password)
            console.log(response)
            localStorage.setItem('token',response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        }catch (err){
            console.log(err.response?.data?.message)
        }
    }
    async logout(){
        try {
            const response = await AuthService.logout()
            console.log(response)
            localStorage.removeItem('token')
            this.setAuth(true)
            this.setUser({})
        }catch (err){
            console.log(err.response?.data?.message)
        }
    }
    async checkAuth(){
        try {
            const response = await axios.get(`${API_URL}/refresh`,{withCredentials:true})
            localStorage.setItem('token',response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        }catch (err){
            console.log(err.response?.data?.message)
        }
    }
}