const ver = navigator.userAgent;
console.log(ver);

const isIE = /edg/i.test(ver);
console.log(isIE);

if ( isIE ) {
  alert('익스플로러 브라우저로 접속하셨습니다. 이 웹 페이지는 익스플로러를 지원하지 않습니다. 다른 브라우저로 접속해 주세요!!');
};
// 엣지나 익스플로어 브라우저로 접속했을 때만 alert창 활성화(확인하려면 주소를 복사해서 확인)

