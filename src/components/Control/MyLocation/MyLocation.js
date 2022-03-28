import { preventSubmit } from "../../../utils/common";
import Btn from "../Btn/Btn";
import Input from "../Input/Input";
import styles from "./MyLocation.module.css";

function MyLocation(props) {
  const mapDraw = props.mapDraw;

  let myLocPos = {
    x: 0,
    y: 0,
    z: 0,
  };

  const onChange = (e) => {
    myLocPos[e.target.name] = parseInt(e.target.value, 10);
  };

  const onBtnClick = (e) => {
    switch (e.target.value) {
      case "myLocOn":
        mapDraw.myLocationOn(myLocPos.x, myLocPos.y, myLocPos.z, true, {
          animate: {
            color: "#96c4e1",
            opacity: 0.8,
            desireScale: 3.0,
          },
        });
        break;

      case "myLocOff":
        mapDraw.myLocationOff();
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.myLocation}>
      <form onSubmit={preventSubmit}>
        <div className={styles.title}>내 위치 좌표</div>
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
        <Btn name={"내 위치 적용"} value="myLocOn"></Btn>
        <Btn name={"내 위치 끄기"} value="myLocOff"></Btn>
      </div>
    </div>
  );
}

export default MyLocation;
