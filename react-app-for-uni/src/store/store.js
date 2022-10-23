import { makeAutoObservable } from "mobx"
import AuthService from "../services/authService"
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
            localStorage.removeItem('token')
            this.setAuth(true)
            this.setUser({})
        }catch (err){
            console.log(err.response?.data?.message)
        }
    }
}