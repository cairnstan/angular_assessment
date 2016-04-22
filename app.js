var app = angular.module('myApp', []);

app.controller('MainController', function(){
  var main = this;

  main.message= '';
  main.messages = [];
  var count = 0;

  var clearAndMoveData = function(){
    console.log('clear message ', main.message);
    main.message = '';
  }

  var moveData = function(){
    if(main.messages.length > 1){
      main.previousMessage = true;
    }
  }

  main.enterMessage = function(){
    console.log('Message Received');
    main.messageEntered = true;
      main.messages.push(main.message);
      count = count + 1;
      console.log('the count is ', count);
      console.log(main.messages);
      main.message = '';
      moveData();
  }
});
