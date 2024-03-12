function validData(){
   
    let name = document.getElementById("name").value;

    if(name=="")
    {
        alert("please enter name!");
        document.getElementById("name").focus();
        return false;
    }

    let email = document.getElementById("email").value;

    if(email=="")
    {
        alert("please enter Email!");
        document.getElementById("email").focus();
        return false;
    }

    let calander = document.getElementById("cle").value;

    if(calander=="")
    {
        alert("please enter Date!");
        document.getElementById("cle").focus();
        return false;
    }
    
    
    if((form.gender[0].checked==false)&&(form.gender[1].checked==false))
    {
        alert("please select gender!");
        return false;
    }

    if((form.hobby[0].checked==false)&&(form.hobby[1].checked==false))
    {
        alert("please select hobby!");
        return false;
    }
}