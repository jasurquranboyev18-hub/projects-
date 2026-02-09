import { Router } from "express";
import { login, register } from "../controller/author.controller.js";
const authRouter = Router();
authRouter.post("/register", register);
authRouter.post("/login", login);
export default authRouter;
//# sourceMappingURL=auth.routes.js.map