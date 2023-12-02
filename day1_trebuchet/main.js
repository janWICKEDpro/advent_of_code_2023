    const {readFile} = require('fs');




    function sumOfCalibrationValues(){
       readFile('input.txt', 'utf-8', (err, result)=>{
            if(err){
                console.log(err);
                return;
            }
            let stringLines = result.split('\n');
            let sumOfCalibrationValues = 0;
            let firstNumber = -1, lastNumber = -1;
            for(let i=0; i<stringLines.length; i++){
            
                for(let j=0; j<stringLines[i].length; j++){
                    const intVal = parseInt(stringLines[i][j]);
                    if(!isNaN(intVal)){
                        if(firstNumber  == -1){
                            firstNumber = intVal;
                        }else {
                            lastNumber = intVal;
                        }
                    }
                }
                if(lastNumber == -1) lastNumber = firstNumber
                sumOfCalibrationValues += (firstNumber * 10) + lastNumber;
                firstNumber = -1;
                lastNumber = -1;
            }
            console.log(sumOfCalibrationValues);
            return result;
        });
    
    }

    sumOfCalibrationValues()