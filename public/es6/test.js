'use strict';

const sentences = [
  // es6 기능 : 블록 스코프 변수 선언
  { subject: 'javascript', verb: 'is', object: 'great' },
  { subject: 'giraffes', verb: 'are', object: 'tall' },
];

// es6 기능 : 객체 분해
function say({ subject, verb, object }) {
  // es6 기능 : 백틱(`)을 사용한 템플릿 문자열
  console.log(`${subject} ${verb} ${object}`);
}

// es6 기능 : for of
sentences.every(s => say(s));
// for (const s of sentences) {
//   say(s);
// }
