function checked_email(){
    let form=document.getElementById('form');
    let email=document.getElementById('email').value;
    let text=document.getElementById('text');
    
    let pattern_email=/^[^]+@[^]+\.[a-z]{2,3}$/;
    if(email.match(pattern_email)){
        form.classList.add('valid');
        form.classList.remove('invalid');
        text.innerHTML="ایمیل شما معتبر است";
        text.style.color='#01ff01';
    }else{
        form.classList.add('invalid');
        form.classList.remove('valid');
        text.innerHTML="ایمیل شما معتبر نیست";
        text.style.color='red';
    }
    if(email==''){
        form.classList.remove('invalid');
        form.classList.remove('valid');
        text.innerHTML="";
    }
}