const Message = ({ name, time, msg }) => (
  <div>
    <span className="name">{name}</span>
    <span className="time">{time}분전</span>
    <button>x</button>
    <p>{msg}</p>
  </div>
);

const InputForm = () => (
  <form action="" method="post">
    <div>
      <label htmlFor="name">이름</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="password">비밀번호</label>
      <input type="password" id="password" name="password" />
    </div>
    <label htmlFor="message">내용</label>
    <textarea id="message" name="message" defaultValue="내용을 입력하세요." />
  </form>
);


class GuestBook extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  render() {
    return (
      <article className="wrap-content">
        <h2>축하메세지</h2>
        <div>
          <h3 className="hide">축하메세지 리스트</h3>
          <Message name="김보람" time="1" msg="언냐 츄카핸!!!!" />
          <Message name="박규진" time="2" msg="와 한나 진짜예쁘다!!!!" />
          <Message
            name="김나솜"
            time="10"
            msg="언니 결혼 축하해요~~~!! >0< 결혼식날 봬요! 절대 안울게요ㅠㅠㅠㅠㅠ"
          />
        </div>
        <div>
          <h3>축하메세지 작성하기</h3>
          <InputForm />
        </div>
      </article>
    );
  }
}

export default GuestBook;