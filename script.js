function checked_email(){
    let form=document.getElementById('form');
    let email=document.getElementById('email').value;
    let text=document.getElementById('text');
    
    let pattern_email=/^[^]+@[^]+\.[a-z]{2,3}$/;
    if(email.match(pattern_email)){
        form.classList.add('valid');
    }
}