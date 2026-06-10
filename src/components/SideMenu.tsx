import { navItems } from "../data/office";

export function SideMenu() {
  return (
    <aside className="sideMenu" aria-label="Office menu">
      {navItems.map((item) => (
        <button key={item.label} className="menuItem">
          <span>{item.icon}</span>
          <strong>{item.label}</strong>
          <small>{item.note}</small>
        </button>
      ))}
    </aside>
  );
}
