
function printAsyncName(callback, nome) {

    setTimeout(function() {
      callback();

      setTimeout(function() {
        console.log(nome);
      }, 2000);
    }, 1000);
  }
  

  function salutare() {
    console.log("Hello");
  }
  
  printAsyncName(salutare, "christian");
