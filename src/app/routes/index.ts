import { Router } from "express";
import { SpecialtyRoutes } from "../modules/speciality/speciality.route";
import { AuthRoutes } from "../modules/auth/auth.route";

const router = Router();
router.use("/auth",AuthRoutes)
router.use("/specialties",SpecialtyRoutes)

export const IndexRoutes= router;