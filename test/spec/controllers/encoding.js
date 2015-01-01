'use strict';

describe('Controller: EncodingCtrl', function () {

  // load the controller's module
  beforeEach(module('vleApp'));

  var EncodingCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EncodingCtrl = $controller('EncodingCtrl', {
      $scope: scope
    });
  }));

  it('should attach encoding and schema to the scope', function () {
    expect(scope.encoding).toBeDefined();
    expect(scope.schema).toBeDefined();
  });
});
