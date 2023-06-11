import React from 'react'
import {
     BookOutlined,
     DesktopOutlined,
     FileOutlined,
     HomeOutlined,
     NumberOutlined,
     PieChartOutlined,
     SearchOutlined,
     UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Layout, Menu } from 'antd';
const {Sider} = Layout
const items = [
     getItem("Home", "home", <HomeOutlined />),
     getItem("Explore", "explore", <SearchOutlined />),
     getItem("Subscription", "subscription", <NumberOutlined />),
     getItem("Saved", "saved", <BookOutlined />),
     getItem("Profile", "profile", <UserOutlined />),
];

function getItem(label, key, icon, children) {
     return {
       key,
       icon,
       children,
       label,
     };
}

function RpSlider() {
     const [collapsed, setCollapsed] = useState(false);
     return (
          <Sider
               theme="light"
               collapsible
               collapsed={collapsed}
               onCollapse={(value) => setCollapsed(value)}
               style={{
                    margin:'8px',
                    padding:'8px',
                    borderRadius:'8px'
               }}
          >
               <div className="demo-logo-vertical" />
               <Menu
                    theme="light"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={items}
                    style={{
                         border:'none',
                         height:'45px'
                    }}
               />
          </Sider>
     )
}

export default RpSlider