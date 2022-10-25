  function Validate() {
        var regex = new RegExp(^[^><]+$
        var isValid = regex.test(document.getElementById("myText").value);
        if (!isValid) {
           document.getElementById("myText").style.borderColor ="red";
        }
        var regex = /[]/;
        var isValid = regex.test(document.getElementById("myText").value);
        if (!isValid) {
           document.getElementById("myText").style.borderColor ="green"
        }
      }


      d=