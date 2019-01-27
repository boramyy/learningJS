class Location extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount");
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: new daum.maps.LatLng(33.450701, 126.570667),
      level: 3
    }; //지도의 중심좌표. //지도의 레벨(확대, 축소 정도)

    const map = new daum.maps.Map(container, options); //지도 생성 및 객체 리턴
  }

  render() {
    return (
      <article className="wrap-content">
        <h2>location</h2>
        <div id="map" />
        <style jsx>{`
          #map {
            width: 500px;
            height: 400px;
          }
        `}</style>
      </article>
    );
  }
}

export default Location;