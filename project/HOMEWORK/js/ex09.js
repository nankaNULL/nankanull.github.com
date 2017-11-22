var map = new BMap.Map("myMap");
var point = new BMap.Point(120.142146,30.257102);   
map.centerAndZoom(new BMap.Point(120.15,30.25), 14);
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("杭州"); 
map.enableScrollWheelZoom();
var marker = new BMap.Marker(point);// 创建标注    
map.addOverlay(marker);

$(init)
function init() {
    $("body").on("click", "#button1", function() {
        $("#result").show();
        map.clearOverlays();
        var local = new BMap.LocalSearch(map, {
        	pageCapacity: 7,
        	renderOptions: {
        		map: map,
        		autoViewport: true,
        		panel: "result"
        	}
        });
        local.searchNearby("宾馆","西湖风景区");
    });

    $("body").on("click", "#button2", function() {
        $("#result").show();
        map.clearOverlays();
        var transit = new BMap.TransitRoute(map, {
        	renderOptions: {
        		map: map,
        		panel: "result"
        	}
        });
        transit.search("杭州师范大学（杭州市海曙路58号）", "宾馆");
     });

    $("body").on("click", "#button3", function() {
        $("#result").hide();
        map.clearOverlays();
        map.centerAndZoom(new BMap.Point(120.018479, 30.296057), 17);
        $.each(data.buildings, function(index){	
        	var point = new BMap.Point(data.buildings[index].lng, data.buildings[index].lat);
        	var marker = new BMap.Marker(point);// 创建标注    
        	map.addOverlay(marker);
        	marker.addEventListener("click", function(){  
        		opt= 
        		"<div id='opt'>"+
					"<img class='opt-image' src='../image/ex09/hznu.png'>"+
					"<span class='opt-name'>"+ data.buildings[index].name +"</span>"+
					"<span class='opt-score'>"+ data.buildings[index].score +"/5分</span>"+
					"<span class='opt-button'>查看详情</span>"+
				"</div>";				
				this.openInfoWindow(new BMap.InfoWindow(opt));
			});
        })
    });
}


var data = 
{
	"buildings":[
	{"name":"杭州师范大学博文苑1号楼",     "score":4.3, 	"lat":30.295296,"lng":120.017181}, 
	{"name":"杭州师范大学博文苑2号楼",     "score":4.4, 	"lat":30.294665, "lng":120.017316}, 
	{"name":"杭州师范大学博文苑3号楼",     "score":4.2, 	"lat":30.294782,"lng":120.016256}, 
	{"name":"杭州师范大学博文苑4号楼",     "score":4.8, 	"lat":30.295031, "lng":120.016161}, 	
	{"name":"杭州师范大学博文苑5号楼",     "score":4.0, 	"lat":30.29571, "lng":120.016471}, 
	{"name":"杭州师范大学博文苑6号楼",     "score":4.1,     "lat": 30.296276,"lng": 120.01660}, 
	{"name":"杭州师范大学博文苑7号楼",     "score":4.7, 	"lat":30.296068, "lng":120.015295}, 
	{"name":"杭州师范大学博文苑8号楼",     "score":4.9, 	"lat": 30.296587,"lng": 120.014871}, 
	{"name":"杭州师范大学博文苑9号楼",     "score":4.1, 	"lat":30.296544, "lng":120.01596}, 
	{"name":"杭州师范大学博文苑10号楼",    "score":4.4, 	"lat":30.296824, "lng":120.015483}, 
	{"name":"杭州师范大学篮球场",          "score":4.2, 	"lat":30.296271,"lng":120.012304}, 
	{"name":"杭州师范大学体育场",          "score":4.1, 	"lat":30.295106, "lng":120.014293}, 
	{"name":"弘一大师·丰子恺研究中心",     "score":4 ,      "lat":30.297705, "lng":120.015277}, 
	{"name":"杭州师范大学清真食堂",        "score":4.3, 	"lat":30.293636, "lng":120.016741}, 
	{"name":"杭州师范大学2号食堂",         "score":4.7,     "lat":30.293737, "lng":120.017226}, 
	{"name":"杭州师范大学食堂(3,4,5号)",   "score":4.5, 	"lat":30.295273, "lng":120.01825}, 
	{"name":"杭州师范大学恕园1号楼",       "score":4.0, 	"lat":30.294992, "lng":120.020918}, 
	{"name":"杭州师范大学恕园2号楼",       "score":4.1, 	"lat":30.295702, "lng":120.020415}, 
	{"name":"杭州师范大学恕园3号楼",       "score":4.2, 	"lat":30.294358, "lng":120.018811}, 
	{"name":"杭州师范大学恕园4号楼",       "score":4.0, 	"lat":30.293994, "lng":120.018084}, 
	{"name":"杭州师范大学恕园5号楼",       "score":4.3, 	"lat":30.293948, "lng":120.017437}, 
	{"name":"杭州师范大学恕园6号楼",       "score":4.1, 	"lat":30.293706, "lng":120.016768}, 
	{"name":"杭州师范大学恕园7号楼",       "score":4.8, 	"lat":30.295257, "lng":120.019023}, 
	{"name":"杭州师范大学恕园8号楼",       "score":4.2, 	"lat":30.295055, "lng":120.018313}, 
	{"name":"杭州师范大学恕园9号楼",       "score":4.2, 	"lat":30.296789, "lng":120.020595}, 
	{"name":"杭州师范大学恕园10号楼",      "score":4.1, 	"lat":30.296961, "lng":120.020433}, 
	{"name":"杭州师范大学恕园11号楼",      "score":4.7, 	"lat":30.296403, "lng":120.019813}, 
	{"name":"杭州师范大学恕园12号楼",      "score":3.9, 	"lat":30.296793, "lng":120.019827}, 
	{"name":"杭州师范大学恕园13号楼",      "score":4.5, 	"lat":30.296481, "lng":120.019081}, 
	{"name":"杭州师范大学恕园14号楼",      "score":4.0, 	"lat":30.296668, "lng":120.019337}, 
	{"name":"杭州师范大学恕园15号楼",      "score":4.3, 	"lat":30.297163, "lng":120.02081}, 
	{"name":"杭州师范大学恕园16号楼",      "score":4.1, 	"lat":30.297385, "lng":120.02059}, 
	{"name":"杭州师范大学恕园17号楼",      "score":4.2, 	"lat":30.297097, "lng":120.019728}, 
	{"name":"杭州师范大学恕园18号楼",      "score":4.8, 	"lat":30.296423, "lng":120.018093}, 
	{"name":"杭州师范大学恕园19号楼",      "score":4.7, 	"lat":30.296676, "lng":120.01772}, 
	{"name":"杭州师范大学恕园20号楼",      "score":4.2, 	"lat":30.297756, "lng":120.020101}, 
	{"name":"杭州师范大学恕园21号楼",      "score":4.1, 	"lat":30.297393, "lng":120.019548}, 
	{"name":"杭州师范大学恕园22号楼",      "score":4.5, 	"lat":30.297592, "lng":120.019167}, 
	{"name":"杭州师范大学恕园23号楼",      "score":4.6, 	"lat":30.297682, "lng":120.018565}, 
	{"name":"杭州师范大学恕园24号楼",      "score":4.4, 	"lat":30.296883, "lng":120.017496}, 
	{"name":"杭州师范大学恕园25号楼",      "score":4.0, 	"lat":30.297093, "lng":120.017087}, 
	{"name":"杭州师范大学恕园26号楼",      "score":4.4, 	"lat":30.297167, "lng":120.017491}, 
	{"name":"杭州师范大学恕园27号楼",      "score":4.9, 	"lat":30.297943, "lng":120.020352}, 
	{"name":"杭州师范大学恕园28号楼",      "score":4.0, 	"lat":30.298013, "lng":120.019777}, 
	{"name":"杭州师范大学恕园29号楼",      "score":4.7, 	"lat":30.297908, "lng":120.01931}, 
	{"name":"杭州师范大学恕园30号楼",      "score":4.1, 	"lat":30.297962, "lng":120.018376}, 
	{"name":"杭州师范大学恕园31号楼",      "score":4.0, 	"lat":30.298188, "lng":120.018178}, 
	{"name":"杭州师范大学恕园32号楼",      "score":4.2, 	"lat":30.297701, "lng":120.018012}, 
	{"name":"杭州师范大学恕园33号楼",      "score":4.1, 	"lat":30.297385, "lng":120.01733}, 
	{"name":"杭州师范大学恕园34号楼",      "score":4.4, 	"lat":30.298075, "lng":120.017913}, 
	{"name":"杭州师范大学恕园35号楼",      "score":4.5, 	"lat":30.297978, "lng":120.017496}, 
	{"name":"杭州师范大学恕园36号楼",      "score":4.0, 	"lat":30.297736, "lng":120.017051}, 
	{"name":"杭州师范大学恕园37号楼",      "score":4.0, 	"lat":30.297834, "lng":120.017123}, 
	{"name":"杭州师范大学恕园38号楼",      "score":4.0, 	"lat":30.297222, "lng":120.014024}, 
	{"name":"杭州师范大学图书馆",          "score":4.7, 	"lat":30.298715, "lng":120.022198}]
};