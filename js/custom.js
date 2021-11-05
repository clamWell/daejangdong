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
		nowStage = 1;

	function makeStoryDefault(){
		var nowChapter = 1,
			nowYear = 2009,
			nowStage = 1;

		$("svg").children("g").hide();
		$("svg").children("path").hide();
		$("svg").children("text").hide();

		$("#b-01").show();
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
		$("#p-g1-08").show();
		$("#p-g1-09").show();

	/*	$("#p-g2-01").show();
		$("#p-g2-02").show();
		$("#p-g2-04").show();*/

		$("#line01").show();
		$("#line02").show();
		$("#line03").show();
		$(".svg-holder").addClass("chapter1");

		$(".arrow-prev").hide();
	};

	var checkChapter = function(stage){
		if(stage<=3){
			nowChapter = 1;
		}else if(stage>3){
			nowChapter = 2;
		} // 추후 추가
		console.log(nowChapter);
		return nowChapter;
	}

	//다음 
	$(".arrow-next").on("click", function(e){
		e.preventDefault()

		nowStage = nowStage + 1;
		checkChapter(nowStage);
		adjustTextBox(nowStage);
		
	});
	//이전
	$(".arrow-prev").on("click", function(e){
		e.preventDefault()
		nowStage = nowStage - 1;
		checkChapter(nowStage);
		adjustTextBox(nowStage);
	});
	
	function adjustTextBox(stage){
		var stage = stage || 1;

		console.log(stage );
		
		$(".each-story").hide();
		$(".each-story").eq(stage-1).fadeIn();

	};


	//처음 스타트
	$("#START_STORY").on("click", function(){
		$(".cover").fadeOut();

		$(".stage-info .chapter-name").animate({"top":"0px", "opacity":"1"}, 1000, "easeOutCirc");
		$(".stage-info .year").delay(300).animate({"top":"0px", "opacity":"1"}, 1000, "easeOutCirc");
		$(".stage-info .stage-title").delay(600).animate({"top":"0px", "opacity":"1"}, 1000, "easeOutCirc", function(){
			$(".st-1").fadeIn(1000);
			$(".svg-area").addClass("start");
		});
	});

	

	function drawStage(n){
		switch (n){
			
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
