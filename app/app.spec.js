/*global angular*/
/*global inject*/
/*global expect*/
describe('PhoneListController', function() {
  var module = angular.module('AngularSampleApp', []);
  beforeEach(module('phonecatApp'));
  it('should create a `phones` model with 3 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});
    expect(scope.phones.length).toBe(3);
  }));
});