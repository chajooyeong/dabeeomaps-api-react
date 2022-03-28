import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { drawMap, onMapLoad } from "../../utils/common";
import styles from "./View.module.css";

function View() {
  const dispatch = useDispatch();

  useEffect(() => {
    const mapCallback = (response) => {
      onMapLoad(response, dispatch);
    };

    drawMap(mapCallback);
  }, []);

  return (
    <div className={styles.view} id="view">
      <div id="map"></div>
    </div>
  );
}

export default View;
