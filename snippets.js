
//Ex: Service
app.service('TestService', function () {
  this.print = function () {
    console.log('hello service);
  };
});

//Ex: Factory
app.factory('TestFactory', function () {
  return {
    print: function () {
      console.log('hello factory);
    };
  }
});
