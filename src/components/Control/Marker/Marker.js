import Btn from "../Btn/Btn";
import Input from "../Input/Input";
import { preventSubmit } from "../../../utils/common";
import styles from "./Marker.module.css";

function Marker(props) {
  const mapDraw = props.mapDraw;

  let markers = [];
  let curPos = {
    x: 0,
    y: 0,
    z: 0,
  };
  const onChange = (e) => {
    curPos[e.target.name] = parseInt(e.target.value, 10);
  };

  const onBtnClick = (e) => {
    switch (e.target.value) {
      case "setMarker":
        const markerPos = Object.assign({}, curPos);
        markers.push({ position: markerPos });
        mapDraw.setMarker({ marker: markers });
        break;

      case "clearMarker":
        mapDraw.clearMarker();
        markers = [];
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.marker}>
      <form onSubmit={preventSubmit}>
        <div className={styles.title}>마커 좌표</div>
        <Input name={"x"} onChange={onChange} default={0}></Input>
        <Input name={"y"} onChange={onChange} default={0}></Input>
        <Input name={"z"} onChange={onChange} default={0}></Input>
      </form>

      <div
        className={styles.btns}
        onClick={(e) => {
          onBtnClick(e);
        }}
      >
        <Btn name={"마커 추가"} value="setMarker"></Btn>
        <Btn name={"마커 제거"} value="clearMarker"></Btn>
      </div>
    </div>
  );
}

export default Marker;
