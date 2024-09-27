// rootRouter.js
const express = require("express");
const userRoutes = require("./modules/user/route");
const incomeRoutes = require("./modules/income/route");
const expenseRoutes = require("./modules/expense/route");
const driverIncome = require("./modules/driver.income/route");
const inventoryRoutes = require("./modules/inventory/route");
const maintenanceRoutes = require("./modules/maintaince/route");
const vehicleProfileRoutes = require("./modules/vehicel.profile/route");
const vehicleRoutes = require("./modules/vehicle.document/route");
const router = express.Router();

router.use("/users", userRoutes);
router.use("/incomes", incomeRoutes);
router.use("/expenses", expenseRoutes);
router.use("/driver-income", driverIncome);
router.use("/inventory", inventoryRoutes);
router.use("/maintenance", maintenanceRoutes);
router.use("/vprofiles", vehicleProfileRoutes);
router.use("/api/vehicles", vehicleRoutes);

module.exports = router;
