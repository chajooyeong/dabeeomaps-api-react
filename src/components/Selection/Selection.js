import { useSelector } from "react-redux";
import { preventSubmit } from "../../utils/common";
import styles from "./Selection.module.css";

function Selection() {
  const mapDraw = useSelector((state) => state.mapDraw);

  const setMap = (e) => {
    switch (e.target.name) {
      case "camera":
        mapDraw.changeCamera({ camera: e.target.value });
        break;

      case "floor":
        mapDraw.redrawMap({ floor: e.target.value });
        break;

      case "theme":
        mapDraw.redrawMap({ theme: e.target.value });
        break;

      case "language":
        mapDraw.changeLanguage(e.target.value);
        break;

      case "poi":
        const showPOI = JSON.parse(e.target.value);
        mapDraw.changeShowPoi({ showPoi: showPOI });

        break;

      case "drag":
        const dragBtn = e.target.value;

        if (dragBtn === "left") {
          mapDraw.controlDragLeft();
        } else if (dragBtn === "right") {
          mapDraw.controlDragRight();
        }
        break;

      default:
        break;
    }
  };

  return (
    <form
      className={styles.selection}
      onChange={(e) => {
        setMap(e);
      }}
      onSubmit={preventSubmit}
    >
      <div>
        <label htmlFor="floor">Choose floor</label>
        <select name="floor">
          <option value="FL-skycuh0406y87004">11F</option>
          <option value="FL-ubj3xpjjwp4p7136">2F</option>
        </select>
      </div>

      <div>
        <label htmlFor="camera">Choose camera</label>
        <select name="camera">
          <option value="3d">3D</option>
          <option value="2d">2D</option>
        </select>
      </div>

      <div>
        <label htmlFor="theme">Choose theme</label>
        <select name="theme">
          <option value="1453">모던 블루 테마</option>
          <option value="1449">다비오 테마</option>
          <option value="1451">블랙 테마</option>
        </select>
      </div>

      <div>
        <label htmlFor="language">Choose language</label>
        <select name="language">
          <option value="ko">한국어</option>
          <option value="en">English</option>
        </select>
      </div>

      <div>
        <label htmlFor="poi">POI display</label>
        <select name="poi">
          <option value="true">Show</option>
          <option value="false">Hide</option>
        </select>
      </div>

      <div>
        <label htmlFor="drag">Choose drag btn</label>
        <select name="drag">
          <option value="right">Right</option>
          <option value="left">Left</option>
        </select>
      </div>
    </form>
  );
}

export default Selection;
