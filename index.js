// точки в выборе века в галерее //
let input1 = document.getElementById("0");
let input2 = document.getElementById("1");
let input3 = document.getElementById("2");

	input1.addEventListener("click", function () {
			let point4 = document.getElementById('3');
			point4.classList.toggle(
				"galery__contanier-left-input-visible-point-on"
			);
	});
    input2.addEventListener("click", function () {
			let point5 = document.getElementById('4');
			point5.classList.toggle(
				"galery__contanier-left-input-visible-point-on"
			);
	});
    input3.addEventListener("click", function () {
			let point6 = document.getElementById('5');
			point6.classList.toggle(
				"galery__contanier-left-input-visible-point-on"
			);
	});

// раскрытие поиска в футере //
if (document.documentElement.clientWidth < 321) {
	let lupa = document.querySelector(".header__container-lupa");
	let cross = document.querySelector(".header__lupa-search");
	let header = document.querySelector(".header");
    let search = document.querySelector(".search");
	lupa.addEventListener("click", function () {
		search.classList.toggle("search__on");
		header.classList.toggle("nonvisible");
		cross.classList.toggle("header__lupa-cross");
	});
	cross.addEventListener("click", function () {
		search.classList.remove("search__on");
		header.classList.remove("nonvisible");
		cross.classList.remove("header__lupa-cross");
	});
}    

