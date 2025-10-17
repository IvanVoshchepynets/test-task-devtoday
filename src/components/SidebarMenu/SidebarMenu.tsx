import React from 'react';
import './SidebarMenu.css';

export type Item = { id: string; label: string; href?: string; children?: Item[] };

export type SidebarMenuProps = {
  open: boolean;
  onClose: () => void;
  items: Item[];
  activeItem?: string;
};

export const SidebarMenu: React.FC<SidebarMenuProps> = ({ open, onClose, items, activeItem }) => {
  return (
    <>
      <div className={`rc-sidebar__backdrop ${open ? 'open' : ''}`} onClick={onClose} />
      <aside className={`rc-sidebar ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="rc-sidebar__inner">
          <button className="rc-sidebar__close" onClick={onClose}>
            Close
          </button>
          <nav>
            <ul>
              {items.map((it) => (
                <SidebarItem key={it.id} item={it} activeItem={activeItem} />
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

const SidebarItem: React.FC<{ item: Item; activeItem?: string }> = ({ item, activeItem }) => {
  const [expanded, setExpanded] = React.useState(false);
  const isActive = activeItem === item.label;

  return (
    <li>
      <div
        className={`rc-sidebar__item ${isActive ? 'active' : ''}`}
        onClick={() => setExpanded((s) => !s)}
      >
        {item.href ? <a href={item.href}>{item.label}</a> : item.label}
        {item.children?.length ? (expanded ? ' ▾' : ' ▸') : null}
      </div>
      {item.children && expanded && (
        <ul className="rc-sidebar__sub">
          {item.children.map((c) => (
            <li key={c.id} className="rc-sidebar__subitem">
              {c.label}
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default SidebarMenu;
