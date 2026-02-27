import express from "express"
import propertyRoutes from "./property.route.js";
import enquiryRoutes from "./enquiry.route.js"

const router = express.Router();

router.use('/properties', propertyRoutes);
router.use('/enquiries', enquiryRoutes);

export default router;