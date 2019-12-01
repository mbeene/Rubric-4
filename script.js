const hero = document.querySelector(".hero");
const text = document.querySelector(".hi");
const name = document.querySelector(".name");

const walk = 100; // 100px

function shadow(e)  {
		const { offsetWidth: width, offsetHeight : height } = hero;
	let {offsetX, offsetY, target: {offsetLeft, offsetTop}} = e; 

	if(this !== e.target) {
		offsetX = offsetX + offsetLeft;
		offsetY = offsetY + offsetTop;
	}  
	const xWalk = Math.round((offsetX / width * walk) - (walk / 2));
  const yWalk = Math.round((offsetY / height * walk) - (walk / 2));

	text.style.textShadow =`
			${xWalk}px ${yWalk}px 0 rgba(99, 97, 152, 0.17)
	 `;
	name.style.textShadow =`
			${xWalk}px ${yWalk}px 0 rgba(2, 191, 197, 0.17)
	 `; 
}

hero.addEventListener('mousemove', shadow);

