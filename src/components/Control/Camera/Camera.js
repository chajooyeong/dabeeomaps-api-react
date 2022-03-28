import Input from "../Input/Input";
import Btn from "../Btn/Btn";
import styles from "./Camera.module.css";
import { preventSubmit } from "../../../utils/common";

function Camera(props) {
  const mapDraw = props.mapDraw;

  const onClick = (e) => {
    if (e.target.value === "initCam") {
      const curCam = mapDraw.mapOptions.camera;

      if (curCam === "2d") {
        mapDraw.init2DCameraInfo();
      } else if (curCam === "3d") {
        mapDraw.init3DCameraInfo();
      }
    }
  };

  const camPos = {
    x: 0,
    y: 0,
  };

  const onChange = (e) => {
    const coord = parseInt(e.target.value, 10);
    camPos[e.target.name] = coord;

    mapDraw.moveCamera(camPos);
  };

  return (
    <div className={styles.camera}>
      <div
        onClick={(e) => {
          onClick(e);
        }}
      >
        <Btn name={"카메라 초기화"} value="initCam"></Btn>
      </div>

      <form onSubmit={preventSubmit}>
        <div className={styles.title}>카메라 이동</div>
        <Input name={"x"} onChange={onChange} default={0}></Input>
        <Input name={"y"} onChange={onChange} default={0}></Input>
      </form>
    </div>
  );
}

export default Camera;
