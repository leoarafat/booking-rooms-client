import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";
export const sidebarItems = (role: string) => {
  //!
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/profile`}>Account Profile</Link>,
          key: `/profile`,
        },
      ],
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: "Management",
      key: "management",
      icon: <AppstoreOutlined />,
      children: [
        {
          label: <Link href={`/${role}/user`}>User</Link>,
          key: `/${role}/user`,
        },
        {
          label: <Link href={`/${role}/category`}>Category</Link>,
          key: `/${role}/category`,
        },
        {
          label: <Link href={`/${role}/service`}>Service</Link>,
          key: `/${role}/service`,
        },
        {
          label: <Link href={`/${role}/bookings`}>Bookings</Link>,
          key: `/${role}/bookings`,
        },
        {
          label: <Link href={`/${role}/analytics`}>Analytics</Link>,
          key: `/${role}/analytics`,
        },
        {
          label: <Link href={`/${role}/faq`}>Faq</Link>,
          key: `/${role}/faq`,
        },
        {
          label: <Link href={`/${role}/hero`}>Hero Sections</Link>,
          key: `/${role}/hero`,
        },
        {
          label: <Link href={`/${role}/blog`}>Blog Post</Link>,
          key: `/${role}/blog`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <TableOutlined />,
      key: `/${role}/admin`,
    },
    {
      label: <Link href={`/${role}/user`}>Manage User</Link>,
      icon: <TableOutlined />,
      key: `/${role}/user`,
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/cart`}>Cart</Link>,
      icon: <TableOutlined />,
      key: `/${role}/cart`,
    },
    {
      label: <Link href={`/${role}/booking-list`}>Booking List</Link>,
      icon: <ScheduleOutlined />,
      key: `/${role}/booking-list`,
    },
    {
      label: <Link href={`/${role}/notification`}>Notification</Link>,
      icon: <ThunderboltOutlined />,
      key: `/${role}/notification`,
    },
    {
      label: <Link href={`/${role}/payment`}>Payment</Link>,
      icon: <CreditCardOutlined />,
      key: `/${role}/payment`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.USER) return userSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
