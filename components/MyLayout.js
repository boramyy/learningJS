import Intro from "./Intro";
import ImageSlider from "./ImageSlider";
import GuestBook from "./GuestBook";
import Location from "./Location";
import Share from "./Share";

const layoutStyle = {
  // margin: 20,
  // padding: 20,
  // border: "1px solid #DDD"
};

const Layout = props => (
  <div style={layoutStyle}>
    {/* <Header /> */}
    <Intro />
    <ImageSlider />
    <GuestBook />
    <Location />
    <Share />
    {/* {props.children} */}
  </div>
);

export default Layout;