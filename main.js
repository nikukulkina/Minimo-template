
function generatePost(postNumber) {
	return `<article class="post">
	<img class="post__img" src="img/post-image2.jpg" alt="Post image">
	<a href="#" class="post__category">lifestyle</a>
	<h2 class="post__title"><a href="#" class="post__link">Post № ${postNumber}</a></h2>
	<p class="post__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
		eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
		nostrud exercitation ullamco laboris
	</p>
</article>`;
}

	let button = document.querySelector('.button');
	button.addEventListener('click', function(e){
		e.preventDefault();
	  let postContainer = document.querySelector('.js-posts');
	  let postExist = postContainer.querySelectorAll('.post');
	  let postNumber = postExist.length;
	  for (let i = 1; i<=4; i++){
		postContainer.innerHTML += generatePost(postNumber + i);
	  }
	});

	let burger = document.querySelector('.js-burger');
	burger.addEventListener('click', function(){
		const lines = burger.children;
		for (let i=0; i<lines.length; i++) {
			lines[i].classList.toggle('menu__line_active');
		}
		let menu = burger.parentNode;
		menu.classList.toggle('menu__open');
	});
