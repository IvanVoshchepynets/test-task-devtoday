import React from "react";
import "./SidebarMenu.css";

type Item = { id: string; label: string; children?: Item[] };

export const SidebarMenu: React.FC<{
  open: boolean;
  onClose: () => void;
  items: Item[];
}> = ({ open, onClose, items }) => {
  return (
    <>
      <div className={`rc-sidebar__backdrop ${open ? "open" : ""}`} onClick={onClose} />
      <aside className={`rc-sidebar ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="rc-sidebar__inner">
          <button className="rc-sidebar__close" onClick={onClose}>Close</button>
          <nav>
            <ul>
              {items.map((it) => (
                <SidebarItem key={it.id} item={it} />
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

const SidebarItem: React.FC<{ item: Item }> = ({ item }) => {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <li>
      <div className="rc-sidebar__item" onClick={() => setExpanded((s) => !s)}>
        {item.label} {item.children?.length ? (expanded ? "down" : "right") : null}
      </div>
      {item.children && expanded && (
        <ul className="rc-sidebar__sub">
          {item.children.map((c) => <li key={c.id} className="rc-sidebar__subitem">{c.label}</li>)}
        </ul>
      )}
    </li>
  );
};

export default SidebarMenu;
