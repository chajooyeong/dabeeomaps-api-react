import MapOption from "./MapOption/MapOption";
import Camera from "./Camera/Camera";
import POI from "./POI/POI";
import Zoom from "./Zoom/Zoom";
import Navigation from "./Navigation/Navigation";
import MyLocation from "./MyLocation/MyLocation";
import Marker from "./Marker/Marker";
import { Route, Routes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Control.module.css";

function Control() {
  const mapDraw = useSelector((state) => state.mapDraw);
  const location = useLocation();

  return (
    <div className={styles.control}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<MapOption mapDraw={mapDraw} />} />
        <Route path="/camera" element={<Camera mapDraw={mapDraw} />} />
        <Route path="/poi" element={<POI mapDraw={mapDraw} />} />
        <Route path="/zoom" element={<Zoom mapDraw={mapDraw} />} />
        <Route path="/navigation" element={<Navigation mapDraw={mapDraw} />} />
        <Route path="/myLocation" element={<MyLocation mapDraw={mapDraw} />} />
        <Route path="/marker" element={<Marker mapDraw={mapDraw} />} />
      </Routes>
    </div>
  );
}

export default Control;
