//Select.html for the multi-step form
const terms = document.getElementById("toggle-terms")
const optionA = document.querySelector("#optionA")
const press = document.getElementById("press")
const yearly_offer =document.querySelectorAll(".yearly-offer")
const price1 =document.querySelector(".price1")
const price2 =document.querySelector(".price2")
const price3 =document.querySelector(".price3")
const previous = document.getElementById("back")
const next_page = document.getElementById("next")

press.addEventListener('click', () =>{
    if(!terms.checked){
       yearly_offer .forEach((offer)=> offer.textContent="2 months free" )
        price1.textContent = "$90/yr"
        price2.textContent = "$120/yr"
        price3.textContent = "$150/yr"
       optionA.style.color= "hsl(231, 11%, 63%)" 
       ext_page.textContent = "Arcade (Yearly)"
       
    }else{
        yearly_offer .forEach((offer)=> offer.textContent="" )
        price1.textContent = "$9/mo"
        price2.textContent = "$12/mo"
        price3.textContent = "$15/mo"
        optionA.style.color= "hsl(213, 96%, 18%)" 
    }
})

// Button for going to the previous page and to the next page
previous.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(previous)
     window.location.assign("index.html");
})

next_page.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(next_page)
    window.location.assign("Adds-on.html");
})


