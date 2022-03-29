import { useSelector } from "react-redux";
import View from "../../components/View/View";
import Menu from "../../components/Menu/Menu";
import Selection from "../../components/Selection/Selection";
import Control from "../../components/Control/Control";
import styles from "./Home.module.css";

function Home() {
  const mapDraw = useSelector((state) => state.mapDraw);

  return (
    <div className={styles.home}>
      <View></View>

      {/* mapDraw 가 필요한 Overlay 컴포넌트들은 mapDraw 가 로드됬을 때 렌더링하도록 함 */}
      {mapDraw && (
        <>
          <Menu></Menu>
          <Selection></Selection>
          <Control></Control>
        </>
      )}
    </div>
  );
}

export default Home;

/**
 * 캔버스 camera.aspect 이슈
 *
 * canvas 해상도 및 사이즈는 조절 가능하지만,
 * three.js camera 비율값을 조절할 수 없다보니
 * 캔버스를 임의로 리사이징했을 때, 지도 오브젝트가 찌그러진 상태로
 * 렌더링 되는 것 같음.
 *
 * 그래서 Canvas 와 Controls 를 grid 로 구현하지 않고,
 * Canvas 위에 Controls 를 오버레이 하는 형식으로 대체했음.
 */
