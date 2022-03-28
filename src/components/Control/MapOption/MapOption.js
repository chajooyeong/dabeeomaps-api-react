import { useDispatch } from "react-redux";
import { preventSubmit } from "../../../utils/common";
import { drawMap, onMapLoad } from "../../../utils/common";
import Btn from "../Btn/Btn";
import Input from "../Input/Input";
import styles from "./MapOption.module.css";

let mapOption = {
  isPoiSprite: false,
  angle: {
    vertical: 0,
    horizontal: 0,
    fixed: false,
  },
};

function MapOption(props) {
  const mapDraw = props.mapDraw;
  const dispatch = useDispatch();

  const onBtnClick = (e) => {
    switch (e.target.value) {
      case "dispose":
        if (document.querySelector("canvas")) {
          // 캔버스 요소가 존재할 때에만, 즉 맵뷰가 존재할 때에만
          // 맵뷰의 메모리를 해제함.
          mapDraw.dispose();
        }
        break;

      case "mapView":
        if (document.querySelector("canvas")) {
          // 캔버스 요소가 존재하면 이미 맵뷰가 있다는 뜻이므로,
          // 새로운 맵뷰를 중복하여 생성하지 않음.
          return;
        }

        const mapCallback = (response) => {
          onMapLoad(response, dispatch);
        };

        drawMap(mapCallback, mapOption);
        break;

      default:
        break;
    }
  };

  const onChange = (e) => {
    switch (e.target.name) {
      case "isPoiSprite":
        const isPoiSprite = JSON.parse(e.target.value);
        mapOption.isPoiSprite = isPoiSprite;
        break;

      case "fixAngle":
        const fixAngle = JSON.parse(e.target.value);
        mapOption.angle.fixed = fixAngle;
        break;

      case "v":
        mapOption.angle.vertical = parseInt(e.target.value, 10);
        break;

      case "h":
        mapOption.angle.horizontal = parseInt(e.target.value, 10);
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.mapOption}>
      <div
        className={styles.btns}
        onClick={(e) => {
          onBtnClick(e);
        }}
      >
        <Btn name={"맵 제거"} value="dispose"></Btn>
        <Btn name={"맵 생성"} value="mapView"></Btn>
      </div>

      <form
        className={styles.selection}
        onChange={onChange}
        onSubmit={preventSubmit}
      >
        <div>
          <label htmlFor={"isPoiSprite"}>POI 정면 응시</label>
          <select name={"isPoiSprite"}>
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
        </div>

        <div>
          <label htmlFor={"fixAngle"}>각도 고정</label>
          <select name={"fixAngle"}>
            <option value="false">false</option>
            <option value="true">true</option>
          </select>
        </div>
      </form>

      <form className={styles.input} onSubmit={preventSubmit}>
        <div className={styles.title}>초기 각도 설정</div>
        <Input name={"v"} onChange={onChange} default={0}></Input>
        <Input name={"h"} onChange={onChange} default={0}></Input>
      </form>
    </div>
  );
}

export default MapOption;
