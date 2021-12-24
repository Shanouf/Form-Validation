//get the required input tags for validation
let Name=document.getElementById('name');
let Email=document.getElementById('email');
let myLocation=document.getElementById('location');
let Phone=document.getElementById('phone');
let isname=false;
let isemail=false;
let islocation=false;
let isphone=false;
//adding blur event listener on the inputs for their validation
Name.addEventListener('blur', ()=>{
    let nameVal=Name.value;
    let nameRE=/^([a-zA-Z\S])([a-zA-Z0-9@&\-]){2,20}([a-zA-Z0-9_])$/;
    if(nameRE.test(nameVal)){
        let userparatrue=document.getElementById('userparatrue');
        let userparafalse=document.getElementById('userparafalse');
        userparatrue.style.display='block';
        userparafalse.style.display='none';
        Name.classList.add('is-valid');
        Name.classList.remove('is-invalid');
        isname=true;
    }
    else{
        userparafalse.style.display='block';
        userparatrue.style.display='none';
        Name.classList.add('is-invalid');
        Name.classList.remove('is-valid');
        isname=false;
    }
});
Email.addEventListener('blur', ()=>{
    let emailVal=Email.value;
    let emailRE=/^([a-zA-Z0-9\-\S]){2,20}@([a-z\.]){3,8}\.([a-zA-Z]){2,5}$/;
    if(emailRE.test(emailVal)){
        let emailparatrue=document.getElementById('emailparatrue');
        let emailparafalse=document.getElementById('emailparafalse');
        emailparatrue.style.display='block';
        emailparafalse.style.display='none';
        Email.classList.add('is-valid');
        Email.classList.remove('is-invalid');
        isemail=true;
    }
    else{
        emailparafalse.style.display='block';
        emailparatrue.style.display='none';
        Email.classList.add('is-invalid');
        Email.classList.remove('is-valid');
        isemail=false;
    }
});
myLocation.addEventListener('blur', ()=>{
    let locVal=myLocation.value;
    let locRE=/^[\S\w]([a-zA-Z]){3,30}$/;
    if(locRE.test(locVal)){
        let locparatrue=document.getElementById('locparatrue');
        let locparafalse=document.getElementById('locparafalse');
        locparatrue.style.display='block';
        locparafalse.style.display='none';
        myLocation.classList.add('is-valid');
        myLocation.classList.remove('is-invalid');
        isloc=true;
    }
    else{
        locparafalse.style.display='block';
        locparatrue.style.display='none';
        myLocation.classList.add('is-invalid');
        myLocation.classList.remove('is-valid');
        isloc=false;
    }
});
Phone.addEventListener('blur', ()=>{
    let phoneVal=Phone.value;
    let phoneRE=/^([0-9]){10}$/;
    if(phoneRE.test(phoneVal)){
        let phoneparatrue=document.getElementById('phoneparatrue');
        let phoneparafalse=document.getElementById('phoneparafalse');
        phoneparatrue.style.display='block';
        phoneparafalse.style.display='none';
        Phone.classList.add('is-valid');
        Phone.classList.remove('is-invalid');
        isphone=true;
    }
    else{
        phoneparafalse.style.display='block';
        phoneparatrue.style.display='none';
        Phone.classList.add('is-invalid');
        Phone.classList.remove('is-valid');
        isphone=false;
    }
});
//showing the final status of the form on clicking the submit button
let button=document.getElementById('btn');
button.addEventListener('click', showStatus);
function showStatus(){
    let address=document.getElementById('address');
    if(isname&&isemail&&isloc&&isphone&&address.value!=''){
        let alertdiv=document.getElementById('alert');
        alertdiv.innerHTML=`<div class="alerts alert-success" role="alert">
        The form was submitted successfully!
        </div>`;
        setTimeout(()=>{
            alertdiv.innerHTML='';
        }, 5000);
        Name.value='';
        Email.value='';
        myLocation.value='';
        Phone.value='';
        userparatrue.style.display='none';
        emailparatrue.style.display='none';
        locparatrue.style.display='none';
        phoneparatrue.style.display='none';
        Name.classList.remove('is-valid');
        Email.classList.remove('is-valid');
        myLocation.classList.remove('is-valid');
        Phone.classList.remove('is-valid');
        let address=document.getElementById('address');
        address.value='';
    }
    else{
        let alertdiv=document.getElementById('alert');
        alertdiv.innerHTML=`<div class="alerts alert-danger" role="alert">
        The form was not submitted due to one or more error(s)/empty input fields!
        </div> `;
        setTimeout(()=>{
            alertdiv.innerHTML='';
        }, 5000);
    }
}