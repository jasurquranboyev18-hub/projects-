import { Router } from "express";
import { login, register } from "../controller/author.controller.js";

const authRouter: Router = Router()

authRouter.post("/register", register)
authRouter.post("/login", login)

export default authRouter