//admin menu start 
var div2 = document.getElementById('form_div');
var display = 0;
function hideShow1()
{
    if(display ==1)
    {
        div2.style.display='block';
        display=0;
    }
    else{
        div2.style.display='none';
        display=1;
    }
}
//admin menu end

let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

signup.addEventListener("click", () => {
	slider.classList.add("moveslider");
	formSection.classList.add("form-section-move");
});

login.addEventListener("click", () => {
	slider.classList.remove("moveslider");
	formSection.classList.remove("form-section-move");
})
//scroll up 

const myDiv = document.getElementById('myDiv');

// Store the initial scroll position
let prevScrollPos = window.pageYOffset;

// Listen for scroll events
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const currentScrollPos = window.pageYOffset;

    // Check if the user is scrolling up
    if (currentScrollPos < prevScrollPos) {
        // Slide up the <div> by adjusting its style
        myDiv.style.transform = 'translateY(-100%)';
    } else {
        // User is scrolling down, reset the style
        myDiv.style.transform = 'none';
    }

    // Update the previous scroll position
    prevScrollPos = currentScrollPos;
});
//scroll up end


 
