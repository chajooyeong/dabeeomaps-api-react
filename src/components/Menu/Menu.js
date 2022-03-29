import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

function Menu() {
  const urls = [
    "/",
    "/camera",
    "/poi",
    "/zoom",
    "/navigation",
    "/myLocation",
    "/marker",
  ];
  const labels = [
    "MapOption",
    "Camera",
    "POI",
    "Zoom",
    "Navigation",
    "MyLocation",
    "Marker",
  ];

  const lis = urls.map((url, i) => {
    return (
      <li key={i}>
        {i === 0 ? (
          <NavLink
            end
            to={url}
            className={({ isActive }) => `${isActive ? styles.active : null}`}
          >
            {labels[i]}
          </NavLink>
        ) : (
          <NavLink
            to={url}
            className={({ isActive }) => `${isActive ? styles.active : null}`}
          >
            {labels[i]}
          </NavLink>
        )}
      </li>
    );
  });
  return (
    <nav className={styles.menu}>
      <ul>{lis}</ul>
    </nav>
  );
}

export default Menu;
