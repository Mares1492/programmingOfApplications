export class IUser {
    email;
    isActivated;
    id;
    constructor(email, isActivated, id) {
        this.id = id
        this.email = email
        this.isActivated = isActivated
    }
}