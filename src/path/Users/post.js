module.exports = (app,Users)=>{
   try{
       app.post("/todolist/Users", async(req,res)=>{
           const {pseudo,mail,age} = req.body
           console.log(req.body)
           const User = await Users.create({
               pseudo,
               mail,
               age
               }

           )
           res.json(User)
       })
   }catch (err){
       res.status(500).json({
           message:"t'es vrmt mais vrmt nul"
       })
   }
}