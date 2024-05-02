document.getElementById("login-button").addEventListener("click", function () {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var country = document.getElementById('country').value;

    if (!username || !password || !email || !phone || !country) {
        alert("Please fill in all fields.");
        return; // Exit the function early if any field is empty
    }
    window.location.href = 'index.html'
});

let darkmode = document.getElementById('darkmode');

darkmode.onclick = () => {
    if (darkmode.classList.contains('ri-moon-line')) {
        darkmode.classList.replace('ri-moon-line', 'ri-sun-line');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('ri-sun-line', 'ri-moon-line');
        document.body.classList.remove('active');
    }
}
const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})