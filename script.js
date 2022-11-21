/*
Name: Mark Holber/UML CS/mark_holber@student.uml.edu
Date: 11-10-2022
File: script.js
Description: Validation and modifications using jquery
*/


//when the document is ready to output, this function runs
$(document).ready(function(){
        
        
        
        test = 'Please insert desired values in chart and press <u>Make Table</u>'
      
        document.getElementById('t1').innerHTML = test;
    

        //validation for inputs
        $("#form1").validate({
                rules: {
                        xMin: {
                                number: true,
                                required: true,
                                min: -50,
                                max: 50,
                                
                                
                               
                        },
                        yMin: {
                                number: true,
                                required: true,
                                min: -50,
                                max: 50
                        },
                        xMax: {
                                number: true,
                                required: true,
                                min: -50,
                                max: 50
                        },
                        yMax: {
                                number: true,
                                required: true,
                                min: -50,
                                max: 50
                        },
                },
                //messages that output upon specific condition
                messages: {
                        xMin: {
                                number: "please enter a proper number",
                                required: "please enter a proper number",
                                min: "Please enter a number greater than -50",
                                max: "Please enter a number no higher than 50"
                         
                        },
                        yMin: {
                                number: "please enter a proper number",
                                required: "please enter a proper number",
                                min: "Please enter a number greater than -50",
                                max: "Please enter a number no higher than 50"
                        },
                        xMax: {
                                number: "please enter a proper number",
                                required: "please enter a proper number",
                                min: "Please enter a number greater than -50",
                                max: "Please enter a number no higher than 50"
                        },
                        yMax: {
                                number: "please enter a proper number",
                                required: "please enter a proper number",
                                min: "Please enter a number greater than -50",
                                max: "Please enter a number no higher than 50"
                        },
                },
        })
})
//when the button is clicked
function validate(){
       
        check();
        /*test = 'Please insert desired values in chart and press <u>Make Table</u>'
        column = 'Enter column minimum: '
        row = 'Enter row minimum: '
        minimum = '<u>Minimum must be lower than maximum</u>'
        correct = 'Please enter only acceptable values in chart'
        fill = 'Please fill in all necessary areas'


        document.getElementById('t1').innerHTML = test;


        var rowLow1 = document.getElementById('xMin').value;
        var rowHigh1 = document.getElementById('xMax').value;
        var colLow1 = document.getElementById('yMin').value;
        var colHigh1 = document.getElementById('yMax').value;
        


                var rowLow = parseInt(rowLow1, 10);
                var rowHigh = parseInt(rowHigh1, 10);
                var colLow = parseInt(colLow1, 10);
                var colHigh = parseInt(colHigh1, 10);
                
        if(rowLow > rowHigh && colLow > colHigh){
                document.getElementById('p3').innerHTML = minimum;
                document.getElementById('p1').innerHTML = minimum;
                document.getElementById('t1').innerHTML = correct;
        }
        else if(rowLow > rowHigh && colLow <= colHigh){
                document.getElementById('p1').innerHTML = minimum;
                document.getElementById('p3').innerHTML = row;
                document.getElementById('t1').innerHTML = correct;
        }
        else if(rowLow <= rowHigh && colLow > colHigh){
                document.getElementById('p3').innerHTML = minimum;
                document.getElementById('p1').innerHTML = column;
                document.getElementById('t1').innerHTML = correct;
        }      
        else if(!rowLow1 || !rowHigh1 || !colLow1 || !colHigh1){
                document.getElementById('t1').innerHTML = fill;
        }
        else{
                document.getElementById('p1').innerHTML = column;
                document.getElementById('p3').innerHTML = row;
                getValues2(); 
        }*/
      

        //validation form for checking requirments
        $("#form1").validate({
                rules: {
                        xMin: {
                                number: true,
                                required: true,
                                min: -50,
                                max: 50,
                               
                        },
                        yMin: {
                                number: true,
                                required: true,
                                min: -50,
                                max: 50
                        },
                        xMax: {
                                number: true,
                                required: true,
                                min: -50,
                                max: 50
                        },
                        yMax: {
                                number: true,
                                required: true,
                                min: -50,
                                max: 50
                        },
                },
                //messages that output upon specific condition
                messages: {
                        xMin: {
                                number: "please enter a proper number",
                                required: "please enter a proper number",
                                min: "Please enter a number greater than -50",
                                max: "Please enter a number no higher than 50"
                         
                        },
                        yMin: {
                                number: "please enter a proper number",
                                required: "please enter a proper number",
                                min: "Please enter a number greater than -50",
                                max: "Please enter a number no higher than 50"
                        },
                        xMax: {
                                number: "please enter a proper number",
                                required: "please enter a proper number",
                                min: "Please enter a number greater than -50",
                                max: "Please enter a number no higher than 50"
                        },
                        yMax: {
                                number: "please enter a proper number",
                                required: "please enter a proper number",
                                min: "Please enter a number greater than -50",
                                max: "Please enter a number no higher than 50"
                        },
                },
        }
      
)

};

//table being made
function getValues2(){
        var rowLow1 = document.getElementById('xMin').value;
        var rowHigh1 = document.getElementById('xMax').value;
        var colLow1 = document.getElementById('yMin').value;
        var colHigh1 = document.getElementById('yMax').value;
        


                var rowLow = parseInt(rowLow1, 10);
                var rowHigh = parseInt(rowHigh1, 10);
                var colLow = parseInt(colLow1, 10);
                var colHigh = parseInt(colHigh1, 10);
        
                //test statements
                var pass = 'All inputs are valid numbers'
                var fail = 'Not all inputs are valid numbers'
                var fail2 ="Minimum must be lower or equal to Maximum"
                var toHigh = 'Out of bounds, please input number between -50 and 50'

                
               
                 
                 if(typeof rowLow === 'number' && typeof rowHigh === 'number' && typeof colLow === 'number' && typeof colHigh === 'number')
                {
                 //       if((rowLow <= 50 && rowLow >=-50) && (rowHigh <= 50 && rowHigh >=-50) && (colLow <= 50 && colLow >=-50) && (colHigh <= 50 && colHigh >=-50)) 
                  //      {
                   //             
                    //    if(rowLow > rowHigh || colLow > colHigh)
                     //   {
                      //          document.getElementById('output5').innerHTML = fail2;
                       //         return;
                        //}
                        
                        //document.getElementById('output5').innerHTML = pass;
                       
                
                
                        
                    var font = '<table border="1">\n';
                     var body = ' ';
                     var emptySpace = '-'
                     var emptyCell = '-'
             
             
                        /*Table being made*/
                     for(var a = rowLow - 1, a1 = 0; a <= rowHigh; a++, a1++)
                     {
                        
                               
                                if(a1 == 0)
                                {
                                body = body + '<td>';
                                body = body + emptySpace;
                                body = body + '</td>';
                                }
             
                                else
                                {
                                body = body + '<td>';
                                body = body + a;
                                body = body + '</td>';
                                }
                                
             
                        
                     }
                     /*for(var sizeSide = (parseInt(rowHigh1, 10) - parseInt(rowLow1, 10)), sizeVert = (parseInt(colHigh1, 10) - parseInt(colLow1, 10)); sizeSide < 10; sizeVert++, sizeSide++)
                        {
                                body = body + '<td>';
                                body = body + emptyCell;
                                body = body + '</td>';
                        }*/
                    body = body + '<tr>';
                    body = body +'</tr>\n'; 
               
                         for(var b = colLow, b1 = 0; b <= colHigh; b++, b1++)
                         {
             
                               
                                body = body + '<td>';
                                body = body + b;
                                body = body + '</td>';
        
        
                        for(var a = rowLow; a <= rowHigh; a++)
                        {
                            
                                body = body + '<td>';
                                body = body + a * b;
                                body = body + '</td>';
                     
                        }
                  
                        /*for(var sizeSide = (parseInt(rowHigh1, 10) - parseInt(rowLow1, 10)), sizeVert = (parseInt(colHigh1, 10) - parseInt(colLow1, 10)); sizeSide < 10; sizeVert++, sizeSide++)
                        {
                                body = body + '<td>';
                                body = body + emptyCell;
                                body = body + '</td>';
                        }*/
                         
                                body = body + '<tr>';
                                body = body +'</tr>\n'; 
           
                     }
                     var bottom = '</table>';
                     document.getElementById('t1').innerHTML = font + body + bottom;
             
             
                     }
                
                
                //else
                //{
                 //       document.getElementById('output5').innerHTML = toHigh;
                 //       return;
                //}
        
                //}
                //else
                //{
                //        document.getElementById('output5').innerHTML = fail;
                //        return;
                //}   
        }


//Validation statements
function check(){
        test = 'Please insert desired values in chart and press <u>Make Table</u>'
        column = 'Enter column minimum: '
        row = 'Enter row minimum: '
        minimum = '<u>Minimum must be lower than maximum</u>'
        correct = 'Please enter only acceptable values in chart'
        fill = 'Please fill in all necessary areas'


        document.getElementById('t1').innerHTML = test;


        var rowLow1 = document.getElementById('xMin').value;
        var rowHigh1 = document.getElementById('xMax').value;
        var colLow1 = document.getElementById('yMin').value;
        var colHigh1 = document.getElementById('yMax').value;
        


                var rowLow = parseInt(rowLow1, 10);
                var rowHigh = parseInt(rowHigh1, 10);
                var colLow = parseInt(colLow1, 10);
                var colHigh = parseInt(colHigh1, 10);
                
        if(rowLow > rowHigh && colLow > colHigh){
                document.getElementById('p3').innerHTML = minimum;
                document.getElementById('p1').innerHTML = minimum;
                document.getElementById('t1').innerHTML = correct;
        }
        else if(rowLow > rowHigh && colLow <= colHigh){
                document.getElementById('p1').innerHTML = minimum;
                document.getElementById('p3').innerHTML = row;
                document.getElementById('t1').innerHTML = correct;
        }
        else if(rowLow <= rowHigh && colLow > colHigh){
                document.getElementById('p3').innerHTML = minimum;
                document.getElementById('p1').innerHTML = column;
                document.getElementById('t1').innerHTML = correct;
        }      
        else if(!rowLow1 || !rowHigh1 || !colLow1 || !colHigh1){
                document.getElementById('t1').innerHTML = fill;
        }
        else{
                document.getElementById('p1').innerHTML = column;
                document.getElementById('p3').innerHTML = row;
                getValues2(); 
        }
}


        
        
                
        
              
     
     






 

        
      

    
 
 
    
