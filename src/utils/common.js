function initMap(mapContainer, mapOptions, mapCallback) {
  new window.indoorMapApi.MapView(
    mapContainer, // 컨테이너
    mapOptions, // 옵션
    mapCallback // 맵 로드 콜백
  );
}

export function drawMap(mapCallback, otherOptions) {
  let mapContainer = document.getElementById("map");

  if (!mapContainer) {
    mapContainer = document.createElement("div");
    mapContainer.id = "map";

    const view = document.getElementById("view");
    view.appendChild(mapContainer);
  }

  // 지도 인증정보
  // 리액트에서 indoorMapApi 접근할 때, 모듈 설치가 아니라면
  // new window.indoorMapApi 이런 식으로 window 전역객체를 통해서 접근해야 함.
  const authorization = new window.indoorMapApi.Authorization({
    // clientId: "28AXw_veA2YbNKDP6poTpT",
    // clientSecret: "70c540c169af62808f4da3709e988e06",
    // clientId: "fgR4b4WQAEVb6ZPmc7XEME",
    // clientSecret: "ac43a1278470ab3825883898c5f51a0f",
    clientId: "6Udd5BsqAd88ea6RUBWzc-",
    clientSecret: "2dc47c3d93fd8dd7df3617b98cde7969",
  });

  // 지도 생성 옵션
  let mapOptions = {
    authorization: authorization,
    enableFloorMotion: true, // 층 변경 모션 적용 여부 옵션
  };

  if (otherOptions) {
    Object.assign(mapOptions, otherOptions);
  }

  initMap(mapContainer, mapOptions, mapCallback);
}

function createAlert(items, type) {
  const titles = items.map((item) => item.title);
  const alert = `${
    items.length
  }개의 ${type} 를(을) 클릭하셨습니다.\n${titles.join(", ")}`;

  return alert;
}

export function onMapLoad(response, dispatch) {
  // 맵 로드 콜백
  const code = response.getCode();

  if (code === 200) {
    // do something
    console.log("map view success!");
    const mapDraw = response.getPayload().mapDraw;

    dispatch({ type: "MAP_DRAW", mapDraw: mapDraw });

    const mapContainer = document.getElementById("map");
    mapContainer.addEventListener("object-click", (e) => {
      if (e.detail) {
        // window.alert(createAlert(e.detail, "Object"));
      }
    });
    mapContainer.addEventListener("poi-click", (e) => {
      if (e.detail) {
        // window.alert(createAlert(e.detail, "POI"));
      }
    });
  }
}

// 각 컨트롤러 컴포넌트에서 form 태그 enter 시 데이터 전송 기본 이벤트 방지
export function preventSubmit(e) {
  e.preventDefault();
}
