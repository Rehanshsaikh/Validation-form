const Name = document.querySelector('#SupplierName');
const POval = document.querySelector('#PO_Value');
const Reent = document.querySelector('#ReEnter');
const Paid = document.querySelector('#Paid');
const status = document.querySelector('#status');
const error = document.querySelector('.error');
const submit = document.querySelector('#sub');
const tbody = document.querySelector('.tbody');
const diff = document.querySelector('#balanceAmount'); 
function getvalidation() {
    var RegEx = /[0-9]/;
    let valid = RegEx.test(POval.value);
    let numbervalid = RegEx.test(Paid.value);

    if (Name.value.length <= 5 || Name.value.length >= 15) {
        document.querySelector('.error').innerHTML = "Supplier Name Should be 5 t0 15 alphabets Long"
        document.querySelector('#SupplierName').style.border = "1px solid red";
        status.value = "Failed"

    }
    else if (!valid) {
        document.querySelector('#SupplierName').style.border = "";
        document.querySelector('.error').innerHTML = 'po number must be a number';
        document.querySelector('#PO_Value').style.border = "1px solid red";
        status.value = "Failed"
    }
    else if (Reent.value != POval.value) {
        document.querySelector('.error').innerHTML = 'po number does not match';
        document.querySelector('#PO_Value').style.border = "";
        document.querySelector('#ReEnter').style.border = "1px solid red";
        status.value = "Failed"
    }
    else if (!numbervalid) {
        document.querySelector('.error').innerHTML = 'Please enter amount in number';
        document.querySelector('#Paid').style.border = "1px solid red";
        document.querySelector('#ReEnter').style.border = "";
        status.value = "Failed"
    }
    else if(diff.value < 0){
        document.querySelector('.error').innerHTML = 'Please enter paid amount equal to po amout or less';
        document.querySelector('#balanceAmount').style.border = "1px solid red";
        status.value = "Failed"
    }
    else {
        document.querySelector('.error').innerHTML = '';
        document.querySelector('#SupplierName').style.border = "";
        document.querySelector('#PO_Value').style.border = "";
        document.querySelector('#ReEnter').style.border = "";
        document.querySelector('#Paid').style.border = "";

    }

    if (error.innerHTML.length == 0) {
        document.querySelector('#status').value = "Success";
        document.querySelector('#SupplierName').style.border = "solid green";
        document.querySelector('#PO_Value').style.border = "solid green";
        document.querySelector('#ReEnter').style.border = "solid green";
        document.querySelector('#Paid').style.border = "solid green";
        document.querySelector('#status').style.border ="solid green";
        document.querySelector('#balanceAmount').style.border = "solid green";
        document.querySelector('.validate').style.display = "none";
    }
}

document.querySelector('#val').addEventListener("click", (event) => {
    event.preventDefault();
    getvalidation();
})

// document.querySelector('#sub').addEventListener("click",(a)=>{
//     a.preventDefault();
//     getdata();
// })
submit.addEventListener('click',() => {
    console.log("working")
    if(document.querySelector('.error').value == "Failed"){
        document.querySelector('.error').innerHTML = 'Please first validate';
    }
    
    if(document.querySelector('#status').value == "Success"){
        document.querySelector('.tbody').innerHTML += `<tr>
                    <td>${Name.value}</td>
                    <td>${POval.value}</td>
                    <td>${Paid.value}</td>
                    <td>${diff.value}</td>
                    <td>Success</td>
                </tr>`;
                document.querySelector('#stud').reset();
                document.querySelector('#status').value = "";
                Name.style.border = "";
                POval.style.border = "";
                Reent.style.border = "";
                Paid.style.border = "";
                diff.style.border = "";
                status.style.border ="";
        document.querySelector('.validate').style.display = "";
    }
})
tbody.addEventListener('submit',(a) => {
    
    a.preventDefault();

})

function difference(){
    diff.value = Reent.value - Paid.value
}
