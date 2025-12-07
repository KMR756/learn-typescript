import app from "./app";
import config from "./config";

app.listen(config.port,()=>{
    console.log(`server is running at port: ${config.port}`)
})