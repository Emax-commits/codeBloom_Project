//Select.html for the multi-step form

const previous1 = document.getElementById("back1")
const next_page1= document.getElementById("next2")

// Button for going to the previous page and to the next page
previous1.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(previous1)
     window.location.assign("Adds-on.html");
})

next_page1.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(next_page1)
    window.location.assign("thanks.html");
})