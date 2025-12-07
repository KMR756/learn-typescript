import { Router } from "express";
import { createItem, getItem ,getItemById,deleteItemById, updateItemById} from "../controllers/itemController";

const router = Router()

router.get("/",getItem)
router.post("/",createItem)
router.get("/:id",getItemById)
router.put("/:id",updateItemById)
router.delete("/:id",deleteItemById)

export default router;