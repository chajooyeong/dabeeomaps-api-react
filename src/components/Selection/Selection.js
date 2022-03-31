import { useSelector } from "react-redux";
import { preventSubmit } from "../../utils/common";
import styles from "./Selection.module.css";

function Selection() {
  const mapDraw = useSelector((state) => state.mapDraw);

  console.log(mapDraw.response);

  const floorInfos = mapDraw.response.floorInfo;
  const floorOpts = floorInfos.map((info, i) => {
    return (
      <option value={info.id} key={i}>
        {info.name[0].text}
      </option>
    );
  });

  const themeInfos = mapDraw.response.themeInfo;
  const themeOpts = themeInfos.map((info, i) => {
    return (
      <option value={info.id} key={i}>
        {info.name}
      </option>
    );
  });

  const langInfos = mapDraw.response.langInfo;
  const langOpts = langInfos.map((info, i) => {
    return (
      <option value={info.lang} key={i}>
        {info.name}
      </option>
    );
  });

  const setMap = (e) => {
    switch (e.target.name) {
      case "camera":
        mapDraw.changeCamera({ camera: e.target.value });
        break;

      case "floor":
        mapDraw.changeFloor({ floor: e.target.value });
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
        <select name="floor">{floorOpts}</select>
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
        <select name="theme">{themeOpts}</select>
      </div>

      <div>
        <label htmlFor="language">Choose language</label>
        <select name="language">{langOpts}</select>
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
