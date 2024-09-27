import React, { useState } from "react";
import { Layout, Menu, theme } from "antd";
import {
  UserOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  ClockCircleOutlined,
  MailFilled,
  PlusCircleFilled,
  BugFilled,
  BookFilled,
  MoneyCollectFilled,
  BehanceSquareFilled,
  NotificationFilled,
  FileExcelFilled,
} from "@ant-design/icons";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import AddUser from "../UserManagement/AddUser";
import Users from "../UserManagement/Users";
import OvertimeCalculation from "../UserManagement/OvertimeCalculation/OvertimeCalculation";
import AddMaintenance from "../Maintaince/AddMaintance";
import MaintanceList from "../Maintaince/MaintanceList";
import BookingIncomeManager from "../IncomeExpenseManagemt/BookingIncomeManager";
import DriverIncomeManager from "../IncomeExpenseManagemt/DriverIncomeManager";
import ExpenseManger from "../IncomeExpenseManagemt/ExpenseManger";
import InventoryManager from "../Inventory/InventoryManager";
import VehicleProfileManager from "../Vehicel/VehicleProfileManager";
import VehicleDocumentManger from "../Vehicel/VehicleDocumentManger";
import VehicleNotification from "../Vehicel/VehicleNotification";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("User Management", "user-management", <UserOutlined />, [
    getItem(
      <Link to="/admin/users">Users</Link>,
      "users",
      <UsergroupAddOutlined />
    ),
    getItem(
      <Link to="/admin/add-user">Add User</Link>,
      "add-user",
      <UserAddOutlined />
    ),
    getItem(
      <Link to="/admin/over-time">Over Time Calculation</Link>,
      "over-time",
      <ClockCircleOutlined />
    ),
  ]),
  getItem("Maintance Mangement", "over-time", <MailFilled />, [
    getItem(
      <Link to="/admin/maintances">Maintenance</Link>,
      "all-maintances",
      <PlusCircleFilled />
    ),
    getItem(
      <Link to="/admin/add-maintances">Add Maintenance</Link>,
      "add-main",
      <PlusCircleFilled />
    ),
  ]),
  getItem("Income/Expense Mangement", "incme-expense", <MailFilled />, [
    getItem(
      <Link to="/admin/booking-income">Booking Income</Link>,
      "booking-income",
      <BookFilled />
    ),
    getItem(
      <Link to="/admin/driver-income">Driver Income</Link>,
      "driver-income",
      <BugFilled />
    ),
    getItem(
      <Link to="/admin/driver-expense">Driver Expense</Link>,
      "driver-expense",
      <MoneyCollectFilled />
    ),
  ]),
  getItem(
    <Link to="/admin/inventory">Driver Expense</Link>,
    "inventory",
    <MailFilled />
  ),
  getItem(
    <Link to="/admin/vehicle-profile">Vehicle Profile</Link>,
    "vehicle-profile",
    <BehanceSquareFilled />
  ),
  getItem(
    <Link to="/admin/vehicle-document">Vehicle Document</Link>,
    "vehicle-document",
    <FileExcelFilled />
  ),
  getItem(
    <Link to="/admin/vehicle-notification">Vehicle Notification</Link>,
    "vehicle-notification",
    <NotificationFilled />
  ),
];

const AdminDashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Routes>
              <Route path="/" element={<h2>Welcome to Admin Dashboard</h2>} />
              <Route path="users" element={<Users />} />
              <Route path="add-user" element={<AddUser />} />
              <Route path="over-time" element={<OvertimeCalculation />} />
              <Route path="maintances" element={<MaintanceList />} />
              <Route path="add-maintances" element={<AddMaintenance />} />
              <Route path="booking-income" element={<BookingIncomeManager />} />
              <Route path="driver-income" element={<DriverIncomeManager />} />
              <Route path="driver-expense" element={<ExpenseManger />} />
              <Route path="inventory" element={<InventoryManager />} />
              <Route
                path="vehicle-profile"
                element={<VehicleProfileManager />}
              />
              <Route
                path="vehicle-document"
                element={<VehicleDocumentManger />}
              />
              <Route
                path="vehicle-notification"
                element={<VehicleNotification />}
              />
            </Routes>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Admin Dashboard ©{new Date().getFullYear()} Created by Your Company
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
