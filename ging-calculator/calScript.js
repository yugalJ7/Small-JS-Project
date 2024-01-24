let calculation = localStorage.getItem('calculation') || ' ';

    displayCalculation();

    function updateCalculation(expression){
      if(expression === ''){
        calculation = '';
        console.log(calculation);
      }
      else if(expression === '='){
        calculation = eval(calculation);
        console.log(calculation);
      }else{
        calculation += expression;
        console.log(calculation);
      }
      displayCalculation();
      localStorage.setItem('calculation' ,calculation);

      // localStorage.setItem('calculation' , JSON.stringify(calculation));
    }
    function displayCalculation(){
      document.querySelector('.js-showCal')
        .innerHTML = calculation;
    }