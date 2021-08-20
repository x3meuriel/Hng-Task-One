// Add your javascript here

const data = {
    name,
    email,
    subject,
    message
  }

const operation = (method, url, data)=>{
       
  let name = document.getElementById("name").value
  let subject = document.getElementById("subject").value
  let email = document.getElementById("email").value
  let message = document.getElementById("message").value;  
  
  data.name = name;
  data.email = email;
  data.subject = subject;
  data.message = message;
  console.log(data)
  let request = new Request(url, {
  method: method,
  body: JSON.stringify(data),
  headers: new Headers({"Content-Type": "application/json;charset=UTF-8"})

})

fetch(request)
.then(resp=>resp.json())
.then(message=>{

    ModalWindow.openModal({title: message.status, content: message.body});
})
.catch(err=>{
  ModalWindow.openModal({title: "Failed", content: "Message not received"});
})
}

let submit = document.getElementById("submit");


submit.addEventListener("click", (e)=>{
    e.preventDefault();
   operation("post", "https://aqueous-waters-40616.herokuapp.com/submit", data)
  }

);



// (event)=>{
//   event.preventDefault();
//   let name = document.getElementById("name").value
//   let subject = document.getElementById("subject").value
//   let email = document.getElementById("email").value
//   let message = document.getElementById("message").value;
//   const data = {
//     name,
//     email,
//     subject,
//     message
//   }

//   let request = new Request("http://localhost:4000/submit", {
//     method: "post",
//     body: JSON.stringify(data),
//     headers: new Headers({"Content-Type": "application/json;charset=UTF-8"})
  
//   })

//   fetch(request).then(response=>{

//     console.log(response);
//   })


// Don't forget to add it into respective layouts where this js file is needed
$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {

  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
