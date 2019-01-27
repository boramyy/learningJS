class Intro extends React.Component {
  render() {
    return (
      <article>
        <h2 className="hide">Intro</h2>
        <img className="img-main" src="/static/images/intro.jpg" />
        <div className="box-text">
          <p>
            귀한 걸음 하시어 축복해주시면 <br />
            더없는 격려와 기쁨으로 간직하겠습니다.
           </p>
          <img className="img-who" src="/static/images/who.jpg" />
        </div>
        <style jsx>{`
          img {
            display: block;
            width: 100%;
          }
          .box-text {
            margin-top: 3em;
            margin-bottom: 3.4em;
          }
          .box-text p {
            font-size: 1.2em;
            text-align: center;
          }
          .box-text p:after {
            content: "";
            display: block;
            width: 15px;
            height: 2px;
            margin: 1.8em auto;
            background-color: #eee;
          }
          .box-text .img-who {
            width: 215px;
            margin: 0 auto;
          }
        `}</style>
      </article>
    );
  }
}

export default Intro;