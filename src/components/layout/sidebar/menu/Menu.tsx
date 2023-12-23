import { MENU } from "./menu.data";
import MenuItem from "./MenuItem";
import styles from "../sidebar.module.scss";

export default function Menu() {
  return (
    <ul className={styles.menu}>
      {MENU.map((item) => {
        return <MenuItem item={item} key={item.name} />;
      })}
    </ul>
  );
}
