module.exports = (app,Users)=>{
    try{
        app.put("/todolist/Users/:id",async (req,res)=>{
            const id = req.params.id
            const {pseudo,mail,age} = req.body
            const UserId = await Users.findByPk(id)
            const User = await  UserId.update({
                pseudo,
                mail,
                age
            })
            res.json(User)

        })
    }catch(err){
        res.status(500).json({
            message:"behhhhhhhh alors"
        })
    }
}