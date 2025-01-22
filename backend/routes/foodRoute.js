import express from 'express'
import { addFood,listFood,removeFood } from '../controllers/foodController.js';
import multer from 'multer'

const foodRouter = express.Router();

//Image storing engin


const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null, `${Date.now()}${file.originalname}`)
    }
})

const upload = multer({ storage: storage });

foodRouter.post('/add',upload.single("image"),addFood) // aip end point for adding food items to database.
foodRouter.get('/list',listFood)  // api endpoint for getting the food list in the data base.
foodRouter.post('/remove',removeFood) //api endpoint for deleting the food item from the list.

export default foodRouter;