import { makeAutoObservable } from "mobx"

export default class Toggles{
    showLogRegForm = false;
    constructor() {
        makeAutoObservable(this)
    }
    async setShowLogRegForm(bool){
        this.showLogRegForm = bool
    }
}