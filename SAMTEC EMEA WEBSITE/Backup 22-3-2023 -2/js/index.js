function scrollfunction () {
    if(document.documentElement.scrollTop > 200){
        document.getElementById('navbar').classList.add('notransparrent');
    }
    else {
        document.getElementById('navbar').classList.remove('notransparrent');
    }
}
window.onscroll = function() {
    scrollfunction();
};


// === invalid info ===


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()





  document.getElementById("fullYear").innerHTML = new Date().getFullYear();