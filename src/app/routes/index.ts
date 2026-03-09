import { Router } from "express";
import { SpecialtyRoutes } from "../modules/speciality/speciality.route";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes} from "../modules/user/user.route";
import { DoctorRoutes } from "../modules/doctor/doctor.route";
import { AdminRoutes } from "../modules/admin/admin.route";
import { scheduleRoutes } from "../modules/schedule/schedule.route";
import { DoctorScheduleRoutes } from "../modules/doctorSchedule/doctorSchedule.route";
import { AppointmentRoutes } from "../modules/appiontment/appiontment.route";
import { PatientRoutes } from "../modules/patient/patient.route";
import { PrescriptionRoutes } from "../modules/prescription/prescription.route";
import { ReviewRoutes } from "../modules/review/review.route";
import { StatsRoutes } from "../modules/stats/stats.route";
import { PaymentRoutes } from "../modules/payment/payment.route";

const router = Router();
router.use("/auth",AuthRoutes)
router.use("/specialties",SpecialtyRoutes)
router.use("/users",UserRoutes);
router.use("/patients", PatientRoutes)
router.use("/doctors",DoctorRoutes);
router.use("/admins", AdminRoutes)
router.use("/schedules", scheduleRoutes)
router.use("/doctor-schedules", DoctorScheduleRoutes)
router.use("/appointments", AppointmentRoutes)
router.use("/prescriptions", PrescriptionRoutes)
router.use("/reviews", ReviewRoutes)
router.use("/stats", StatsRoutes)
router.use("/payments", PaymentRoutes)

export const IndexRoutes= router;