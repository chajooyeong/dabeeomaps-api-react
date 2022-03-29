import { preventSubmit } from "../../../utils/common";
import Btn from "../Btn/Btn";
import styles from "./Navigation.module.css";

function Navigation(props) {
  const mapDraw = props.mapDraw;

  mapDraw.setNavigationOption({
    lineSpotSize: 5,
    lineSpotInterval: 150,
  });

  const poiInfo = mapDraw.response.poiInfo;
  let route = {
    origin: {
      poiId: poiInfo[0].id,
      floorId: poiInfo[0].floorId,
    },
    destination: {
      poiId: poiInfo[0].id,
      floorId: poiInfo[0].floorId,
    },
    wayPoint: {
      poiId: poiInfo[0].id,
      floorId: poiInfo[0].floorId,
    },
  };

  const setRoute = (e) => {
    const node = route[e.target.name];
    const poiIdx = e.target.value;

    node.poiId = poiInfo[poiIdx].id;
    node.floorId = poiInfo[poiIdx].floorId;
  };

  const onBtnClick = (e) => {
    switch (e.target.value) {
      case "routeOn":
        mapDraw.getRouteOn(route.origin, route.destination, "recommendation", [
          route.wayPoint,
        ]);
        break;

      case "routeOff":
        mapDraw.getRouteOff();
        break;

      case "routeAnimOn":
        mapDraw.startRouteAnimation({
          destOption: {
            activeDest: true,
            color: "#ff0000",
            opacity: 0.4,
            isAnimate: true,
            duration: 1000,
          },
        });
        break;

      case "routeAnimOff":
        mapDraw.stopRouteAnimation();
        break;

      default:
        break;
    }
  };

  const selection = (selectionInfo) => {
    const poiOpts = poiInfo.map((poi, i) => {
      return (
        <option key={i} value={i}>
          {poi.title}
        </option>
      );
    });

    return (
      <div>
        <label htmlFor={selectionInfo.name}>{selectionInfo.title}</label>
        <select name={selectionInfo.name}>{poiOpts}</select>
      </div>
    );
  };

  return (
    <div className={styles.navigation}>
      <form
        className={styles.selection}
        onChange={(e) => {
          setRoute(e);
        }}
        onSubmit={preventSubmit}
      >
        {selection({ name: "origin", title: "출발지" })}
        {selection({ name: "wayPoint", title: "경유지" })}
        {selection({ name: "destination", title: "도착지" })}
      </form>

      <div
        className={styles.btns}
        onClick={(e) => {
          onBtnClick(e);
        }}
      >
        <div className={styles.route}>
          <Btn name={"길찾기 적용"} value={"routeOn"}></Btn>
          <Btn name={"길찾기 끄기"} value={"routeOff"}></Btn>
        </div>
        <div className={styles.routeAnim}>
          <Btn name={"모의주행 적용"} value={"routeAnimOn"}></Btn>
          <Btn name={"모의주행 끄기"} value={"routeAnimOff"}></Btn>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
