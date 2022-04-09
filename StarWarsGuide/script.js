var count = 0;

$('#switch').click(function(){
     
     if(count == 0){
          $('#e3').insertBefore('#e4');          
          $('#e2').insertBefore('#e3');
          $('#e1').insertBefore('#e2');  
          $('#orden').html('Orden cronológico');
          count = 1;        
     }
     else{
          $('#e6').insertBefore('#e1');          
          $('#e5').insertBefore('#e6');
          $('#e4').insertBefore('#e5');
          $('#orden').html('Orden en el que salieron');
          count = 0;
     }
    
});