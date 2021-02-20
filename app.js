// let peso = document.getElementById('peso');
// let sedentario = document.getElementById('sedentario');
// let activo = document.getElementById('activo');

// $(document).ready(function () {
//     $('#mostrarDispeso').hide();
//     $('#mostrarAupeso').hide();
// });

let peso = document.getElementById('peso');
let checkbox = document.querySelectorAll("input[name=actividad]");
let caloriabasal = document.getElementById('cal_basal');
// grasa


console.log(peso.value);
for (let index = 0; index < checkbox.length; index++) {
    const element = checkbox[index];
  
    element.addEventListener('change', function() {
         if ( this.id == 'sedentario') {
            calSed = (peso.value * 2.2046) * 14
             caloriasBasales = Math.round(calSed);
            caloriabasal.innerHTML= `
                 ${caloriasBasales}
             `;
               

         } else {

            calActiv = (peso.value * 2.2046) * 16
            caloriasBasales = Math.round(calActiv);
            caloriabasal.innerHTML= `
                 ${caloriasBasales}
             `;
            
        
             
         }

      

      });
      
}

let objetivo = document.querySelectorAll("input[name=objetivo]");

for (let index = 0; index < objetivo.length; index++) {
    const element = objetivo[index];
  
    element.addEventListener('change', function() {
      
         if (this.id == 'aumento') {
             $('#mostrarAupeso').show();
             $('#mostrarDispeso').hide();
               total= caloriasBasales + 500;
             $('.totalCal').text(`
             ${ total}
              `);
              
              $('#prot').text(`${Math.round(peso.value * 2.2046 * 1)}`);
            // grasa   
            $('#grasa').text(`${Math.round(peso.value * 2.2046 * 0.3)}`);
            p = Math.round(peso.value * 2.2046 * 1);
            g = Math.round(peso.value * 2.2046 * 0.3);
               c = p * 4 + g * 9;
               $('#carbo').text(`
               ${ (total - c) / 4}
                `);
            

         } else if (this.id == 'reduccion'){
            $('#mostrarDispeso').show();
            $('#mostrarAupeso').hide();
            total= caloriasBasales - 500;
               $('.totalCal').text(`
              ${ total}
               `);
               $('#prot').text(`${Math.round(peso.value * 2.2046 * 1.1)}`);
                // grasa  
                $('#grasa').text(`${Math.round(peso.value * 2.2046 * 0.3)}`);   
                p = Math.round(peso.value * 2.2046 * 1);
                g = Math.round(peso.value * 2.2046 * 0.3);
                   c = p * 4 + g * 9;
                   $('#carbo').text(`
                   ${ (total - c) / 4}
                    `);     
         }

        

      });
      
}








// CALCULOS 
// KG * 2.2046 LIBRAS   * 14 / 16 
// CALORIA BASAL 2500 CAL




// if (this.checked) {
            
// } else {
//   console.log("Checkbox is not checked..");      
// }
















