export class AuthResponce{
    accessToken;
    refreshToken;
    user;
    constructor(accessToken,refreshToken,user) {
        this.accessToken = accessToken
        this.refreshToken = refreshToken
        this.user = user
    }
}