
let selectionDate;

datepicker("#birthday", {
    onSelect: (instance, date) => {
      
      selectionDate = date;}});

let calculateBtn = document.getElementById("calculateButton");
let inputElement = document.getElementById("birthday");
let userInput = inputElement.value;
let resultDisplay = document.querySelector(".result")


calculateBtn.addEventListener("click", () => {
  
  
      let birthday = luxon.DateTime.fromJSDate(selectionDate);
      
      let now = luxon.DateTime.now();
      
      let ageDiff = now.diff(birthday, ['years', 'months', 'days']).toObject();  
    

let ageYear = Math.floor(ageDiff.years);
let ageMonth = Math.floor(ageDiff.months);
let ageDay = Math.floor(ageDiff.days);

resultDisplay.innerHTML = `<p style="text-align: center;"> Your age is : </p>
<p style="text-align: center;">${ageYear} Years & ${ageMonth} Months & ${ageDay} Days Years Old!</p>`;


      
});