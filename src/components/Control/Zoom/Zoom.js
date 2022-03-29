import Input from "../Input/Input";
import Btn from "../Btn/Btn";
import styles from "./Zoom.module.css";
import { preventSubmit } from "../../../utils/common";

function Zoom(props) {
  const mapDraw = props.mapDraw;

  const onBtnClick = (e) => {
    switch (e.target.value) {
      case "zoomIn":
        mapDraw.zoomIn();
        break;

      case "zoomOut":
        mapDraw.zoomOut();
        break;

      case "zoomOn":
        mapDraw.zoomOn();
        break;

      case "zoomOff":
        mapDraw.zoomOff();
        break;

      default:
        break;
    }
  };

  const onChange = (e) => {
    mapDraw.zoomControl(parseInt(e.target.value, 10));
  };

  return (
    <div className={styles.zoom}>
      <div
        className={styles.btns}
        onClick={(e) => {
          onBtnClick(e);
        }}
      >
        <div className={styles.zoomInOut}>
          <Btn name={"Zoom In"} value={"zoomIn"}></Btn>
          <Btn name={"Zoom Out"} value={"zoomOut"}></Btn>
        </div>

        <div className={styles.zoomOnOff}>
          <Btn name={"마우스 Zoom On"} value={"zoomOn"}></Btn>
          <Btn name={"마우스 Zoom Off"} value={"zoomOff"}></Btn>
        </div>
      </div>

      <form onSubmit={preventSubmit}>
        <div className={styles.title}>지도 비율 지정</div>
        <Input name={"%"} onChange={onChange} default={100}></Input>
      </form>
    </div>
  );
}

export default Zoom;
