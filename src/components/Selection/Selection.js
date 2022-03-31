import { useSelector } from "react-redux";
import { preventSubmit } from "../../utils/common";
import styles from "./Selection.module.css";

function Selection() {
  const mapDraw = useSelector((state) => state.mapDraw);

  // option에서 2개 이상의 value 를 지정하려면 json string 으로 전달해서 파싱해서 가져오면 됨.
  const floorInfos = mapDraw.response.floorInfo;
  const floorOpts = floorInfos.map((info, i) => {
    const value = `{"id": "${info.id}","idx":${i}}`; // idx 값은 파싱하면 바로 number 로 나올 수 있게 ""로 감싸지 않았음.

    return (
      <option value={value} key={i}>
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
        // option에서 2개 이상의 value 를 지정하려면 json string 으로 전달해서 파싱해서 가져오면 됨.
        const selectedFloor = JSON.parse(e.target.value);
        mapDraw.changeFloor({ floor: selectedFloor.id }, selectedFloor.idx);
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
