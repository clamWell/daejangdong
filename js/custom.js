var ieTest = false,
	screenWidth = $(window).width(),
	screenHeight = $(window).height(),
	imgURL = "http://img.khan.co.kr/spko/storytelling/2021/daejang/",
	isMobile = screenWidth <= 800 && true || false,
	isNotebook = (screenWidth <= 1380 && screenHeight < 750) && true || false,
	isMobileLandscape = ( screenWidth > 400 && screenWidth <= 800 && screenHeight < 450 ) && true || false;
	window.onbeforeunload = function(){ window.scrollTo(0, 0) ;}
var randomRange = function(n1, n2) {
	return Math.floor((Math.random() * (n2 - n1 + 1)) + n1);
};
$(window).resize(function() {
	screenWidth = $(window).width();
	screenHeight = $(window).height();
});


/******** 모바일 전용 조정 ********/
if(isMobile==true){

}else{

}
/******** 모바일 전용 조정 ********/


$(function(){


	$(".close-ie-block").on("click", function(){
		$(".ie-block-9").hide();
	})

    var ieUnder = false;
    function checkIe(){
        var word;
        if (navigator.userAgent.indexOf("MSIE") >= 0) {
            console.log("ieUNDER 10");
            ieUnder = true;
            return true;
        }else {
            return false;
        }
    }
    checkIe();


	/*								*/
	/*------  INTRO ANIMATION	-----*/
	/*								*/




	/*								*/
	/*------  INTRO ANIMATION	-----*/
	/*								*/






	function init(){
        if(isMobile==true){

        }else{

        }
		makeStoryDefault()
	}


    function avoid100vh(){
		$(".loading-page").height(screenHeight);
		$(".ie-block").height(screenHeight);
	}



	init();
	$(".loading-page").fadeOut(500, function(){

		introAnimation();
	});

	var titleAniDone = false;
	function activTitlePathAni(){
		var $titlePath = $("#PAGE_TITLE path");
		for(t=0; t<$titlePath.length;t++){
			$titlePath.eq(t).delay(t*50).animate({"stroke-dashoffset":"0", "fill-opacity":"1"}, 4500);
			if(t == $titlePath.length-1){
				titleAniDone = true;
			}
		};
	}

	function introAnimation(){

	}



	var storyArea_pos = $(".storytelling-area").offset().top,
		storyArea_end_pos = $(".storytelling-area").offset().top + $(".storytelling-area").height()-screenHeight;
	console.log(storyArea_pos);

	var nowStoryMode = false;
	var activateStoryMode = function(){
		console.log("스토리모드 가동");
		nowStoryMode = true;

		$(".storytelling-area").find(".fixed-area").addClass("fixed");
		$(".storytelling-area").find(".fixed-area").removeClass("fixed-bottom");
		$(".interactive-header").addClass("storyMode");


	}

	var cancelStoryMode = function(){
		console.log("스토리모드 실행 취소");
		nowStoryMode = false;
		$(".storytelling-area").find(".fixed-area").removeClass("fixed");
		$(".storytelling-area").find(".fixed-area").removeClass("fixed-bottom");
		$(".interactive-header").removeClass("storyMode");

	};

	var endStoryMode = function(){
		console.log("스토리모드 실행 끝");
		nowStoryMode = false;
		$(".storytelling-area").find(".fixed-area").removeClass("fixed");
		$(".storytelling-area").find(".fixed-area").addClass("fixed-bottom");
		$(".interactive-header").removeClass("storyMode");

	};

	var nowChapter = 1,
		nowYear = 2009,
		nowStage = 1,
		nowStageBefore;

	function makeStoryDefault(){
		var nowChapter = 1,
			nowYear = 2009,
			nowStage = 1;

		$("svg").children("g").hide();
		$("svg").children("path").hide();
		$("svg").children("text").hide();

		$(".svg-holder").addClass("chapter1");
		$("#b-02").show();
		$("#b-02-title-01").show();
		$("#gwangju_1_").show();
		$("#p-g1-01").show();
		$("#p-g1-02").show();
		$("#p-g1-03").show();
		$("#p-g1-04").show();
		$("#p-g1-05").show();
		$("#p-g1-06").show();
		$("#p-g1-07").show();
		//$("#p-g1-08").show();
		//$("#p-g1-09").show();



		$(".arrow-prev").hide();
		$(".arrow-next").hide();
	};

	var checkChapter = function(stage){
		if(stage<=5){
			nowChapter = 1;
		}else if(stage>5 &&stage<=9){
			nowChapter = 2;
		}else if(stage>9&&stage<=12){
			nowChapter = 3;
		}else if(stage>12&&stage<=16){
			nowChapter = 4;
		}else if(stage>16&&stage<=20){
			nowChapter = 5;
		}else if(stage>20){
			nowChapter = 6;
		}


		console.log("챕터: "+nowChapter);
		changeChapter(nowChapter)
		//return nowChapter;
	}

	var chapterYearList = ["2009","2010","2011", "2012~2013","2014","2015","2016~2018","2019~2020","2021"],
		chapterTitleList = ["태초에 대장동,<br/> 그리고 토건세력이 있었다", "2010년 시의회를 포섭한 꾼들, <br/>공무원을 만났다", "계속된 인재영입<br/>김만배·박영수의 등장","대장동 민-관 공동개발 공식화<br/>거대한 판이 깔렸다","선수교체<br/>김만배, 대장동에 뛰어들다","불거진 부산저축은행 사건, 선수단 교체","'천군만마' 국회와 법원을 등에 업고, 불타는 부동산 시장을 달리다","돈냄새 맡고 돌아온 친구들, 균열이 시작되다","발각"]
	var changeChapter= function(ch){
		$(".chapter-name").html("chapter. "+ch);
		$(".stage-info .year").html(chapterYearList[ch-1]);
		$(".stage-info .stage-title").html(chapterTitleList[ch-1]);
	};

	//다음
	$(".arrow-next").on("click", function(e){
		e.preventDefault()
		nowStageBefore = nowStage;
		nowStage = nowStage + 1;
		if(nowStage>1){
			$(".arrow-prev").fadeIn();
		}
		checkChapter(nowStage);
		adjustTextBox(nowStage);
		drawStage(nowStage,nowStageBefore);

	});
	//이전
	$(".arrow-prev").on("click", function(e){
		e.preventDefault()
		nowStageBefore = nowStage;
		nowStage = nowStage - 1;
		if(nowStage<=1){
			$(".arrow-prev").hide();
		}
		checkChapter(nowStage);
		adjustTextBox(nowStage);
		drawStage(nowStage,nowStageBefore);
	});

	function adjustTextBox(stage){
		var stage = stage || 1;

		console.log("스테이지: "+stage);

		$(".each-story").hide();
		$(".each-story").eq(stage-1).fadeIn(700);

	};


	//처음 스타트
	$("#START_STORY").on("click", function(){
		$(".cover").fadeOut();

		$(".stage-info .chapter-name").animate({"top":"0px", "opacity":"1"}, 1000, "easeOutCirc");
		$(".stage-info .year").delay(300).animate({"top":"0px", "opacity":"1"}, 1000, "easeOutCirc");
		$(".stage-info .stage-title").delay(600).animate({"top":"0px", "opacity":"1"}, 1000, "easeOutCirc", function(){
			$(".st-1").fadeIn(500);
			$(".svg-area").addClass("start");
			$(".arrow-next").fadeIn();
		});
	});


	function drawStage(n, n_before){
		var reverse = (n - n_before>0)? false : true;

		if(reverse){
			console.log("이전스토리")
		}else{
			console.log("다음스토리")
		}

		switch (n){
			case 1: //case1은 reverse 케이스 밖에 없음
				$("#line01").hide();
				$("#line02").hide();
				$("#p-g1-08").hide();
				break;
			case 2:
				if(reverse){
					$("#line03").hide();
					$("#p-g1-09").hide();
				}else{
					$("#line01").show();
					$("#line02").show();
					$("#p-g1-08").show();
				}
				break;
			case 3:
				if(reverse){
					$("#b-01").hide();
					$("#p-g2-01").hide();
					$("#p-g2-02").hide();
				}else{
					$("#line03").show();
					$("#p-g1-09").show();
				}
				break;
			case 4:
				if(reverse){ // 5>4
					$("#p-g2-04").hide();
				}else{ // 3>4
					$("#b-01").show();
					$("#p-g2-01").show();
					$("#p-g2-02").show();
				}
				break;
			case 5:
				if(reverse){ // 6>5

				}else{ // 4>5
					$("#p-g2-04").show();
				}
				break;
			case 6: //chater 2 시작
				if(reverse){ // 7>6

				}else{ // 5>6
					$("#gwangju_1_").hide();
					$("#line01").hide();
					$("#line02").hide();
					$("#line03").hide();
					$("#b-01").hide();
					$("#b-03").show();
					$("#p-g2-04").css({"opacity":"0.2", "transform":"translate(30px, 0px)"});
				}
				break;
			case 7:
				if(reverse){ // 8>7

				}else{ // 6>7
					$("#p-g2-03").show();
				}
				break;
			case 8:
				if(reverse){ // 9>0

				}else{ // 7>8
					$("#line04-01").show();
					$("#line04-02").show();
				}
				break;
			case 9:
				if(reverse){ // 10>9

				}else{ // 8>9
					$("#p-g1-01").css({"opacity":"0.2"});
					$("#p-g1-02").css({"opacity":"0.2"});
					$("#p-g1-03").css({"opacity":"0.2"});
					$("#p-g1-07").css({"opacity":"0.2"});
				}
				break;
			case 10: // chapter 3 시작
				if(reverse){ // 11>10

				}else{ // 9>10
					$("#p-g1-01").hide();
					$("#p-g1-02").hide();
					$("#p-g1-03").hide();
					$("#p-g1-07").hide();
					$("#line04-01").hide();
					$("#line04-02").hide();

					$("#p-g1-10").show();
					$("#line06").show();

					$(".svg-holder.chapter1 svg").css({"transform":"scale(1)"});
				}
				break;
			case 11:
				if(reverse){ // 12>11

				}else{ // 10>11
					$("#b-04").show();
					$("#p-03-01").show();
					$("#busan").show();
					$("#line09-01").show();
					$("#p-03-02").show();

				}
				break;
			case 12:
				if(reverse){ // 13>12

				}else{ // 11>12
					$("#line08").show();
					$("#p-03-02").show();
					$("#line07").show();
				}
				break;
			case 13: // chapter 4 시작
				if(reverse){ // 14>13

				}else{ // 12>13
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(0px, 100px)"});

					$("#b-02").hide();
					$("#b-02-title-01").hide();

					$("#b-02-02").show();
					$("#b-02-title-02").show();
					$("#p-g1-08").css({"transform":"translate(0px, -60px)"});
					$("#p-g1-09").css({"transform":"translate(0px, -60px)"});
					$("#p-g1-10").css({"transform":"translate(0px, -60px)"});

					$("#line09-01").hide();
					$("#line08").hide();
					$("#line06").hide();

					$("#p-03-02").css({"opacity":"0.2"});

					$("#line10-01").show();
					$("#line10-02").show();



				}
				break;

			case 14:
				if(reverse){ // 14>13

				}else{ // 12>13

				}
				break;
			case 15:
				if(reverse){ // 14>13

				}else{ // 12>13
					$("#b-05").show();
					$("#b-03").hide();
					$("#b-03-02").show();
					$("#b-03-title-2").hide();

					$("#p-g2-04").css({"opacity":"1"});
					$("#p-g2-05").show();
					$("#p-g2-06").show();

					$("#line10-01").hide();
					$("#line10-02").hide();

					$("#p-g2-02").css({"transform":"translate(25px, 0px)"});
					$("#p-g2-05").css({"transform":"translate(20px, 0px)"});

					//$("#p-02-06").css({"transform":"translate(70px,-30px)"});

				}
				break;
			case 16:
				if(reverse){ // 17>16

				}else{ // 15>16
					$("#line11").show();
					$("#line12-01").show();

				}
				break;
			case 17: //chapter 5 시작
				if(reverse){ // 18>17

				}else{ // 16>17
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.1) translate(0px, 0px)"});


					$("#p-03-02").hide();
					$("#line11").hide();
					$("#line12-01").hide();
					$("#line13").show();
					$("#a-03").show();

				}
				break;
			case 18:
				if(reverse){

				}else{
					$("#p-g1-11").show();
					$("#line09-01").show();
					$("#line09-02").show();
					$("#line17").show();


				}
				break;
			case 19:
				if(reverse){

				}else{
					$("#b-02-title-02").hide();
					$("#line13").hide();
					$("#b-06").show();
					$("#line14").show();
					$("#p-g2-07").show();
					$("#p-g2-08").show();
				}
				break;

			case 20:
				if(reverse){

				}else{
					$("#b-03-02").hide();
					$("#b-07").show();
					$("#p-g2-02").css({"transform":"translate(-10px, 0px)"});
				}
				break;

			case 21: //chapter 6 시작
				if(reverse){

				}else{
					$("#line14").hide();
					$("#b-07").hide();
					$("#line09-02").hide();
					$("#p-g2-02").css({"transform":"translate(25px, 0px)"});
				}
				break;

			case 22:
				if(reverse){

				}else{

				}
				break;

			case 23:
				if(reverse){

				}else{

				}
				break;
			case 24:
				if(reverse){

				}else{

				}
				break;


		}
	}


	$(window).scroll(function(){
		var nowScroll = $(window).scrollTop();

		if( nowScroll >= storyArea_pos && nowScroll < storyArea_end_pos ){
			if(!nowStoryMode){
				activateStoryMode()
			}

		}else if(nowScroll >= storyArea_pos){
			if(nowStoryMode){
				endStoryMode()
			}
		}else if(nowScroll < storyArea_pos){
			if(nowStoryMode){
				cancelStoryMode()
			}
		}

	});

});



function sendSns(s) {
  var url = encodeURIComponent(location.href),
	  txt = encodeURIComponent($("title").html());
  switch (s) {
    case 'facebook':
      window.open('http://www.facebook.com/sharer/sharer.php?u=' + url);
      break;
    case 'twitter':
      window.open('http://twitter.com/intent/tweet?text=' + txt + '&url=' + url);
      break;
  }
}
