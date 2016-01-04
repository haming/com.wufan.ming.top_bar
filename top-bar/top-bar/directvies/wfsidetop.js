/**
 * Created by ming on 15/12/30.
 */
angular.module('publicApp')
  .directive('wfsidetop', function (sidetopConstant) {
    return {
      transclude: true,
      templateUrl: 'directvies/wfsidetop.html',
      restrict: 'E',
      scope: {
        titles:'='
        },
      link: function postLink(scope, element, attrs) {
        scope.$watch('titles', function(value) {
          scope.titles = value || sidetopConstant.set.titles;
        });
        scope.$watch('companyName', function(value) {
          scope.companyName = value || sidetopConstant.set.companyName;

        });
        //scope.$watch('conpany', function(value) {
        //  scope.conpany = value || sidetopConstant.set.conpany;
        //
        //});
      }
    };
  });
