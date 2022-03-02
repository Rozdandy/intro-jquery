$(document).ready(function() {
 

//  	// $("#stream1_btn").mouseleave(function() {
//  	// 	$(".stream1").removeClass('highlight_stream');
// 	// 	$(".stream2").removeClass('highlight_stream');
// 	// 	$(".stream3").removeClass('highlight_stream');
// 	//   	$(".stream1").addClass('highlight_stream');
// 	// });
// 	// $("#stream2_btn").on("click", function() {
// 	// 	$(".stream1").removeClass('highlight_stream');
// 	// 	$(".stream2").removeClass('highlight_stream');
// 	// 	$(".stream3").removeClass('highlight_stream');
// 	//   	$(".stream2").addClass('highlight_stream');
// 	// });
// 	// $("#stream3_btn").on("click", function() {
// 	// 	$(".stream1").removeClass('highlight_stream');
// 	// 	$(".stream2").removeClass('highlight_stream');
// 	// 	$(".stream3").removeClass('highlight_stream');
// 	//   	$(".stream3").addClass('highlight_stream');
// 	// });

// 	$("#stream1_btn").mouseenter(function() {
// 		$(".stream1").fadeTo(1000, 0.5);
// 		// $(".stream1").show("medium");
// 		// $(".stream1").show("fast");
// 		// $(".stream1").show(1000);
//    });

//    $("#stream2_btn").mouseenter(function() {
// 	$(".stream2").toggle("slow");
// 	// $(".stream2").toggle("fast");
// 	// $(".stream1").show("fast");
// 	// $(".stream1").show(1000);
// 	});


// $("p").click(function(){
//     $(this).slideToggle("slow");

// });

// $("button").mouseenter(function () {
//     $(this).removeClass("makeRed").addClass("makeBlue");
    
// });

// $("button").mouseleave(function () {
//     $(this).removeClass("makeBlue").addClass("makeRed");
    
// });





// $(".box").click(function () {
//         let classNames= $(this).attr("class").split(" ");
//         let boxClass=  classNames[0];
//         let  className=  classNames[1];
//         if ($(this).css("background-color") == "red"){
//                 $("." + className).css("background-color", "green");
//         }else {
//             $("." + boxClass).css("background-color", "green");
//             $("." + className).css("background-color", "red");
            
//         }
//     });



$(".box").click(function(){
    let classNames= $(this).attr("class").split(" ");
    let boxClass= classNames[0];
    let className= classNames[1];
    if ($(this).css("background-color") == "green") {
        $("." + className).css("background-color", "red");
    }else{
        $("." + boxClass).css("background-color", "green");
        $("." + className).css("background-color", "red");
    }

});






})
