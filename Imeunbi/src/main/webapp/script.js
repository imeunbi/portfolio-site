//접속시간 구하기
function showCurrentClock(){
	var currentDate = new Date();
	var show_clock = document.getElementById('show_clock');
	show_clock.innerText = "접속시간 : ";
	//날짜 출력
	show_clock.innerText += currentDate.getFullYear()+"년"
							+(currentDate.getMonth()+1)+"월" //month값은 0부터 시작이라 +1
							+currentDate.getDate()+"일";
	//오전 오후 구하기 + 시간 구하기
	//12시 보다 크면 오후 -> 시간-12= 현재시간
	if(currentDate.getHours()>12){	
		show_clock.innerText += "오후" + (currentDate.getHours()-12) + "시";
	}else{
		show_clock.innerText += "오전" + currentDate.getHours() + "시";
	}
	//분 출력
	show_clock.innerText += currentDate.getMinutes()+"분";
}

//상단 네비게이션바 설정
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

//상단바 높이 구해서 내용 보이도록
$(function () {
    $(".navbar .menu li a").on("click", function(){
        var headerHeight = $(".navbar").outerHeight();	//메뉴바 높이 구하기
        var href = $(this).attr("href");	//버튼 링크 찾기
        var target = $(href == "#" || href == "" ? "body" : href);	//링크 대상 돔 찾기
        var position = target.offset().top - headerHeight;	//링크 대상 돔의 위치 구하기
        $("html, body").animate({ scrollTop: position }, 200, "swing");	//이동 + 효과
    });
});


    //사이드메뉴 - 화면 작은 사이즈일때
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    //home의 타이핑 부분 애니메이션
    var typed = new Typed(".typing", {
        strings: ["Designer", "Clerkr", "Developer"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: false
    });

    var typed = new Typed(".typing-2", {
        strings: ["Designer", "Clerkr", "Developer"],
        typeSpeed: 50,
        backSpeed: 30,
        loop: false
    });


    // (owl carousel) 슬라이드 설정
    $('.carousel').owlCarousel({
        margin: 20,
		autoplay: true,
		autoplayTimeOut: 1000,
        autoplayHoverPause: true,
        loop:true,
        responsive: { //반응형 사이즈 마다 옵션
			
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
			
        }
		
    });



});