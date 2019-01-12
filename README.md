# study with 'Learning Javascript'


## node와 npm

node는 javascript로 작성된 서버
npm은 Node Package Manager 이다

### 설치

[Node JS 공식 사이트](https://nodejs.org/) 에서 current version 말고 <b>lts version</b>을 받는다.

### 버전확인

다음의 명령어로 node와 npm의 버전을 확인할 수 있다.

``` shell
$ node -v
```

``` shell
$ npm -v
```

## package.json 과 package-lock.json

### package.json
npm의 의존성 설정 파일.
npm install 명령을 실행하면 package.json 파일에 있는 의존성 목록을 확인하고 `node_mocules` 폴더를 생성하고 그 폴더에 다운받는다.

### package-lock.json
가장 최근에 npm install 명령을 실행한 시점에 사용된 의존성 트리를 기록한 파일.


## 빌드도구 gulp
[gulp 공식 사이트](https://gulpjs.com/)

### gulp 설치
``` shell
$ npm i -g gulp
```
테스트 하기 위해 전역에 걸프를 설치한다.

``` shell
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

``` shell
$ gulp
```


## 트랜스 컴파일러 babel
[babel 공식 사이트](https://babeljs.io/)

### 폴더구조
트랜스 컴파일러 사용을 위해 폴더구조를 정리할 필요가 있다.

서버코드가 있을 프로젝트 루트와 프론트 코드가 있을 public폴더
es5 코드가 있을 `dist`(distribution의 약자) 폴더와 es6 코드가 저장 될 `es6` 폴더

``` basic
node_modules/

es6/
dist/

public 
  ├ es6/
  └ dist/

.git
.gitignore

package.json
package-lock.json
```

### babel 설치 
코드를 변환하기위한 바벨과 바벨 프리셋을 설치한다.
``` shell
$ npm i --save-dev @babel/core @babel/preset-env
```
> 책에는 `babel-preset-es2015`를 받으라고 나와있지만,
바벨7이 나온 후부터는 바벨을 @babel에서 코어와 preset-env를 받아서 사용해야 에러가 나지 않더라...............
7 이전에는 프리셋을 es2015, es2016... 등등으로 골라서 다운받고 설정했어야하는데,
7이후에는 [preset-env](https://babeljs.io/docs/en/env)로 지정하고 지원하고자하는 브라우저 버전만 설정하면 알아서 컴파일해준다! 똑똑이 바벨


### gulp-babel 설치
``` shell
$ npm i --save-dev gulp-babel
```

### 바벨을 걸프를 통해 사용하기
`gulpfile.js` 파일을 만들고 다음과 같이 내용을 작성한다.
``` javascript
const gulp = require('gulp');
const babel = require('gulp-babel');
// 걸프 의존성 작성

gulp.task('default', function (cb) {
  // 걸프가 실행할 작업을 여기 쓴다

  // 노드(서버) 소스
  gulp.src('es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));

  // 브라우저(프론트) 소스
  gulp.src('public/es6/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('public/dist'));

  return cb();
});
```

그리고 `.babelrc` 파일을 만들어 바벨이 해당 프리셋을 사용하게끔 설정해야 한다.
``` basic
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": "> 0.25%, not dead"
      }
    ]
  ]
}
```

브라우저 점유율이 0.25퍼센트 이상이고 죽어있지않은 브라우저들을 대상으로 컴파일 하겠다는 설정이다.