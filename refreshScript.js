//Refresh Script Challenge
var advertisement = document.getElementById('advertisement'),
	advertisement2 = document.getElementById('advertisement2'),
	adsArray1 = ["http://www.presidiacreative.com/wp-content/uploads/2010/04/product_ads-24-500x700.jpg",
				"http://images.teamsugar.com/files/upl1/1/17470/19_2008/1_2.jpg",
				"https://collabr8.files.wordpress.com/2010/03/stella-artois-beer-ad-2008.jpg"],
	adsArray2 = ["http://cdn.trendhunterstatic.com/thumbs/2011-super-bowl-snickers-teaser-ad.jpeg",
				"http://files2.coloribus.com/files/adsarchive/part_103/1034155/file/heineken-beer-sweat-small-34265.jpg",
				"http://creative-ads.org/wp-content/uploads/2013/04/what_a_whopper_ad.jpg"],
	adIndex = 0,
	counter = 0,
	isActive = true,
	adInterval = function (time, element, array) {
			arrLength = array.length;
			setInterval(function(){//loops over the array of advertisements.
				window.onfocus = function () { 
				  isActive = true; 
				};
				window.onblur = function () { 
				  isActive = false; 
				}; 
			if (isViewable(element) && isActive) {
				counter++;
				if(counter > 5) {
					adIndex ++;
					if(adIndex > arrLength - 1) //-1 to account for the array offset
							adIndex = 0;
					element.src = array[adIndex]; 
					counter = 0;
				} 
			}
		},time);
	},
	isViewable = function (element) {
	  var properties = element.getBoundingClientRect();
	  var dom = document.documentElement;
	  return (
	    properties.top >= -170 &&
	    properties.left >= 50 &&
	    properties.bottom <= (window.innerHeight || dom.clientHeight) &&
	    properties.right <= (window.innerWidth || dom.clientWidth)
	  );
	};
	//Executional Code
	adInterval(1000, advertisement, adsArray1); //First ad block
	adInterval(1000, advertisement2, adsArray2);//Second ad block
