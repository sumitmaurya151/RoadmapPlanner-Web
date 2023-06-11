import React from 'react'
import {
     BookOutlined,
     DesktopOutlined,
     FileOutlined,
     HomeOutlined,
     PieChartOutlined,
     SearchOutlined,
     UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { Layout, Menu } from 'antd';
const {Sider} = Layout
const items = [
     getItem("Home", "1", <HomeOutlined />),
     getItem("Explore", "2", <SearchOutlined />),
     getItem("Saved", "sub1", <BookOutlined />),
     getItem("Profile", "sub2", <UserOutlined />),
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