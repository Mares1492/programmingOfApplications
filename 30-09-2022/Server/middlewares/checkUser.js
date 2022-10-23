exports.checkUser = (req, res, next) => {
    const { name } = req.body

    if (name !== process.env.DB_USERNAME) throw new Error('Wrong USERNAME')

    req.user = {
        name: process.env.DB_USERNAME,
        role: 'Owner',
    }

    next()
}

