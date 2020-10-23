$(document).ready(function () {

 $('.contents div:gt(0)').hide(); //contents > div 가 index 0보다 클때
                                  //index0보다 큰 애들 모두 숨긴다,
                                  //index1,2번 == 즉, div 2, 3번을 숨긴다



 var nn; //변수선
 $('.tab li').click(function () {

  nn = $(this).index();
  //console.log(nn);

  $('.tab li').removeClass('select');   //모든 li에 클라스를 삭제하고
  $(this).addClass('select');           //내가 클릭한 li에만 클라스를 추가


  $('.contents div').hide();            //모든 콘텐츠div 안보이게
  $('.contents div').eq(nn).show();     //nn번째 div 가 보인다

 });

});
