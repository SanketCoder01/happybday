

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    function resizeWindow() {
        var winW = $(window).width();
        var winH = $(window).height();
        var wrap = $('#wrap');
        var wrapW = 1100;
        var wrapH = 680;
        
        var scaleX = winW / wrapW;
        var scaleY = winH / wrapH;
        var scale = Math.min(scaleX, scaleY);
        
        // Add a bit of padding margin
        scale = scale * 0.95;
        
        wrap.css({
            'transform': 'scale(' + scale + ')',
            'transform-origin': 'top center',
            'margin-top': (winH - wrapH * scale) / 2 + 'px'
        });
    }
    resizeWindow();
});
$(document).ready(function() {
    $(window).trigger('resize');
});


(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				// Auto-scroll to the bottom of the container (#text or its parent)
				var textContainer = document.getElementById('text');
				if (textContainer) {
					textContainer.scrollTop = textContainer.scrollHeight;
				}
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 30); // sped up from 75 to 30ms
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "Days <span class=\"digit\">" + days + "</span> Hours <span class=\"digit\">" + hours + "</span> Minutes <span class=\"digit\">" + minutes; 
	$("#clock").html(result);

	var text = "THE WORLD JUST GOT LUCKIER SINCE ";
	$("#message-box").html(text);

}
