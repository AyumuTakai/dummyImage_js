/**
srcが指定されていない画像全てにダミー画像をセットする
*/
$(function() {

	function createImage(width,height,caption) {
		var canvas = document.createElement('canvas');
		canvas.width = width;
		canvas.height = height;
		var ctx = canvas.getContext('2d');
		// Fill background
		ctx.fillStyle = 'rgb(128,128,128)';
		ctx.fillRect(0,0,width,height);
		// Draw text
		ctx.textAlign = 'center';
		ctx.fillStyle = 'rgb(255,255,255)';
		//   Size
		ctx.textBaseline = 'bottom';
		ctx.fillText(width+' x '+height,width/2,height/2);
		//   caption
		ctx.textBaseline = 'top';
		ctx.fillText(caption,width/2,height/2);
		// Create PNG image
		var png = canvas.toDataURL();
		return png;
	};

	$('img').each(function(){
		if( ! $(this).attr('src') ) {
			var width = $(this).attr('width')?$(this).attr('width'):100;
			var height = $(this).attr('height')?$(this).attr('height'):100;
			var caption = $(this).attr('alt')?$(this).attr('alt'):'';
			this.src = createImage(width,height,caption);
		}
	});
});