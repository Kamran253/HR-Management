import mongoose from 'mongoose';


const connectToDatbase = async() =>{
    try{
     await mongoose.connect()
    }catch(error){
        console.log(error);
    }
}