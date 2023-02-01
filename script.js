function validar(){
    let form = document.getElementById('form')
    let email = document.getElementById('email').value
    let text = document.getElementById('text')
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if(email.match(pattern)){
        form.classList.add('valid')
        form.classList.remove('invalid')
        text.innerHTML = "Your Email Address is Valid."
        text.style.color = "#4caf50"
    }else{
        form.classList.remove('valid')
        form.classList.add('invalid')
        text.innerHTML = "Please Enter Valid Email Address."
        text.style.color = "#f44336"
    }

    if(email == ""){
        form.classList.remove('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
    }
}
