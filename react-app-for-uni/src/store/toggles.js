import { makeAutoObservable } from "mobx"

export default class Toggles{
    showLogRegForm = false;
    showLogInWelcomeMessage = false;
    constructor() {
        makeAutoObservable(this)
    }
    async setShowLogRegForm(bool){
        this.showLogRegForm = bool
    }
    async setShowLogInWelcomeMessage(bool){
        this.showLogInWelcomeMessage = bool
    }
}