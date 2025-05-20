var t1=document.getElementById("t1");
var t2=document.getElementById("t2");
var t3=document.getElementById("t3");
var t4=document.getElementById("t4");
var t5=document.getElementById("t5");
var t6=document.getElementById("t6");
var t7=document.getElementById("t7");
var t8=document.getElementById("t8");
var t9=document.getElementById("t9");
var t10=document.getElementById("t10");
var t11=document.getElementById("t11");
var t12=document.getElementById("t12");


// function calculate(){

//     if(t1.querySelector("input").value=="" || t2.querySelector("input").value=="" || t3.querySelector("input").value=="" || t4.querySelector("input").value=="" || t5.querySelector("input").value=="" || t6.querySelector("input").value=="" || t7.querySelector("input").value=="" || t8.querySelector("input").value=="" || t9.querySelector("input").value=="" || t10.querySelector("input").value=="" || t11.querySelector("input").value=="" || t12.querySelector("input").value=="" ){
//         alert("Please Fill all input fields or Enter valid values in all input fields.");
//     }else{
        
//         document.querySelector("#check-button").disabled = false
//     }}

function checkYourResult(){

        if(t1.querySelector("input").value=="" || t3.querySelector("input").value=="" || t5.querySelector("input").value=="" || t6.querySelector("input").value=="" || t7.querySelector("input").value=="" || t8.querySelector("input").value=="" || t9.querySelector("input").value=="" || t10.querySelector("input").value=="" || t11.querySelector("input").value=="" || t12.querySelector("input").value=="" ){
            alert("Please Fill all input fields or Enter valid values in all input fields.");
        }else{
            let flag=true
        if(t1.querySelector("input").value!=17.72){
            t1.querySelector("input").style.color="red"
            flag=false
        }
        
        // if(t2.querySelector("input").value!=laminar || Laminar){
        //     t2.querySelector("input").style.color="red"
        //     flag=false
        // }
        
        if(t3.querySelector("input").value!=3.54){
            t3.querySelector("input").style.color="red"
            flag=false
        }
        
        // if(t4.querySelector("input").value!=turbulent || Turbulent){
        //     t4.querySelector("input").style.color="red"
        //     flag=false
        // }
        
        if(t5.querySelector("input").value!=0.000017){
          t5.querySelector("input").style.color = "red"
          flag= false
        }
        

if(t6.querySelector("input").value!=0.084192){
  t6.querySelector("input").style.color = "red"
  flag= false
}
       

if(t7.querySelector("input").value!=1339.039488){
  t7.querySelector("input").style.color = "red"
  flag= false
}
        
        if(t8.querySelector("input").value!="Laminar"){
            t8.querySelector("input").style.color="red"
            flag=false
        }
        
        if(t9.querySelector("input").value!=0.000085){
          t9.querySelector("input").style.color = "red"
          flag= false
        }

        if(t10.querySelector("input").value!=0.421436){
          t10.querySelector("input").style.color = "red"
          flag= false
        }      
        
        if(t11.querySelector("input").value!=6702.762634){
          t11.querySelector("input").style.color = "red"
          flag= false
        }           

        if(t12.querySelector("input").value!="Turbulent"){
            t12.querySelector("input").style.color="red"
            flag=false
        }

        // if(t12.querySelector("input").value!="turbulent" || t12.querySelector("input").value!="Turbulent"){
        //     t12.querySelector("input").style.color="red"
        //     flag=false
        // }
        if(flag){
        
            for (let i = 0; i < 5; i++) {
                document.querySelector(".result-table").style.display = "none"
                confetti();
              }
            
            alert("Congratulations! You have successfully completed the experiment.");
        }else{
            document.querySelector(".result-table").style.display = "flex"
        }   
    }
}
         
     
function exportToExcel() {
  var wb = XLSX.utils.book_new();

  /* Observation Table */
  var observationTable = document.querySelector('.observationTable');
  var observationSheetData = [];
  var observationRows = observationTable.querySelectorAll('tr');
  observationRows.forEach(function (row) {
      var rowData = [];
      row.querySelectorAll('th, td').forEach(function (cell) {
          if (cell.querySelector('input')) {
              rowData.push(cell.querySelector('input').value);
          } else {
              rowData.push(cell.textContent);
          }
      });
      observationSheetData.push(rowData);
  });
  var observationSheet = XLSX.utils.aoa_to_sheet(observationSheetData);
  XLSX.utils.book_append_sheet(wb, observationSheet, "Observation Table");

  /* Calculation Table */
  var calculationTable = document.querySelector('.calculationTable');
  var calculationSheetData = [];
  var calculationRows = calculationTable.querySelectorAll('tr');
  calculationRows.forEach(function (row) {
      var rowData = [];
      row.querySelectorAll('th, td').forEach(function (cell) {
          if (cell.querySelector('input')) {
              rowData.push(cell.querySelector('input').value);
          } else {
              rowData.push(cell.textContent);
          }
      });
      calculationSheetData.push(rowData);
  });
  console.log(calculationSheetData, 'sdaklsdjas')
  var calculationSheet = XLSX.utils.aoa_to_sheet(calculationSheetData);
  XLSX.utils.book_append_sheet(wb, calculationSheet, "Calculation Table");

  /* Save workbook to file */
  XLSX.writeFile(wb, "table_data.xlsx");
}