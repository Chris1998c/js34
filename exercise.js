
function printAsyncName(callBack,nome){
  setTimeout(()=>{
    console.log("Ciao");


    setTimeout (()=>{
      console.log(nome);

    },2000);
  },1000);
}


printAsyncName(()=>{

}, "Christian");
