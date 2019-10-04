function dateHomePage(){
    let Mytime = document.getElementById("dateOfBirth").value;
   
    if(!Mytime){
        document.getElementById("dOB").innerHTML = 'Пустое поле Имя';
    }else{
        let date = new Date(Mytime);
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
