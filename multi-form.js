//Always use const only when you know that you will reasign value that is when you use "let"
//A method is a function that is associated with an object

//Variables
const form = document.getElementById('form')
const fname = document.getElementById("name")
const email = document.getElementById("email")
const tel = document.getElementById("tel")
const msg1 = document.getElementById("e-msg1")
const msg2 =  document.getElementById("e-msg2") 
const msg3 =  document.getElementById("e-msg3") 
const btn1 = document.getElementById("btn1") 


form.addEventListener('submit', (e) => {
        e.preventDefault()
        let message;
        let content = String(tel.value)
        if(fname.value === "" || fname.value === null){
          message = "This field is required"
          msg1.textContent = message
          fname.style.borderColor = "red"
        }
        if(email.value === "" || email.value === null){
          message = "This field is required"
          msg2.textContent = message
          email.style.borderColor = "red"
        }

        if(tel.value === "" || tel.value === null){
          message = "This field is required"
          msg3.textContent = message
          tel.style.borderColor = "red"
        }else if(content.length != 11){
                message = "Invalid number"
                msg3.textContent = message
                tel.style.borderColor = "red"
        }

        else{
                window.location.assign("Select.html");
               //testWindow = window.open('', "myWindow", "status=1, menubar=1, resizeable=1, scrollbar=1, height=500, width=500, top=100, left=100 ");
               //testWindow.document.write("h2>Personal info</h2>")
               //console.log(window.location.href)
        }    
})

//Index.html for the multi-step form
fname.addEventListener("keydown", () => {
        msg1.textContent = ""
        fname.style.borderColor = "hsl(231, 11%, 63%)"
})

email.addEventListener("keydown", () => {
        msg2.textContent = ""
        email.style.borderColor = "hsl(231, 11%, 63%)"
        
})
tel.addEventListener("keydown", () => {
        msg3.textContent = ""
        tel.style.borderColor = "hsl(231, 11%, 63%)"
})

