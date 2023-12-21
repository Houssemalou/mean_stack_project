import mongoose from "mongoose";

export async function connect() {
    try{
        mongoose.connect("mongodb+srv://alouimarwen:marwen11@cluster0.mnfeusf.mongodb.net/");
        const connection = mongoose.connection;
        connection.on('connected', ()=>{
            console.log('MongoDb connected successfully');
        })
        connection.on('error', (err : any)=>{
            console.log('MongoDb connection error.' + err);
        })
    }catch(error){
        console.log("something goes wrong!");
        console.log(error);
    }  
}
