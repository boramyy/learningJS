import styled from "styled-components";

const MapBox = styled.div`
  width: 100%;
  height: 300px;
  & .custom-overlay {
    position: relative;
    display: block;
    width: 80px;
    margin-bottom: 50px;
    font-weight: bold;
    text-align: center;
    border: 1px solid #111;
    background-color: #fff;
    &:after {
      content: "";
      position: absolute;
      bottom:-6px;
      left:34px;
      display: block;
      width: 10px;
      height: 10px;
      border-right: 1px solid #111;
      border-bottom: 1px solid #111;
      background-color: #fff;
      transform: rotate(45deg);
    }
  }
`;

class Location extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount");
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스

    const positionCenter = new daum.maps.LatLng(37.51492617882784, 127.10111030204156);
    const positionApelgamo = new daum.maps.LatLng(37.51592626764367, 127.09964406341295);

    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: positionCenter,
      level: 4
    }; //지도의 중심좌표. //지도의 레벨(확대, 축소 정도)

    const map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
    
    // 결과값으로 받은 위치를 마커로 표시합니다
    const marker = new daum.maps.Marker({
      map: map,
      position: positionApelgamo
    });

    // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    const content = '<span class="custom-overlay">아펠가모</span>';

    // 커스텀 오버레이를 생성합니다
    const customOverlay = new daum.maps.CustomOverlay({
      map: map,
      position: positionApelgamo,
      content: content,
      yAnchor: 1
    });
  }

  render() {
    return <article>
        <h2 className="wrap-content">아펠가모 잠실</h2>
        <MapBox id="map" />
      </article>;
  }
}

export default Location;