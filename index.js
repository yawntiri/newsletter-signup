let email = document.querySelector('#email');
let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let match = regex.test(email.value);
document.querySelector('#btn').addEventListener('click', function(e){
    if (email.value!=="" && match == false){
        document.querySelector('.container').style= 'display: none';
        document.querySelector('.popup-message').style= 'display: flex';
        e.preventDefault();
    }else{
        null;
    }
 });
document.querySelector('#dismiss').addEventListener('click', function(e){
    // e.preventDefault();
        document.querySelector('.container').style= 'display: flex';
        document.querySelector('.popup-message').style= 'display: none';
 });
