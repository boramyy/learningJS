import Intro from "./Intro";
import ImageSlider from "./ImageSlider";
import GuestBook from "./GuestBook";
import Location from "./Location";
import Share from "./Share";

const Layout = props => (
  <div>
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