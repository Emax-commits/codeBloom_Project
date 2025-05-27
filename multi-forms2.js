//Select.html for the multi-step form
const previous = document.getElementById("back")
const next_page = document.getElementById("next")
const previous1 = document.getElementById("back1")
const next_page1= document.getElementById("next1")

// Button for going to the previous page and to the next page
previous.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(previous)
     window.location.assign("Select.html");
})

next_page.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(next_page)
    window.location.assign("Summary.html");
})

//for 
previous1.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(previous)
     window.location.assign("Select.html");
})

next_page1.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(next_page)
    window.location.assign("thanks.html");
})