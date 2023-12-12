//   testimonials js start


let swiper = new Swiper(".swiper", {
	// Optional parameters
	direction: "horizontal",
	loop: true,
	autoHeight: false,
	centeredSlides:true,
	slidesPerView: 1,
  autoplay:false,
  // Responsive breakpoints
  breakpoints: {
		640: {
      slidesPerView:1,
			  spaceBetween: 40,
    },
    992: {
      slidesPerView: 3,
			  spaceBetween: 40,
    }
  },

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
        clickable: true,
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}

	// And if we need scrollbar
	/*scrollbar: {
    el: '.swiper-scrollbar',
  },*/
});


//#region - start of - number counter animation
const counterAnim = (qSelector, start = 0, end, duration = 1000) => {
    const target = document.querySelector(qSelector);
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        target.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};
//#endregion - end of - number counter animation

document.addEventListener("scroll", () => {
    counterAnim("#count1", 0, 82, 1500);
    counterAnim("#count2", 0, 17, 1500);
    counterAnim("#count3", 0, 4, 1500);
    counterAnim("#count4", 0, 47, 1500);
    counterAnim("#count5", 10, 37, 1500);
});


// dashboard jquery

$(document).ready(function(){  
  $(".navi").hover(function(){  
    $(".topnav-img").attr('src','./assets/img/revamp-home-page/dashboard-illustration/edit_mode_button.png');
    $(this).css("color", "#08071D").css("font-weight", 600);
    }, function(){    
    $(".topnav-img").attr('src','./assets/img/revamp-home-page/dashboard-illustration/new-navbar.png');
    $(this).css("color", "#B1ADBE").css("font-weight", "normal");
  });  
});  

    // $(".navi").hover(function(){
    // $(".topnav-img").css("src", "url(./assets/img/revamp-home-page/dashboard-illustration/new-navbar.png)");
    // },
    // function() {
    // $(".topnav-img").css("src", "url(./assets/img/revamp-home-page/dashboard-illustration/new-sidenav.png)");
    // });

    // $(".sidenav-img").hover(function(){
    //   $(".sidebar").css("color", "#08071D").css("font-weight", 600);
    //   },
    //   function() {
    //   $(".sidebar").css("color", "#B1ADBE").css("font-weight", "normal");
    //   });

    //   $(".monthly-img").hover(function(){
    //     $(".month").css("color", "#08071D").css("font-weight", 600);
    //     },
    //     function() {
    //     $(".month").css("color", "#B1ADBE").css("font-weight", "normal");
    //     });

    //     $(".callre-img").hover(function(){
    //       $(".call-review").css("color", "#08071D").css("font-weight", 600);
    //       },
    //       function() {
    //       $(".call-review").css("color", "#B1ADBE").css("font-weight", "normal");
    //       });
          
    //       $(".sales-img").hover(function(){
    //         $(".sale-w").css("color", "#08071D").css("font-weight", 600);
    //         },
    //         function() {
    //         $(".sale-w").css("color", "#B1ADBE").css("font-weight", "normal");
    //         });


    //         $(".dailys-img").hover(function(){
    //           $(".daily-g").css("color", "#08071D").css("font-weight", 600);
    //           },
    //           function() {
    //           $(".daily-g").css("color", "#B1ADBE").css("font-weight", "normal");
    //           });

    //           $(".member-img").hover(function(){
    //             $(".member").css("color", "#08071D").css("font-weight", 600);
    //             },
    //             function() {
    //             $(".member").css("color", "#B1ADBE").css("font-weight", "normal");
    //             });

    //             $(".revenue-img").hover(function(){
    //               $(".revenue").css("color", "#08071D").css("font-weight", 600);
    //               },
    //               function() {
    //               $(".revenue").css("color", "#B1ADBE").css("font-weight", "normal");
    //               });

    //               $(".profits-img").hover(function(){
    //                 $(".profit").css("color", "#08071D").css("font-weight", 600);
    //                 },
    //                 function() {
    //                 $(".profit").css("color", "#B1ADBE").css("font-weight", "normal");
    //                 });

    //                 $(".edit-img").hover(function(){
    //                   $(".edit-mode-btn").css("color", "#08071D").css("font-weight", 600);
    //                   },
    //                   function() {
    //                   $(".edit-mode-btn").css("color", "#B1ADBE").css("font-weight", "normal");
    //                   });

    //                   $(".filter-img").hover(function(){
    //                     $(".filter-mobde-btn").css("color", "#08071D").css("font-weight", 600);
    //                     },
    //                     function() {
    //                     $(".filter-mobde-btn").css("color", "#B1ADBE").css("font-weight", "normal");
    //                     });
            





                        