import React from 'react';
import { FaTimes } from 'react-icons/fa';
import sublinks from '../../data';
import styles from './Sidebar.module.css';

import { useGlobalContext } from 'store/context';
import Link from 'next/link';
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>
                <div className="sidebar-sublinks">
                  {links.map((link, index) => {
                    const { url, icon, label } = link;
                    return (
                      <Link key={index} href={url}>
                        <a onClick={closeSidebar} key={index}>
                          {icon}
                          {label}
                        </a>
                      </Link>
                    );
                  })}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
