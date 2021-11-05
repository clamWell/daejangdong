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
		if(stage<=3){
			nowChapter = 1;
		}else if(stage>3){
			nowChapter = 2;
		} // 추후 추가
		console.log("챕터: "+nowChapter);
		return nowChapter;
	}

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
