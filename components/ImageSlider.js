class ImageSlider extends React.Component {
  render() {
    return (
      <article>
        <h2 className="hide">Image Slider</h2>
        <img src="/static/images/img_12.jpeg" />
        <style jsx>{`
          img {
            display: block;
            width: 100%;
          }
        `}</style>
      </article>
    );
  }
}

export default ImageSlider;