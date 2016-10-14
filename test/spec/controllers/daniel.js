'use strict';

describe('Controller: DanielCtrl', function () {

  // load the controller's module
  beforeEach(module('yeomanTestApp'));

  var DanielCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DanielCtrl = $controller('DanielCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DanielCtrl.awesomeThings.length).toBe(3);
  });
});
