
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


app.controller('AppController', function (TestFactory, TestService) {
  TestFactory.print();
  TestService.print();
});


  function service(name, constructor) {
    return factory(name, ['$injector', function($injector) {
      return $injector.instantiate(constructor);
    }]);
