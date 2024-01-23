document.getElementById('myform').addEventListener("submit",(event))
    event.preventDefault();
    var form={
        fname:document.getElementById(fname).value,
        lname:document.getElementById(lname).value,
        pno:document.getElementById(pno).value,
        address:document.getElementById(address).value,
        email:document.getElementById(email).value,
    };
    console.log(form);