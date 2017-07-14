app.directive('focusOn',function($timeout) {
    return {
        restrict : 'A',
        link : function($scope,$element,$attr) {
            $scope.$watch($attr.focusOn,function(_focusVal) {
                $timeout(function() {
                    _focusVal ? $element.focus() :
                        $element.blur();
                });
            });
        }
    }
});


app.directive('datePicker', function() {
        return {
            restrict : 'A',
            link: function($scope,$element,$attr) {
                console.log($element);
                // $scope.$apply(function () {
                   $element.datepicker({
                        format: 'dd/mm/yyyy',                
                        language: 'pt-BR',
                        // startDate: new Date(),
                        todayHighlight: true
                    });
                // });
            }
        }
    });