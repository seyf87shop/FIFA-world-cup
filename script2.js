const loaderContainer = document.querySelector('.loader-container');

window.addEventListener('load', () => {
  loaderContainer.style.display = 'none';
});

embeds = new Array();
titles = new Array();

embeds[0] = '<iframe src="//stream.crichd.vip/update/bein1max.php" width="100%" height="400px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>';

// embeds[0] = '<iframe src="//techclips.net/clip/s1.html" width="100%" height="400px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>';

titles[0] = 'beIN Sports MAX 1';

embeds[1] = '<iframe src="//stream.crichd.vip/update/fox1usa.php" width="100%" height="400px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>';

titles[1] = 'FOX Sports 1 USA';

embeds[2] = '<iframe src="//stream.crichd.vip/update/ch1.php" width="100%" height="400px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>';

titles[2] = 'BBC ONE';

embeds[3] = '<iframe src="//stream.crichd.vip/update/sspsl.php" width="100%" height="400px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>';

titles[3] = 'SuperSport PSL';

embeds[5] = '<iframe src="qatarworldcup.html" width="100%" height="400px" marginheight="0" marginwidth="0" scrolling="no" frameborder="0" allowfullscreen  allow="encrypted-media"></iframe>';

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


  //POPUP

  $(document).ready(function(){       
	$('#myModal').modal('show');
	 });




/* user defined variables */
var timeOnSlide = 3, 		
// the time each image will remain static on the screen, measured in seconds
timeBetweenSlides = 1, 	
// the time taken to transition between images, measured in seconds

// test if the browser supports animation, and if it needs a vendor prefix to do so
animationstring = 'animation',
animation = false,
keyframeprefix = '',
domPrefixes = 'Webkit Moz O Khtml'.split(' '), 
// array of possible vendor prefixes
pfx  = '',
slidy = document.getElementById("slidy"); 
if (slidy.style.animationName !== undefined) { animation = true; } 
// browser supports keyframe animation w/o prefixes

if( animation === false ) {
for( var i = 0; i < domPrefixes.length; i++ ) {
if( slidy.style[ domPrefixes[i] + 'AnimationName' ] !== undefined ) {
  pfx = domPrefixes[ i ];
  animationstring = pfx + 'Animation';
  keyframeprefix = '-' + pfx.toLowerCase() + '-';
  animation = true;
  break;
}
}
}

if( animation === false ) {
// animate in JavaScript fallback
} else {
var images = slidy.getElementsByTagName("img"),
  firstImg = images[0], 
  // get the first image inside the "slidy" element.
  imgWrap = firstImg.cloneNode(false);  // copy it.
slidy.appendChild(imgWrap); // add the clone to the end of the images
var imgCount = images.length, // count the number of images in the slide, including the new cloned element
  totalTime = (timeOnSlide + timeBetweenSlides) * (imgCount - 1), // calculate the total length of the animation by multiplying the number of _actual_ images by the amount of time for both static display of each image and motion between them
  slideRatio = (timeOnSlide / totalTime)*100, // determine the percentage of time an induvidual image is held static during the animation
  moveRatio = (timeBetweenSlides / totalTime)*100, // determine the percentage of time for an individual movement
  basePercentage = 100/imgCount, // work out how wide each image should be in the slidy, as a percentage.
  position = 0, // set the initial position of the slidy element
  css = document.createElement("style"); // start marking a new style sheet
css.type = "text/css";
css.innerHTML += "#slidy { text-align: left; margin: 0; font-size: 0; position: relative; width: " + (imgCount * 100) + "%;  }\n"; // set the width for the slidy container
css.innerHTML += "#slidy img { float: left; width: " + basePercentage + "%; }\n";
css.innerHTML += "@"+keyframeprefix+"keyframes slidy {\n"; 
for (i=0;i<(imgCount-1); i++) { // 
position+= slideRatio; // make the keyframe the position of the image
css.innerHTML += position+"% { left: -"+(i * 100)+"%; }\n";
position += moveRatio; // make the postion for the _next_ slide
css.innerHTML += position+"% { left: -"+((i+1) * 100)+"%; }\n";
}
css.innerHTML += "}\n";
css.innerHTML += "#slidy { left: 0%; "+keyframeprefix+"transform: translate3d(0,0,0); "+keyframeprefix+"animation: "+totalTime+"s slidy infinite; }\n"; // call on the completed keyframe animation sequence
document.body.appendChild(css); // add the new stylesheet to the end of the document
}
