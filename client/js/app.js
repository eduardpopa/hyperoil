
app = angular.module('storeApp', ['ngCart']);

app.controller ('ngStore', ['$scope', '$http', 'ngCart', function($scope, $http, ngCart) {
    ngCart.setTaxRate(20);
    ngCart.setShipping(15);
}]);
app.controller('orderController', [              
    '$scope',                              
    function orderController($scope) {  


  $scope.options = [
    { label: '0', value: 0 },
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 }
  ];
 
 
  $scope.myBed = $scope.options[0];
  $scope.myNightstand = $scope.options[0];
  $scope.myHammock = $scope.options[0];

  $scope.pokus = 'trt';
  }
]);


app.controller('productsController', [              
    '$scope',                              
    function productsController($scope) {        
        $scope.items = [
            {id:'100410', url:'#hyperoil_1', name:'250ml Glass Bottle oily formulation', image:'img/hyperoil-250ml.png', price:345, oldprice:450, summary:'Recomandat pentru: arsuri, cicatrici', description:'rpod 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, <br>vdf vdfvfdvfd fgbgf <br>vdf vdfvfdvfd fgbgf<br>vdf vdfvfdvfd fgbgf<br>vdf vdfvfdvfd fgbgf<br>vdf vdfvfdvfd fgbgf<br>vdf vdfvfdvfd fgbgf<br>vdf vdfvfdvfd fgbgf<br>vdf vdfvfdvfd fgbgf<br>vdf vdfvfdvfd fgbgf<br>vdf vdfvfdvfd fgbgf<br>vdf vdfvfdvfd fgbgf', images:'img/01.jpg,img/02.jpg,img/03.jpg,img/04.jpg,img/05.jpg'},
            {id:'100610', url:'#hyperoil_2', name:'100ml Glass Bottle with spray nozzle oily formulation' , image:'img/hyperoil-oil-spray-100ml.png', price:345, oldprice:450, summary:'lorem ipsum .....', description:' csvs vdfv2 bLorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, ', images:'img/01.jpg,img/02.jpg,img/03.jpg,img/04.jpg,img/05.jpg'},
            {id:'100100SP0', url:'#hyperoil_3', name:'100ml Gel Spray', image:'img/100ml_Gel_Spray.png', price:345, oldprice:450, summary:'lorem ipsum .....', description:'ewg reg3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, ', images:'img/01.jpg,img/02.jpg,img/03.jpg,img/04.jpg,img/05.jpg'},
            {id:'10050CG0', url:'#hyperoil_4', name:'50ml Glass Dropping Bottle oily formulation', image:'img/hyperoil-dropper-50ml.png', price:345, oldprice:450, summary:'lorem ipsum .....', description:'fdg fdgfd4 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, ', images:'img/01.jpg,img/02.jpg,img/03.jpg,img/04.jpg,img/05.jpg'},
            {id:'10040GV0', url:'#hyperoil_5', name:'40 pcs. (10x10) Gauzes with O.P. Vaseline', image:'img/Gauzes-Hyperoil-40-10x10.png', price:345, oldprice:450, summary:'lorem ipsum .....', description:'1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, ', images:'img/01.jpg,img/02.jpg,img/03.jpg,img/04.jpg,img/05.jpg'},
            {id:'10010GM0S', url:'#hyperoil_6', name:'10 pcs. (10x10) Medicated Gauzes individually packed', image:'img/Gauzes-Hyperoil-10-10x10.png', price:345, oldprice:450, summary:'lorem ipsum .....', description:'1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, ', images:'img/01.jpg,img/02.jpg,img/03.jpg,img/04.jpg,img/05.jpg'},
            {id:'10030TG0', url:'#hyperoil_7', name:'30ml Gel Tube with applicator', image:'img/hyperoil-tube-gel.png', price:345, oldprice:450, summary:'lorem ipsum .....', description:'1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, ', images:'img/01.jpg,img/02.jpg,img/03.jpg,img/04.jpg,img/05.jpg'},
            {id:'100501HY', url:'#hyperoil_8', name:'5ml Gel Vial with cap - Single Pouch', image:'img/Hyperoil_fiala-GEL.png', price:345, oldprice:450, summary:'lorem ipsum .....', description:'1Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sapien risus, blandit at fringilla ac, ', images:'img/01.jpg,img/02.jpg,img/03.jpg,img/04.jpg,img/05.jpg'}
       ];
        $scope.navigateToCheckOut = function(id, modal){
            if(modal)
                $('#project-modal-'+id).modal('toggle')
            $('a[href="#orderform"]').click();
        }
    }                                                
]); 