const ApiError =require('../exceptions/api.error')
const tokenService = require("../service/token.service");

exports.authMiddleware = (req,res,next) =>{
    try {
        const authorisationHeader = req.headers.authorization
        if (!authorisationHeader){
            return next(ApiError.UnauthorizedError())
        }

        const accessToken = authorisationHeader.split(' ')[1]
        if (!accessToken){
            return next(ApiError.UnauthorizedError())
        }

        const userData = tokenService.validateAccessToken(accessToken)
        if (!userData){
            return  next(ApiError.UnauthorizedError())
        }
        req.user = userData
        next()
    }catch (err){
        return next(ApiError.UnauthorizedError())
    }
}