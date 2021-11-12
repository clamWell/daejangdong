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

	var tooltipPersonData = [
	  {
		"name": "남욱",
		"code": "namuk",
		"birth": 1973,
		"occu": "변호사",
		"position": "천화동인 4호 소유주, 대장동 민간개발 4인방 중 1인"
	  },
	  {
		"name": "정영학",
		"code": "jungyounghak",
		"birth": 1968,
		"occu": "회계사",
		"position": "천화동인 5호 소유주, 대장동 민간개발 4인방 중 1인"
	  },
	  {
		"name": "김만배",
		"code": "kimmanbae",
		"birth": 1965,
		"occu": "기자",
		"position": "천화동인 5호 소유주, 대장동 민간개발 4인방 중 1인"
	  },
	  {
		"name": "유동규",
		"code": "yoodonggyu",
		"birth": 1969,
		"occu": "공직자",
		"position": "화천대유 대주주, 천하동인 1호 소유주, 부인이 천하동인 2호 소유주"
	  },
	  {
		"name": "정민용",
		"code": "jungminyong",
		"birth": 1974,
		"occu": "전 변호사 / 투자사업실장",
		"position": "성남도시공사 투자사업실장으로 대장동 부동산 개발 기획"
	  },
	  {
		"name": "최윤길",
		"code": "choiyoungil",
		"birth": 1959,
		"occu": "전 시의원",
		"position": "화천대유 부회장, 성남시의원 시절 대장동 민간개발 업체와 커넥션 의혹"
	  },
	  {
		"name": "박영수",
		"code": "parkyoungsoo",
		"birth": 1952,
		"occu": "법조인",
		"position": "화천대유 고문, 딸이 화천대유에서 근무, 변호사 시절 남욱 변호 담당"
	  }
	];
	$(".clickAble").on("click", function(){
		var el_id = $(this).attr("data-tooltip-id");
		//console.log(el_id);
		//console.log(mouseX, mouseY)
		makeTooltip(el_id);
	});

	/*
	var hoverElPreColor;
	$(".clickAble").on("mouseover", function(){
		$(this).find("ellipse").css({"fill":"#cddc39"});
		
	});
	$(".clickAble").on("mouseleave", function(){
		$(this).find("ellipse").css({"fill":"inherit"});
		
	});*/

	function makeTooltip(el_id){
		var _data;
		var code = el_id || "namuk";

		tooltipPersonData.forEach(function(v,i,a){
			if(v.code == code){
				_data = v; 
			}
		})
		$(".tooltip .tooltip-wrap .col-2 .info ul li span.name").html(_data.name);
		$(".tooltip .tooltip-wrap .col-2 .info ul li span.birth").html(_data.birth);
		$(".tooltip .tooltip-wrap .col-2 .info ul li span.occu").html(_data.occu);
		$(".tooltip .tooltip-wrap .col-2 .info ul li span.position_now").html(_data.position);
		$(".tooltip .tooltip-wrap .col-2 .thumbs img").attr("src", "img/"+_data.code+".jpg")

		showTooltip();
	}

	function showTooltip(){
		$(".tooltip").css({"left":mouseX+40, "top":mouseY});
		$(".tooltip").show();
	};
	function hideTooltip(){
		$(".tooltip").css({"left":0, "top":0});
		$(".tooltip").hide();
	};

	$(".tooltip-close").on("click", function(){
		hideTooltip();
	});

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

        $(".border-div").addClass("border-show");
           
        if( isEverStart == true ){
            $(".cover").fadeOut();
        }
	}

	var cancelStoryMode = function(){
		console.log("스토리모드 실행 취소");
		nowStoryMode = false;
		$(".storytelling-area").find(".fixed-area").removeClass("fixed");
		$(".storytelling-area").find(".fixed-area").removeClass("fixed-bottom");
		$(".interactive-header").removeClass("storyMode");        $(".border-div").removeClass("border-show");
        $(".cover").fadeIn();


	};

	var endStoryMode = function(){
		console.log("스토리모드 실행 끝");
		nowStoryMode = false;
		$(".storytelling-area").find(".fixed-area").removeClass("fixed");
		$(".storytelling-area").find(".fixed-area").addClass("fixed-bottom");
		$(".interactive-header").removeClass("storyMode");
        $(".border-div").removeClass("border-show");
        $(".cover").fadeIn();

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
		//$("#gwangju_1_").show();
		$("#p-g1-01").show();
		$("#p-g1-02").show();
		//$("#p-g1-03").show();
		//$("#p-g1-04").show();
		$("#p-g1-05").show();
		$("#p-g1-06").show();
		//$("#p-g1-07").show();
		//$("#p-g1-08").show();
		//$("#p-g1-09").show();



		$(".arrow-prev").hide();
		$(".arrow-next").hide();
	};

	
	var checkChapter = function(stage){
		var ad_chapter;
		if(stage<=5){
			ad_chapter = 1;
		}else if(stage>5 &&stage<=9){
			ad_chapter = 2;
		}else if(stage>9&&stage<=12){
			ad_chapter = 3;
		}else if(stage>12&&stage<=16){
			ad_chapter = 4;
		}else if(stage>16&&stage<=20){
			ad_chapter = 5;
		}else if(stage>20&&stage<=28){
			ad_chapter = 6;
		}else if(stage>28&&stage<=36){
			ad_chapter = 7;
		}else if(stage>36){
			ad_chapter = 8;
		}

		if (nowChapter == ad_chapter ){

		}else{
			nowChapter = ad_chapter;
			hideChapterTitle();
			changeChapter(nowChapter)
		}

		//return nowChapter;
	}

	var chapterYearList = ["2009","2010","2011", "2012~2013","2014","2015","2016~2019","2019~현재"],
		chapterTitleList = ["태초에 대장동,<br/> 그리고 토건세력이 있었다", "2010년 시의회를 포섭한 꾼들, <br/>공무원을 만났다", "계속된 인재영입<br/>김만배·박영수의 등장","대장동 민-관 공동개발 공식화<br/>거대한 판이 깔렸다","선수교체<br/>김만배, 대장동에 뛰어들다","거대한 판의 클라이막스","국회·법원 등에 업고<br/>불타는 부동산 시장 달리다", "돈 냄새로 모였던 이들<br/>균열이 생기다"]
	var changeChapter= function(ch){
		$(".chapter-name").html("chapter. "+ch);
		$(".stage-info .year").html(chapterYearList[ch-1]);
		$(".stage-info .stage-title").html(chapterTitleList[ch-1]);
        $(".stage-navigator ul li").removeClass("on");
        $(".stage-navigator ul li").eq(ch-1).addClass("on");
		showChapterTitle();

	};

	//다음
	$(".arrow-next").on("click", function(e){
		e.preventDefault()
		nowStageBefore = nowStage;
		nowStage = nowStage + 1;
		if(nowStage>1 && nowStage<41){
			$(".arrow-prev").fadeIn();
		}else if(nowStage>=41){
			$(".arrow-next").hide();
			$(".arrow-down").fadeIn();
		}
		checkChapter(nowStage);
		adjustTextBox(nowStage);
		drawStage(nowStage,nowStageBefore);
        adjustBottomProgress(nowStage);

	});
	//이전
	$(".arrow-prev").on("click", function(e){
		e.preventDefault()
		nowStageBefore = nowStage;
		nowStage = nowStage - 1;
		if(nowStage<=1){
			$(".arrow-prev").hide();
		}else if(nowStage<41){
			$(".arrow-next").show();
			$(".arrow-down").hide();
		}
		checkChapter(nowStage);
		adjustTextBox(nowStage);
		drawStage(nowStage,nowStageBefore);
        adjustBottomProgress(nowStage);
	});
    
    function adjustBottomProgress(stage){
		var totalStage = 41;
		$(".progress-body .now").stop().animate({"width":100/totalStage*stage+ "%"}, 400, "swing");
	};


    $(".stage-navigator ul li").eq(0).addClass("on");
	$(".stage-navigator ul li").on("click", function(e){
		e.preventDefault()

        $(".stage-navigator ul li").removeClass("on");
        $(this).addClass("on");
        
        $(".stage-navigator ul").addClass("block");

		var _year = $(this).attr("data-index");
		var startStage = 1;
		switch (_year) {
			case "2009":
				startStage = 1;
				break;
			case "2010":
				startStage = 6;
				break;
			case "2011":
				startStage = 10;
				break;
			case "2012_2013":
				startStage = 13;
				break;
			case "2014":
				startStage = 17;
				break;
			case "2015":
				startStage = 21;
				break;
			case "2016_2019":
				startStage = 29;
				break;
			case "2019_pre":
				startStage = 37;
				break;
			default:
				startStage = 1;
		}

		if (nowStage>startStage) {
			for(i=nowStage; i>startStage; i--){
				drawStage(i-1,i);
				nowStageBefore = nowStage;
				nowStage = nowStage - 1;

                if(i == startStage+1){
                    $(".stage-navigator ul").removeClass("block");
                }
			}
		} else if (nowStage==startStage){
			
		} else {
			for(i=nowStage; i<startStage; i++){
				drawStage(i+1,i);				
				nowStageBefore = nowStage;
				nowStage = nowStage + 1;
                if(i == startStage-1 ){
                    $(".stage-navigator ul").removeClass("block");
                }
			}
		}
		checkChapter(nowStage);
		adjustTextBox(nowStage);
        adjustBottomProgress(nowStage);
		if(nowStage<=1){
			$(".arrow-prev").hide();
		}else if(nowStage>1 && nowStage<41){
			$(".arrow-prev").fadeIn();
			$(".arrow-next").show();
			$(".arrow-down").hide();
		} else if(nowStage>=41){
			$(".arrow-next").hide();
			$(".arrow-down").fadeIn();
		}
        
	});

	$(".arrow-down").on("click", function(e){
		e.preventDefault()
		$("html, body").animate({scrollTop: $(".outro").offset().top - 200}, 1200, "easeOutCubic");
	});


	function adjustTextBox(stage){
		var stage = stage || 1;

		console.log("스테이지: "+stage);

		$(".each-story").hide();
		$(".each-story").eq(stage-1).fadeIn(700);

	};


	//처음 스타트
    var isEverStart = false;
	$("#START_STORY").on("click", function(){
        isEverStart = true;
		$(".cover").fadeOut();

		$(".stage-info .chapter-name").animate({"top":"0px", "opacity":"1"}, 700, "easeOutCirc");
		$(".stage-info .year").delay(300).animate({"top":"0px", "opacity":"1"}, 700, "easeOutCirc");
		$(".stage-info .stage-title").delay(600).animate({"top":"0px", "opacity":"1"}, 500, "easeOutCirc", function(){
			$(".st-1").fadeIn(500);
			$(".svg-area").addClass("start");
			$(".arrow-next").fadeIn();
		});
	});

	function hideChapterTitle(){
		$(".stage-info .chapter-name").css({"top":"-20px", "opacity":"0"});
		$(".stage-info .year").css({"top":"-20px", "opacity":"0"});
		$(".stage-info .stage-title").css({"top":"-20px", "opacity":"0"});
	};

	function showChapterTitle(){
		$(".stage-info .chapter-name").animate({"top":"0px", "opacity":"1"}, 1000, "easeOutCirc");
		$(".stage-info .year").delay(300).animate({"top":"0px", "opacity":"1"}, 1000, "easeOutCirc");
		$(".stage-info .stage-title").delay(600).animate({"top":"0px", "opacity":"1"}, 1000, "easeOutCirc");
	}

	function drawStage(n, n_before){
		var reverse = (n - n_before>0)? false : true;

		if(reverse){
			console.log("이전스토리")
		}else{
			console.log("다음스토리")
		}

		switch (n){
			case 1: //case1은 reverse 케이스 밖에 없음
				// 화살표
				$("#line01").hide();
				$("#line02").hide();
				$("#line03").hide();
				$("#line03-02").hide();
				$("#p-g1-08").hide();
				$("#gwangju_1_").hide();
				$(".gwangju_text").hide();

				// 사람
				$("#p-g1-09").hide();
				$("#p-g1-07").hide();
				$("#p-g1-04").hide();
				$("#p-g1-03").hide();
				break;
			case 2:
				if(reverse){
					$("#line03").hide();
					$("#p-g1-09").show();

					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.3) translate(0px,10px)"});
					$("#gwangju_1_").show();
					$("#line01").show();
					$("#line02").show();
					$("#line03").show();
					$("#line03-02").show();

					$("#p-g1-08 ellipse").css({"stroke":"inherit", "stroke-width":"0px"});
					$("#busan").hide();
					$("#line05-01").hide();
					$("#line05-02").hide();
					$("#line05-03").hide();
					$(".st39 st40 st41").hide();
				}else{
					$("#gwangju_1_").show();
					$("#p-g1-03").show();
					$("#p-g1-07").show();

					$("#line01").show();
					$("#line02").show();
					$("#p-g1-08").show();

					$("#line03").show();
					$("#line03-02").show();
					$("#p-g1-09").show();
					$("#p-g1-04").show();

					
				}
				break;
			case 3:
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.3) translate(0px,-50px)"});
					$("#busan").show();
					$("#line05-01").hide();
					$("#line05-02").hide();
					$("#line05-03").hide();
					$("#p-g2-01").hide();
					$("#p-g2-02").hide();
					$("#b-01").hide();

					$("#line05-01").show();
					$("#line05-02").show();
					$("#line05-03").show();
					$("#p-g1-08 ellipse").css({"stroke":"#111", "stroke-width":"3px"});
				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.3) translate(0px,-50px)"});
					$("#gwangju_1_").hide();
					$("#line01").hide();
					$("#line02").hide();
					$("#line03").hide();
					$("#line03-02").hide();

					$("#p-g1-08 ellipse").css({"stroke":"#111", "stroke-width":"3px"});
					$("#busan").show();
					$("#line05-01").show();
					$("#line05-02").show();
					$("#line05-03").show();

				}
				break;
			case 4:
				if(reverse){ // 5>4
					$("#p-g2-04").hide();
				}else{ // 3>4
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.3) translate(0px,150px)"});

					$("#p-g1-08 ellipse").css({"stroke":"inherit"});
					$("#line05-01").hide();
					$("#line05-02").hide();
					$("#line05-03").hide();

					$("#b-01").show();
					$("#p-g2-01").show();
					$("#p-g2-02").show();


				}
				break;
			case 5:
				if(reverse){ // 6>5
					$("#b-01").show();
					$("#b-03").hide();
					$("#p-g2-04").css({"opacity":"1.0", "transform":"translate(0px, 0px)"});
				}else{ // 4>5
					$("#p-g2-04").show();
				}
				break;
			case 6: //chater 2 시작
				if(reverse){ // 7>6
					$("#p-g2-03").hide();
					$("#p-g2-03 ellipse").css({"stroke":"inherit"});
					$("#p-g1-06 ellipse").css({"stroke":"inherit"});
				}else{ // 5>6

					$("#b-01").hide();
					$("#b-03").show();
					$("#p-g2-04").css({"opacity":"0.2", "transform":"translate(30px, 0px)"});
				}
				break;
			case 7:
				if(reverse){ // 8>7
					$("#line04-01").hide();
					$("#line04-02").hide();
				}else{ // 6>7
					
					$("#p-g2-03").show();
					$("#p-g2-03 ellipse").css({"stroke":"#111", "stroke-width":"3px"});
					$("#p-g1-06 ellipse").css({"stroke":"#111", "stroke-width":"3px"});
				}
				break;
			case 8:
				if(reverse){ // 9>0
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.3) translate(0px,150px)"});
					$("#p-g1-01").css({"opacity":"1.0"});
					$("#p-g1-02").css({"opacity":"1.0"});
					$("#p-g1-03").css({"opacity":"1.0"});
					$("#p-g1-07").css({"opacity":"1.0"});

					$("#p-g2-03 ellipse").css({"stroke":"#111", "stroke-width":"3px"});
					$("#p-g1-06 ellipse").css({"stroke":"#111", "stroke-width":"3px"})

				}else{ // 7>8
					$("#line04-01").show();
					$("#line04-02").show();
				}
				break;
			case 9:
				if(reverse){ // 10>9
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(100px, 50px)"});

					$("#p-g1-01").show();
					$("#p-g1-02").show();
					$("#p-g1-03").show();
					$("#p-g1-07").show();
					$("#line04-01").show();
					$("#line04-02").show();

					$("#p-g1-10").hide();
					$("#line06").hide();
				}else{ // 8>9
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(100px, 50px)"});
					$("#p-g2-03 ellipse").css({"stroke":"inherit"});
					$("#p-g1-06 ellipse").css({"stroke":"inherit"});
					$("#p-g1-01").css({"opacity":"0.2"});
					$("#p-g1-02").css({"opacity":"0.2"});
					$("#p-g1-03").css({"opacity":"0.2"});
					$("#p-g1-07").css({"opacity":"0.2"});
				}
				break;
			case 10: // chapter 3 시작
				if(reverse){ // 11>10
					$("#b-04").hide();
					$("#p-g3-01").hide();
					$("#line09-01").hide();
					$("#line09-03").hide();
					$("#p-g3-02").hide();

				}else{ // 9>10
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(100px, -20px)"});
					$("#p-g1-01").hide();
					$("#p-g1-02").hide();
					$("#p-g1-03").hide();
					$("#p-g1-07").hide();
					$("#line04-01").hide();
					$("#line04-02").hide();

					$("#p-g1-10").show();
					$("#line06").show();

				}
				break;
			case 11:
				if(reverse){ // 12>11
					$("#line08").hide();
					$("#line07").hide();
				}else{ // 10>11
					$("#b-04").show();
					$("#p-g3-01").show();
					$("#busan").show();
					$("#line09-01").show();
					$("#line09-03").show();
					$("#p-g3-02").show();

				}
				break;
			case 12:
				if(reverse){ // 13>12
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.2) translate(0px,-100px)"});

					$("#p-g3-02").css({"opacity":"1.0"});

					$("#p-g1-08").css({"transform":"translate(0px, 0px)"});
					$("#p-g1-09").css({"transform":"translate(0px, 0px)"});
					$("#p-g1-10").css({"transform":"translate(0px, 0px)"});

					$("#line09-01").show();
					$("#line07").show();
					$("#line08").show();

					$("#line10-01").hide();
					$("#line10-02").hide();

					$("#b-02").show();
					$("#b-02-title-01").show();

					$("#b-02-02").hide();
					$("#b-02-title-02").hide();

				}else{ // 11>12
					$("#line08").show();
					$("#p-g3-02").show();
					$("#line07").show();
				}
				break;
			case 13: // chapter 4 시작
				if(reverse){ // 14>13
					$("#b-05").hide();
					$("#b-03").show();
					$("#b-03-02").hide();
					$("#b-03-title-2").show();

					$("#p-g2-02").css({"transform":"translate(0px, 0px)"});
					$("#p-g2-05").css({"transform":"translate(0px, 0px)"});

					$("#p-g2-06").hide();
					$("#p-g2-05").hide();

					$("#line10-01").show();
					$("#line10-02").show();

				}else{ // 12>13
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(60px, 200px)"});

					$("#b-02").hide();
					$("#b-02-title-01").hide();
					$("#line07").hide();

					$("#b-02-02").show();
					$("#b-02-title-02").show();
					$("#p-g1-08").css({"transform":"translate(0px, -60px)"});
					$("#p-g1-09").css({"transform":"translate(0px, -60px)"});
					$("#p-g1-10").css({"transform":"translate(0px, -60px)"});

					$("#line09-01").hide();
					$("#line08").hide();
					$("#line06").hide();

					$("#p-g3-02").css({"opacity":"0.2"});

					$("#line10-01").show();
					$("#line10-02").show();



				}
				break;

			case 14:
				if(reverse){
					$("#line11").hide();
					$("#line12-01").hide();

				}else{
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
				}
				break;
			case 15:
				if(reverse){ 
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(30px, 200px)"});
					$("#line11").show();
					$("#line12-01").show();
					$("#a-02").hide();
					$("#line12-02").hide();

				}else{ 
					$("#line11").show();
					$("#line12-01").show();

				}
				break;
			case 16:
				if(reverse){ // 17>16
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.2) translate(-50px, 70px)"});

					$("#line09-03").show();
					$("#p-g3-02").show();
					$("#line12-02").show();
					$("#line12-01").show();
					$("#line13").hide();
					$("#a-02").show();
					$("#a-03").hide();

				}else{ // 15>16
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.2) translate(-50px, 70px)"});
					$("#line11").hide();	
					$("#line12-02").show();

					$("#a-02").show();

				}
				break;
			case 17: //chapter 5 시작
				if(reverse){ // 18>17
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.2) translate(0px, -50px)"});

					$("#p-g1-11").hide();
					$("#line09-01").hide();
					$("#line09-02").hide();
					$("#line17").hide();

				}else{ // 16>17
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.2) translate(0px, -50px)"});

					$("#line09-03").hide();
					$("#p-g3-02").hide();
					$("#line12-02").hide();
					$("#line12-01").hide();
					$("#line13").show();
					$("#a-02").hide();
					$("#a-03").show();

				}
				break;
			case 18:
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(30px, -150px)"});
					
					$("#line14").hide();
					$("#b-02-title-02").show();
					$("#line13").show();
					$("#b-06").hide();
					$("#p-g2-07").hide();
					$("#p-g2-08").hide();

				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(30px, -150px)"});

					$("#p-g1-11").show();
					$("#line09-01").show();
					$("#line09-02").show();
					$("#line17").show();


				}
				break;
			case 19:
				if(reverse){
					$("#b-03-02").show();
					$("#b-07").hide();
					$("#p-g2-02").css({"transform":"translate(25px, 0px)"});
					$("#line47").hide();

				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(30px, 150px)"});

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
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(30px, 150px)"});
					$("#p-g2-02").css({"transform":"translate(-10px, 0px)"});

					$("#line14").show();
					$("#line17").show();
					$("#b-07").show();
					$("#line09-02").show();
					$("#line47").show();

				}else{
					$("#b-03-02").hide();
					$("#b-07").show();
					$("#p-g2-02").css({"transform":"translate(-10px, 0px)"});
					$("#line47").show();
				}
				break;

			case 21: //chapter 6 시작
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1)"});

					$("#a-06").hide();
					$("#a-07").hide();

				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1)"});
					$("#line47").hide();
					$("#line14").hide();
					$("#line17").hide();
					$("#b-07").hide();
					$("#line09-02").hide();
					$("#p-g2-02").css({"transform":"translate(25px, 0px)"});
				}
				break;

			case 22:
				if(reverse){
					$(".person-ch ellipse").css({"fill":"#007E68", "stroke":"inherit"});
					$(".person-ch text").css({"fill":"#fff", "font-weight":"400"});

					$("#line24-2").hide();
					$("#a-08").hide();

				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.3) translate(0px,100px)"});

					$("#a-06").show();
					$("#a-07").show();
				}
				break;

			case 23:
				if(reverse){
					$("#p-g2-07 ellipse").css({"stroke":"inherit"});
					$("#p-g1-10 ellipse").css({"fill":"#fff", "stroke":"#dac776", "stroke-width":"3px"});

				}else{
					$("#a-08").show();
					
					$("#line24-2").show();
					//$(".person-ch ellipse").css({"fill":"#fff", "stroke":"#dac776", "stroke-width", "3px"});
					$(".person-ch ellipse").css({"fill":"#fff", "stroke":"#dac776", "stroke-width":"3px"});
					$(".person-ch text").css({"fill":"#111", "font-weight":"bold"});

				}
				break;
			case 24:
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.3) translate(0px,100px)"});
					$("#p-g2-07 ellipse").css({"stroke":"#111", "stroke-width":"3px"});
					$("#p-g1-10 ellipse").css({"stroke":"#111", "stroke-width":"3px"});
					$("#b06-text-01").hide();
				
				}else{
					$("#p-g2-07 ellipse").css({"stroke":"#111", "stroke-width":"3px"});
					$("#p-g1-10 ellipse").css({"stroke":"#111", "stroke-width":"3px"});


				}
				break;
			case 25:
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(-70px,180px)"});
					$("#line19").hide();
					$("#b-05").find(".st62").show();
	
				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(-70px,180px)"});

					$("#p-g2-07 ellipse").css({"stroke":"inherit", "stroke-width":"3px"});
					$("#p-g1-10 ellipse").css({"stroke":"#dac776", "stroke-width":"3px"});
					$("#b06-text-01").show();

				}
				break;
			case 26:
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.3) translate(-20px,150px)"});
					$("#line19").show();
					$("#line18").hide();
					$("#p-g2-06").show();
					$("#b-05").find(".st62").hide();
		
				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.3) translate(-20px,150px)"});
					$("#line19").show();
					$("#b-05").find(".st62").hide();

				}
				break;
			case 27:
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(30px,150px)"});

					$("#line18").show();

					$("#p-g4-01").hide();
					$("#line21-02").hide();
					$("#p-g3-03").hide();
	
				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(30px,150px)"});
					$("#line19").hide();
					$("#line18").show();
					$("#b-05").find(".st62").show();
					$("#p-g2-06").hide(); // 황무성 삭제

				}
				break;
			case 28:
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.3) translate(30px,-120px)"});

					$("#b06-text-01").show();
					$("#line24-2").show();
					$("#line21-02").show();
					$("#line09-01").show();
					$("#busan").show();
					$("#a-03").show();
					$("#b-05").show();
					$("#b-06").show();

					$("#a-04").hide();
					$("#a-09").hide();
					$("#b-05-2").hide();
					$("#line25-01").hide();
					$("#a-09-title-01").hide();

					$("#p-g2-04").css({"transform":"translate(30px, 0px)"});
					$("#p-g2-05").css({"transform":"translate(20px, 0px)"});
					$("#p-g2-07").css({"transform":"translate(0px, 0px)"});
					$("#p-g2-08").css({"transform":"translate(0px, 0px)"});
	
				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.3) translate(30px,-120px)"});
					$("#line18").hide();

					$("#p-g4-01").show();
					$("#line21-02").show();
					$("#p-g3-03").show();

				}
				break;

			case 29: // chapter 7 
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1) translate(0px,0px)"});
					$("#line21-01").hide();
					$("#line21-03").hide();
	
				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1) translate(0px,0px)"});

					//성남도시개발공사 <=>유동규분리
					$("#b-05").hide();
					$("#b-06").hide();
					$("#b-05-2").show();
					$("#p-g2-04").css({"transform":"translate(47px,-26px)"});
					$("#p-g2-05").css({"transform":"translate(153px,-27px)"});
					$("#p-g2-07").css({"transform":"translate(55px,-16px)"});
					$("#p-g2-08").css({"transform":"translate(50px,-16px)"});
					
					$("#line25-01").show();
					

					$("#b06-text-01").hide();
					$("#line24-2").hide();
					$("#line21-02").hide();
					$("#line17").hide();
					$("#line09-01").hide();
					$("#busan").hide();
					$("#a-03").hide();

					$("#a-04").show();
					$("#a-09").show();
					$("#a-09-title-01").show();
				}
				break;

			case 30: 
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(0px,-100px)"});

					$("#line21-01").show();
					$("#line21-03").show();
					
					$("#p-g1-01").css({"opacity":"0.2", "transform":"translate(0px,0px)"});
					$("#p-g1-01").hide();
					$("#line27").hide();
					$("#line30").hide();
					$("#a-11").hide();
	
				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(0px,-100px)"});

					$("#line21-01").show();
					$("#line21-03").show();
				}
				break;

			case 31: 
				if(reverse){
					$("#p-g1-01").show();
					$("#line27").show();
					$("#line30").show();
					$("#a-11").show();
					$("#a-04").show();
					$("#p-g3-01").css({"transform":"translate(0px,0px)"});
					$("#p-g3-03").css({"transform":"translate(-145px,0px)"});

					$("#p-g3-04").hide();
					$("#p-g3-05").hide();
					$("#p-g3-06").hide();
					$("#p-g3-07").hide();
					$("#line29").hide();
	
				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(50px,-100px)"});

					$("#line21-01").hide();
					$("#line21-03").hide();

					$("#p-g1-01").css({"opacity":"1", "transform":"translate(-20px,-30px)"});
					$("#p-g1-01").show();
					$("#line27").show();
					$("#line30").show();
					$("#a-11").show();
				}
				break;

			case 32: 
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(50px,-100px)"});
					$("#p-g3-02").css({"opacity":"0.2"});
					$("#p-g3-02").hide();
					$("#line39").hide();	
	
				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(50px,-100px)"});

					$("#p-g1-01").hide();
					$("#line27").hide();
					$("#line30").hide();
					$("#a-11").hide();
					$("#a-04").hide();
					$("#p-g3-01").css({"transform":"translate(0px,-10px)"});
					$("#p-g3-03").css({"transform":"translate(0px,0px)"});
					$("#p-g3-04").show();
					$("#p-g3-05").show();
					$("#p-g3-06").show();
					$("#p-g3-07").show();
					$("#line29").show();

				}
				break;

			case 33: 
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(100px,-100px)"});
					$("#line39").show();

					$("#p-g3-08").hide();
					$("#line38").hide();

					$("#p-g3-03 ellipse.st102").css({"stroke":"#E8371E", "stroke-width":"1px"});
					$("#p-g1-10 ellipse.st8").css({"stroke":"#dac776", "stroke-width":"3px"});
					$("#p-g2-01 ellipse.st67").css({"stroke":"inherit"});
	
				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(100px,-100px)"});
					$("#p-g3-02").css({"opacity":"1", "transform":"translate(0px,-10px)"});
					$("#p-g3-02").show();
					$("#line39").show();

				}
				break;

			case 34: //권순일 등장
				if(reverse){ 
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.1) translate(100px,0px)"});
	
				}else{
					
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.1) translate(100px,0px)"});
					$("#line39").hide();
					$("#p-g3-08").show();
					$("#line38").show();
					$(".law-connect ellipse").css({"stroke":"#111", "stroke-width":"3px"});

				}
				break;

			case 35: 
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(0px,-160px)"});
					$("#line40").hide();
					$("#line37").hide();
	
				}else{ //강찬우
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(0px,-160px)"});


				}
				break;

			case 36: 
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(70px,70px)"});
					$("#p-g1-10 ellipse").css({"stroke":"#dac776", "stroke-width":"3px"});
					$("#p-g3-03 ellipse").css({"stroke":"#E8371E","stroke-width":"1px"});
					$("#p-g2-01 ellipse").css({"stroke":"inherit","stroke-width":"1px"});

					$("#line25-01").show();
					$("#a-09-title-01").show(); 
					$("#a-09-title-02").hide(); 

					$("#line40").show();
					$("#line38").show();

					$(".law-connect ellipse").css({"stroke":"#111", "stroke-width":"3px"});
					$("#p-g2-02 ellipse").css({"stroke":"inherit","stroke-width":"1px"});
					$("#p-g1-06 ellipse").css({"stroke":"#dac776", "stroke-width":"3px"});
				}else{ //권순일
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(70px,70px)"});
					$("#line40").show();
					$("#line37").show();


				}
				break;

			case 37: //chapter 8 시작 
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.3) translate(20px,70px)"});

					$("#p-g1-07").css({"opacity":"0.2", "transform":"translate(0px,0px)"});
					$("#p-g1-07").hide();
					$("#line46").hide();
					$(".p-record ellipse").css({"stroke":"#111", "stroke-width":"3px"});
	
				}else{
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.3) translate(20px,70px)"});
					$("#p-g1-10 ellipse").css({"stroke":"#dac776", "stroke-width":"3px"});
					$("#p-g3-03 ellipse").css({"stroke":"#E8371E","stroke-width":"1px"});
					$("#p-g2-01 ellipse").css({"stroke":"inherit","stroke-width":"1px"});
					
					$("#line25-01").hide();
					$("#a-09-title-01").hide(); 
					$("#a-09-title-02").show(); 

					$(".p-record ellipse").css({"stroke":"#111", "stroke-width":"3px"});
					$("#line40").hide();
					$("#line38").hide();

				}	
				break

			case 38:
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(50px,0px)"});
					$("#p-g1-07").show();
					$("#line46").show();

					$("#line32-01").hide();
					$("#line32-02").hide();
	
				}else{//김용철 소송
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(50px,0px)"});
					$("#p-g1-06 ellipse").css({"stroke":"#dac776"});
					$("#p-g2-02 ellipse").css({"stroke":"inherit"});
					$("#p-g1-10 ellipse").css({"stroke":"#dac776"});
					
					$("#p-g1-07").css({"opacity":"1", "transform":"translate(100px,0px)"});
					$("#p-g1-07").show();
					$("#line46").show();

				}	
				break

			case 39:
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(50px,100px)"});
					$("#line32-01").show();
					$("#line32-02").show();

					$("#line31").hide();
				}else{//정재창 협박
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(50px,100px)"});
					$("#p-g1-07").hide();
					$("#line46").hide();

					$("#line32-01").show();
					$("#line32-02").show();
				}	
				break

			case 40:
				if(reverse){
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(100px,100px)"});
					$("#line31").show();

					$("#line45").hide();
					$("#a-09-title-02").show(); 
					$("#a-09-title-03").hide(); 
				}else{//노래방
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.4) translate(100px,100px)"});
					$("#line32-01").hide();
					$("#line32-02").hide();
					$("#line31").show();
				}	
				break

			case 41:
				if(reverse){
	
				}else{//배당금, 마무리
					$(".svg-holder.chapter1 svg").css({"transform":"scale(1.1) translate(0px,0px)"});
					$("#line31").hide();

					$("#line45").show();
					$("#a-09-title-02").hide(); 
					$("#a-09-title-03").show(); 


				}	
				break


		}
	}


	$(window).scroll(function(){
		var nowScroll = $(window).scrollTop();
		var storyArea_pos = $(".storytelling-area").offset().top,
			storyArea_end_pos = $(".storytelling-area").offset().top + $(".storytelling-area").height()-screenHeight;

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

	var mouseX, mouseY;
	$(document).mousemove(function(e) {
		mouseX = e.clientX;
		mouseY = e.clientY;
	}).mouseover();

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
