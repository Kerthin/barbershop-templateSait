window.onload = function () {

	var like = document.querySelectorAll('.far');

	for (var i = 0; i < like.length; i++) {
		like[i].onclick = function(){
			if (this.className == 'far fa-heart')
				this.className = 'fas fa-heart';
			else
				this.className = 'far fa-heart';
		};
	}
}