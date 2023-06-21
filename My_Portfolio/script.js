let menu=document.querySelector('#menu-bars');
let header=document.querySelector('header');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}
function sendEmail()
{
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "jhonnyindia234@gmail.com",
        Password : "FA47E43FE4B13226D22E5CA6825EAEBD4905",//optional
        SecureToken :"d1c7f095-8b59-43d9-be8f-31319c280de9",
        From : 'jhonnyindia234@gmail.com',
        To: document.getElementById("email").value,
        Subject : "New Contact Enquiry",
        Body : "Name: "+document.getElementById("name").value
        +"<br> Email: "+ document.getElementById("email").value
        +"<br> Phone: "+ document.getElementById("phone").value
        +"<br> Message: "+ document.getElementById("message").value
    }).then(
      message => alert("Message send successfully")
    );
    // d1c7f095-8b59-43d9-be8f-31319c280de9
    
}