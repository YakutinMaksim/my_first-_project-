function validation(){
    let username = document.getElementById("userName");
    let surname = document.getElementById("surName");
    let nameemail = document.getElementById("nameEmail");
    let namepassword = document.getElementById("namePassword");
    let confirmpassword = document.getElementById("confirmPassword");
    let dateofbirth = document.getElementById("dateOfBirth").value;


    if(checkName(username,4,15)){
    } if(checkSurname(surname,7,20)){
    } if(checkEmail(nameemail)){
    } if(checkPassword(namepassword,8)){
    } if(checkConfirmPassword(confirmpassword,namepassword)){
    } if(checkAge(dateofbirth,18)){
    }
    return true;
    
}
function checkName(username,nameMin,nameMax){ 
    let nameLength = username.value.length;
    let letters = /^[A-Za-z]+$/;

    if(!username.value){
        document.getElementById("uN").innerHTML = 'Пустое поле Имя';
         return false;
    } if(nameLength < nameMin || nameLength > nameMax){
        document.getElementById("uN").innerHTML = 'Число не подходит по размеру';
        return false;
    } if(!username.value.match(letters)){
        document.getElementById("uN").innerHTML = 'Ошибочно написано Имя';
        return false;
    }
}
function checkSurname(surname,nameMin,nameMax){ 
    let nameLength = surname.value.length;
    let letters = /^[A-Za-z]+$/;

    if(!surname.value){
        document.getElementById("sN").innerHTML = 'Пустое поле Фамилия';
        return false;
    } if(nameLength < nameMin || nameLength > nameMax){
        document.getElementById("sN").innerHTML = 'Число не подходит по размеру фамилия';
        return false;
    } if(!surname.value.match(letters)){
        document.getElementById("sN").innerHTML = 'В фамилию входит только буквы';
        return false;
    }
}
function checkEmail(nameemail){
   let letters = /.+@.+\..+/i;
   if(!nameemail.value){
        document.getElementById("nE").innerHTML = 'Пустое поле Email';
       return false; 
    } if(!nameemail.value.match(letters)){
        document.getElementById("nE").innerHTML = 'Возможно вы забыли дописать @ или . ';
        return false;  
   }
}
function checkPassword(namepassword,lengthPassword){
    let sizePassword = namepassword.value.length; 
    let letters = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g;
    if(!namepassword.value){
        document.getElementById("nP").innerHTML = 'Пустое поле Пароль';
        return false; 
    } if(sizePassword < lengthPassword){
        document.getElementById("nP").innerHTML = 'Длина пароля больше 8 символов';
        return false;
    } if(!namepassword.value.match(letters)){
        document.getElementById("nP").innerHTML = 'Не корректно введеные пароль:(нет  A-Z,a-z,0-9,символов)';
        return false;
    }
}
function checkConfirmPassword(confirmpassword,namepassword){
    if(!namepassword.value){
        document.getElementById("cP").innerHTML = 'Пустое поле Пароль';
        return false;
    } if(confirmpassword.value == namepassword.value){
         return true;
        } else {
            document.getElementById("cP").innerHTML = 'Пароли не совпали';
            return false;    
}
}  
function checkAge(dateofbirth,border){ 
    if(!dateofbirth){
        document.getElementById("dOB").innerHTML = 'Пустое поле Имя';
        return false;
    }else{
        let date = new Date(dateofbirth);
        let dateMy = Date.parse(date);
        let Today = Date.now();
        let age =(Today - dateMy) / (365*24*60*60*1000); 
        if(Math.floor(age) < 18){
            document.getElementById("dOB").innerHTML = 'Возрост меньше 18';
		}else {
            document.getElementById("dOB").innerHTML = 'Возрост больше';
        
        }
    }
}  
