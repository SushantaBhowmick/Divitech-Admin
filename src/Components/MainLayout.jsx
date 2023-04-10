import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu, theme } from 'antd';
import React, { useState } from 'react';
import {
  AiOutlineDashboard,
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineBgColors
} from "react-icons/ai"
import { SiBrandfolder } from "react-icons/si"
import { BiAddToQueue, BiCategoryAlt } from "react-icons/bi"
import { BsCardChecklist } from "react-icons/bs"
import { FaClipboardList, FaBloggerB } from "react-icons/fa"
import { ImBlog } from "react-icons/im"
import { IoIosNotifications } from "react-icons/io"


const { Header, Sider, Content } = Layout;


const MainLayout = () => {

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navigate = useNavigate();
  const [use, setUse] = useState(4)
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className='text-white fs-5 mb-0 text-center py-3'>
            <span className='sm-logo'>DT</span>
            <span className='lg-logo'>DiviTech</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if (key === "signout") {

            } else {
              navigate(key)
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <AiOutlineUser className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'Catelog',
              icon: <AiOutlineShoppingCart className='fs-4' />,
              label: 'Catelog',
              children: [
                {
                  key: 'product',
                  icon: <BiAddToQueue className='fs-4' />,
                  label: 'Add Products',
                },
                {
                  key: 'product-list',
                  icon: <BsCardChecklist className='fs-4' />,
                  label: 'Product List',
                },
                {
                  key: 'brand',
                  icon: <SiBrandfolder className='fs-4' />,
                  label: 'Brand',
                },
                {
                  key: 'list-brand',
                  icon: <SiBrandfolder className='fs-4' />,
                  label: 'Brand List',
                },
                {
                  key: 'category',
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: 'Category',
                },
                {
                  key: 'list-category',
                  icon: <BiCategoryAlt className='fs-4' />,
                  label: 'Category List',
                },
                {
                  key: 'color',
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: 'Color',
                },
                {
                  key: 'list-color',
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: 'Color List',
                },
              ]
            },
            {
              key: 'Orders',
              icon: <FaClipboardList className='fs-4' />,
              label: 'Orders',
            },
            {
              key: 'blogs',
              icon: <FaBloggerB className='fs-4' />,
              label: 'Blogs',
              children: [
                {
                  key: 'blog',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <FaClipboardList className='fs-4' />,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <FaClipboardList className='fs-4' />,
                  label: 'Blog Category List',
                },
              ]
            },
            {
              key: 'enquiries',
              icon: <ImBlog className='fs-4' />,
              label: 'Enquiries',
            },

          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className='d-flex justify-content-between ps-3 pe-5'
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className="d-flex gap-4 align-items-center">
            <div>
              <img
                className='img-fluid flag'
                src="https://img.freepik.com/free-vector/illustration-india-flag_53876-27130.jpg?size=626&ext=jpg" alt="" />
            </div>
            <div className='position-relative'>
              <IoIosNotifications className='fs-4 icon' />
              <span className="badge bg-warning rounded-circle p-1 position-absolute">
                {use}
              </span>
            </div>
            <div
              className='d-flex gap-3 align-items-center dropdown '
             
              >
              <div>
                <img
                  className='img-fluid me'
                  src="https://avatars.githubusercontent.com/u/80717108?s=400&u=838ff63adbeaa9133ec37a19e2db7de9c3b4dd03&v=4" alt="" />
              </div>
              <div
               role="button"
               id="dropdownMenuLink"
               data-bs-toggle="dropdown"
               aria-expanded="false"
               >
                <h5 className='mb-0'>@Sushanta Bhowmick</h5>
                <p className='mb-0 mail'>mymaildeveloper1@gmail.com</p>
              </div>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link className="dropdown-item py-1 mb-0" style={{"height":"auto", "lineHeight":"30px"}} to="/">Profile</Link></li>
                <li>
                  <Link className="dropdown-item py-1 mb-0" style={{"height":"auto", "lineHeight":"30px"}} to="/">SignOut</Link></li>
              </div>
            </div>
          </div>

        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default MainLayout