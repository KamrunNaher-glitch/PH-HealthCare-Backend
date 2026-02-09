import { Router } from "express";
import { SpecialtyRoutes } from "../modules/speciality/speciality.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes} from "../modules/user/user.route";

const router = Router();
router.use("/auth",AuthRoutes)
router.use("/specialties",SpecialtyRoutes)
router.use("/doctors",UserRoutes)

export const IndexRoutes= router;