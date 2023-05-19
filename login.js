var uname=document.getElementById('username');
var pswd=document.getElementById('exampleInputPassword1');
var e1=document.getElementById('error1');
var e2=document.getElementById('error2');

function validate(){
  
    if(uname.value =="admin"){
        if(pswd.value == '12345'){
            alert('login successful')
            return true;
        }
        else if(pswd.value ==''){
            e2.innerText="Please enter valid password";
        }
        else{
            e2.innerText="Enter Correct Password";
        }
    }

    else if(uname.value==''){
        e1.innerText="Please enter valid username";
        return false;
    }
    else{
        alert('Enter correct Username');
        return false;
    }
}

