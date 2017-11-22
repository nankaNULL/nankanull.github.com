/**
 *
 * @authors Your Name (you@example.org)
 * @date    2017-06-22 10:08:56
 * @version $Id$
 */

// $(".wizard").bootstrapWizard({
//     height: 700,
// });

// $(".modal").modal({
//     backdrop: false,
//     keyboard: false,
// })
// $(function () {
//     $('#timetable').jalendar({
//         customDay: '06/23/2017',
//         color: '#fff', // Unlimited Colors
//         color2: '#fff', // Unlimited Colors
//         lang: 'TR'
//     });
// });
// $(document).ready(function(){
//     $("#text-day input").click(function(){
//         $("#timetable").toggle(); //点击文本框弹出div
//         $("#timetable").click(function(e) {
//             e.stopPropagation(); //点击弹出的div不做反应
//         });
//     });
//     $(document).click(function() {
//         $("#timetable").hide(); //点击网页任意地方，div消失，与上面合起来就是点击除
//     }); //弹出的div之外的地方div消失
//     $("#timetable a").click(function(){
//         var thistext = $(this).text(); //获取点击的内容
//         $("#timetable").hide(); //div消失
//         $("#text-day input").val(thistext); //值自动填写到文本框中
//     });
// });
document.getElementById("text-day").flatpickr();
$('.text-time').wickedpicker({
    now: '5:00', twentyFour: false,showSeconds: false
});
