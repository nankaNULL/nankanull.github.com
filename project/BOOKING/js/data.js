var JSONobjects= [
	{"jp":"1Rose immediately puts you at ease with her cheerful smile, calm approach & friendly personality. With over 3 years of experience from Latvia where she foused on both beauty and massage treatments, she is now massaging London better with us as she loves London and always enjoyed doing massages more than beauty treatments. When you just fancy melting away from the rest of the world for a blissful, real pampering treat from head to toe, we recommend you book a session with Rose!!"},
	{"jp":"2Susan has a deep passion for relaxing and rejuvenating people through her excellent massages. Her naturally warm, calm and flowing touch will unwind you into a state of bliss, or, if you wish, Susan can instead work firmer into your muscles for a more invigorating deeper session. Holistic massage is about the whole you,so enjoy her listening skills too - feel free to chat away during your session or remain totally silent if you prefer. Friendly, reliable, on time and a massage not to be missed."},
	{"jp":"3Rose immediately puts you at ease with her cheerful smile, calm approach & friendly personality. With over 3 years of experience from Latvia where she foused on both beauty and massage treatments, she is now massaging London better with us as she loves London and always enjoyed doing massages more than beauty treatments. When you just fancy melting away from the rest of the world for a blissful, real pampering treat from head to toe, we recommend you book a session with Rose!!"}
];
document.getElementById("jp1").innerHTML=JSONobjects[0].jp;
document.getElementById("jp2").innerHTML=JSONobjects[1].jp;

var JSONimages=[
{"img":"../image/Rose.png"},
{"img":"../image/Susan.png"},
{"img":"../image/Anne.png"},
{"img":"../image/Piper.png"},
{"img":"../image/Carol.png"},
{"img":"../image/Lisa.png"},
{"img":"../image/Josie.png"},
{"img":"../image/Kate.png"},
{"img":"../image/Chloe.png"},
{"img":"../image/Alice.png"},
{"img":"../image/Maria.png"},
{"img":"../image/Sam.png"},
{"img":"../image/Lara.png"},
{"img":"../image/Tia.png"},
{"img":"../image/Sarah.png"},
{"img":"../image/Penelope.png"},
{"img":"../image/Molly.png"},
{"img":"../image/Clara.png"},
{"img":"../image/Kylie.png"},
{"img":"../image/Lauren.png"},
];
for(var i=0;i<20;++i)
{
	document.getElementById("jimg["+i+"]").src=JSONimages[i].img;
}