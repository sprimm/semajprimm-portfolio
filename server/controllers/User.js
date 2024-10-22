const User = require('../models/User.js')

const create = async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        return res.status(200).json({
            message: "Successfully signed up!"
        })
    } catch (error) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(error)
        })
    }
}

const list = async (req, res) => {
    try {
        let users = await User.find().select('name email updated created')
        res.json(users)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const userByID = async (req, res) => {
    try {
        let user = await User.findById(req.params.userId)
        if(!user){
            return res.status(400).json({error: "User not found"})
        }
        res.json(user)
    } catch (error) {
        return res.status(400).json({error: "Could not retrieve user"})
    }
}

const update = async (req, res) => {
    try {
        let userId = req.params.userId
        let newUser = req.body
        newUser.updated = Date.now()
        const user = await User.findByIdAndUpdate(userId, newUser, {new: true})
        res.json(user)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const removeById = async (req, res) => {
    try {
        let userId = req.params.userId
        let deletedUser = await User.findByIdAndDelete(userId);
        if(!deletedUser){
            return res.status(400).json({error: "User couldn't be deleted"})
        }
        res.json(deletedUser)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = async (req, res) => {
    try {
        let deletedUsers = await User.deleteMany()
        if(!deletedUsers){
            return res.status(400).json({error: "Users couldn't be deleted"})
        }
        res.json(deletedUsers)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

module.exports = {create, userByID, list, removeById, remove, update }