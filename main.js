function theMain(){


  //Генерирование массива
    var arrRand=[];
    arrRand.lenth=999999;
    var startGeneration = new Date ();
    for (let i=0; i<=arrRand.lenth; i++){
      arrRand[i]=Math.round(Math.random()*1000);
    };
    var endGeneration = new Date ();
    console.log(arrRand);
    var timeGeneration= endGeneration-startGeneration;
    console.log('Время генерации массива из случайных чисел (миллисекунд) ');
    console.log(timeGeneration);


function compareNumeric(a,b){
  if (a>b) return 1;
  if (a<b)return -1;
}

    //Сортировка
    var startSort= new Date();
    var sortedArrRand = arrRand.sort( compareNumeric );
    console.log(sortedArrRand);
    var endSort= new Date();
    var timeSort= endSort-startSort;
    console.log('Время сортировки от меньшего к большему (миллисекунд) ');
    console.log(timeSort);

    var startSortRev= new Date();
    var sortedArrRandRev = sortedArrRand.reverse();
    console.log(sortedArrRandRev);
    var endSortRev= new Date();
    var timeSortRev= endSortRev-startSortRev;
    console.log('Время сортировки от большего к меньшему (миллисекунд) ');
    console.log(timeSortRev);

    var summofArr=0;
    var startCalc = new Date ();
    for (let i=0; i<=arrRand.lenth; i++){
      var summofArr=summofArr+arrRand[i];
    };
    var endCalc = new Date ();
    console.log('Сумма всех элементов массива ');
    console.log(summofArr);
    var timeCalc= endCalc-startCalc;
    console.log('Время суммирования (миллисекунд) ');
    console.log(timeCalc);



// Транспортная задача
var matrix=[[1,3,4,2],[4,5,8,3],[2,3,6,7]];
var matrixA=[60,80,100];
var matrixB=[40,60,80,60];
for (var iOfA =0;iOfA<3;iOfA++){
  for(var iOfB=0;iOfB<4;iOfB++ ){
          var min = Math.min(matrixA[iOfA], matrixB[iOfB]);
          matrix[iOfA][iOfB] = min;
          matrixA[iOfA] -= min;
          matrixB[iOfB] -= min;
  };

}
console.log(matrix);

}
