const loaderContainer = document.querySelector('.loader-container');

window.addEventListener('load', () => {
  loaderContainer.style.display = 'none';
});

embeds = new Array();
titles = new Array();

embeds[0] = '<iframe src="//stream.crichd.vip/update/bein1max.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>';

titles[0] = 'beIN Sports MAX 1';

embeds[1] = '<iframe src="//stream.crichd.vip/update/fox1usa.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>';

titles[1] = 'FOX Sports 1 USA';

embeds[2] = '<iframe src="//stream.crichd.vip/update/ch1.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>';

titles[2] = 'BBC ONE';

embeds[3] = '<iframe src="//stream.crichd.vip/update/sspsl.php" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>';

titles[3] = 'SuperSport PSL';

embeds[5] = '<iframe src="qatarworldcup.html" width="100%" height="500px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>';

titles[5] = 'Sports 18';

$(".video-btn").click(function(ev) {
	ev.preventDefault();
	
	index = $(this).index(".video-btn");
	
	$(".video-btn").parent().removeClass("active");
	$(this).parent().addClass("active");
	
	$(".video").html(embeds[index]);
	$("#embed-stream").val(embeds[index]);
});

if(embeds.length == 0)
{
	embeds[0] = '<img src="https://crichd.tv/assets/images/nochannel.gif" />;';
	titles[0] = '';
}


$(".video").html(embeds[0]);
$(".video-btn:eq(0)").parent().addClass("active");	
$("#embed-stream").val(embeds[0]);

document.addEventListener('contextmenu', event => event.preventDefault());

function myClock() {         
	setTimeout(function() {   
	  const d = new Date();
	  const n = d.toLocaleTimeString();
	  document.getElementById("time").innerHTML = n; 
	  myClock();             
	}, 1000)
  }
  myClock(); 