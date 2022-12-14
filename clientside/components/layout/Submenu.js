import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from 'store/context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);
  const [columns, setColumns] = useState('col-2');

  useEffect(() => {
    setColumns('col-2');
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns('col-3');
    }
    if (links.length > 3) {
      setColumns('col-4');
    }
  }, [location, links]);

  return (
    <aside
      className={`${isSubmenuOpen ? 'submenu show' : 'submenu'}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, i) => {
          const { label, icon, url } = link;
          return (
            <Link key={i} href={url}>
              <a className="hover:text-emerald-400 active:text-emerald-600">
                {icon}
                {label}
              </a>
            </Link>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
