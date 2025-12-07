import { NextFunction, Request, Response,  } from "express";
import { items } from "../models/item";


export const createItem = (req:Request,res:Response,next:NextFunction)=>{
    try {
        const {name,description}= req.body;
        const newItem = {
            id:Date.now(),
            name,
            description
        }
        items.push(newItem)
        res.json(newItem)
    } catch (error) {
        next(error)
    }
}

export const getItem = (req:Request,res: Response,next:NextFunction)=>{
    try {
        res.json(items)
    } catch (error) {
        next(error)
    }
}


export const getItemById = (req:Request,res:Response,next:NextFunction)=>{
    try {
        const id=parseInt(req.params.id,10) ;
        const item = items.find((item)=> item.id === id)
        if(!item){
            res.json({message:"item not found!!"})
        }
        res.json(item)
    } catch (error) {
        next(error)
    }
}

export const deleteItemById = (req:Request,res:Response,next:NextFunction)=>{
   try {
    const id = parseInt(req.params.id,10)
    const itemIndex = items.findIndex((item) => item.id === id)
 
    if(itemIndex === -1){
         res.json({message:"item dont found!"})
    }
    
    const deleteItem = items.splice(itemIndex,1)[0]
    res.json({message:"item deleted",deleteItem})
 
   } catch (error) {
    next(error)
   }
}
export const updateItemById = (req:Request,res:Response,next:NextFunction)=>{
   try {
    const id= parseInt(req.params.id,10)
    const {name,description} = req.body

    const itemIndex= items.findIndex((item)=>item.id === id)

    if(itemIndex === -1){
        res.json({message:"item is not foud!"})
    }
    items[itemIndex].name = name
    items[itemIndex].description = description
    res.json(items[itemIndex])
   } catch (error) {
    next(error)
   }
}