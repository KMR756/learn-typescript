import express, {Request ,Response} from "express"
import itemRoutes from "./routes/itemRoutes"

const app= express()

app.use(express.json())


app.use('/api/item',itemRoutes)

app.get("/",(req:Request,res:Response)=>{
    res.send("server is cooking...update")
})

export default app