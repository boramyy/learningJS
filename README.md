# study with 'Learning Javascript'


## node와 npm

node는 javascript로 작성된 서버
npm은 Node Package Manager 이다

### 설치

[Node JS 공식 사이트](https://nodejs.org/) 에서 current version 말고 lts version을 받는다.

### 버전확인

다음의 명령어로 node와 npm의 버전을 확인할 수 있다.

``` default
$ node -v
```

```
$ npm -v
```

## package.json 과 package-lock.json

### package.json
npm의 의존성 설정 파일.
npm install 명령을 실행하면 package.json 파일에 있는 의존성 목록을 확인하고 `node_mocules` 폴더를 생성하고 그 폴더에 다운받는다.

### package-lock.json
가장 최근에 npm install 명령을 실행한 시점에 사용된 의존성 트리를 기록한 파일.


## 빌드도구 gulp

### gulp 설치
```
$ npm i -g gulp
```
테스트 하기 위해 전역에 걸프를 설치한다.

```
$ npm i --save-dev gulp
```


### gulpfile.js 생성
프로젝트폴더에 gulpfile.js 를 생성 후 다음 내용을 작성한다.

``` javascript
const gulp = require('gulp');
// 걸프 의존성을 여기에 작성한다

gulp.task('default', function (cb) {
  // 걸프가 실행할 작업을 여기 쓴다
  return cb();
});
```
책에는 콜백함수 리턴 없는 콜백함수 였는데, gulp가 업데이트되면서 리턴이 필수인 것 같다. 아무튼 이렇게 작성하고 터미널에 gulp 명령을 내리면 아무 내용 없지만 일단 실행이 되는 것을 확인할 수 있다!

```
$ gulp
```

