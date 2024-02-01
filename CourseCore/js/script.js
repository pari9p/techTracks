// media header navbar

const button = document.querySelector("nav .navigation")
let dropdown = document.querySelector("#dropdown")
console.log(button)


button.addEventListener("click", () => {
	dropdown.classList.toggle("show")


})

// course program

const opener = document.querySelectorAll(".opener");
const cont = document.querySelectorAll(".content");
const arrow = document.querySelectorAll(".opener i");

function dropdownCourseProgram(open, content, icon) {
	for (let i = 0; i < open.length; i++) {
		open[i].addEventListener("click", function () {
			content[i].classList.toggle("content-active");
			icon[i].classList.toggle("rotate");
			for (var j = 0; j < open.length; j++) {
				if (i != j) {
					content[j].classList.remove("content-active");
					icon[j].classList.remove("rotate");
				}
			}
		});
	}
}

dropdownCourseProgram(opener, cont, arrow);


// categories dropdown
const categories = document.querySelector('#categories');
console.log(categories);

categories.addEventListener('mouseover', function() {
    categories.querySelector('.categories').style.display = 'flex';
});

categories.addEventListener('mouseout', function() {
    categories.querySelector('.categories').style.display = 'none';
});


//



//register form

const container = document.querySelector('#container')
const registerBtn = document.querySelector('#register')
const loginBtn = document.querySelector('#login')

registerBtn.addEventListener('click', ()=>{
    container.classList.add('active')
})
loginBtn.addEventListener('click', ()=>{
    container.classList.remove('active')
})

const signupMediaBtn = document.querySelector('#sign-up-media');
const signinMediaBtn = document.querySelector('#sign-in-media');
const formContainer = document.querySelector('.form-container');

signupMediaBtn.addEventListener('click', () => {
    formContainer.classList.add('media-active');
    formContainer.classList.remove('media-passive');
});

signinMediaBtn.addEventListener('click', () => {
    formContainer.classList.add('media-passive');
    formContainer.classList.remove('media-active');
});
