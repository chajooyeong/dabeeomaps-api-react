import Input from "../Input/Input";
import Btn from "../Btn/Btn";
import styles from "./POI.module.css";
import { preventSubmit } from "../../../utils/common";

function POI(props) {
  const mapDraw = props.mapDraw;

  const poiLevel = {
    lv1: 0,
    lv2: 0,
    lv3: 0,
  };
  const onChange = (e) => {
    switch (e.target.name) {
      case "h":
        const height = parseInt(e.target.value, 10);
        if (height) {
          mapDraw.setPoiRotateDistance(height);
        }
        break;

      case "lv1":
      case "lv2":
      case "lv3":
        poiLevel[e.target.name] = parseInt(e.target.value, 10);
        break;

      default:
        break;
    }
  };

  const onBtnClick = (e) => {
    switch (e.target.value) {
      case "poiLevelOn":
        mapDraw.setPoiLevelOn(poiLevel.lv1, poiLevel.lv2, poiLevel.lv3);
        break;

      case "poiLevelOff":
        mapDraw.setPoiLevelOff();
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.poi}>
      <form className={styles.height} onSubmit={preventSubmit}>
        <div className={styles.title}>POI 높이 설정</div>
        <Input name={"h"} onChange={onChange} default={0}></Input>
      </form>

      <form className={styles.level} onSubmit={preventSubmit}>
        <div className={styles.title}>POI 레벨 설정</div>
        <Input name={"lv1"} onChange={onChange} default={0}></Input>
        <Input name={"lv2"} onChange={onChange} default={0}></Input>
        <Input name={"lv3"} onChange={onChange} default={0}></Input>
      </form>

      <div
        className={styles.btns}
        onClick={(e) => {
          onBtnClick(e);
        }}
      >
        <Btn name={"POI 레벨 설정"} value="poiLevelOn"></Btn>
        <Btn name={"POI 레벨 해제"} value="poiLevelOff"></Btn>
      </div>
    </div>
  );
}

export default POI;
