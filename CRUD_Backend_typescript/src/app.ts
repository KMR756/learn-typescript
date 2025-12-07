import express, {Request ,Response} from "express"

const app= express()

app.use(express.json())

app.get("/",(req:Request,res:Response)=>{
    res.send("server is cooking...update")
})

export default app