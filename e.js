for (var i = 0; i < 10; i++) {
    setTimeout(function () {
     console.log('The number is ' + i);//function scope
    });
   }
   