var citiesByState = {

    Odisha: ["Bhubaneswar", "Puri", "Cuttack", "Kurda"],
  
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nanded"],
  
    Kerala: ["kochi", "Trivandrum", "Alappuzha", "Vayanad"],
  
    AndhraPradesh: ["Vizag", "Guntur", "Vijayawada", "Vijayanagaram"],
  
    TamilNadu: ["Chennai", "Coimbatore", "Thanjavur", "Madurai"],
  
    Karnataka: ["Bengaluru", "Manglore", "Mysore", "Hosur"],
  
    MadhyaPradesh: ["Indore", "Jabalpur", "Bhopal", "Gwalior"],
    
    UttarPradesh: ["Meerut", "Noida", "Moradabad", "Lucknow"]
  
  }
  
  function makeSubmenu(value) {
  
    if (value.length == 0)
  
  
  
      document.getElementById("citySelect").innerHTML = "<option></option>";
  
    else {
  
      var citiesOptions = "";
  
      for (cityId in citiesByState[value]) {
  
        citiesOptions += "<option>" + citiesByState[value][cityId] + "</option>";
  
      }
  
      document.getElementById("citySelect").innerHTML = citiesOptions;
  
    }
  
  }
  
  function displaySelected() {
    var country = document.getElementById("countrySelect").value;
    var city = document.getElementById("citySelect").value;
  
    alert(country + "\n" + city);
  
  }
  
  document.getElementById("countrySelect").selectedIndex = 0;
  
  document.getElementById("citySelect").selectedIndex = 0;
  
  
  
  function check () {
    // (C1) INIT
    var valid = true, error = "", field = "";
  
    // (C2) NAME
    field = document.getElementById("uname");
    error = document.getElementById("cuname");
    if (!field.checkValidity()) {
      valid = false;
      field.classList.add("err");
      error.innerHTML = "*Username is required";
    } else {
      field.classList.remove("err");
      error.innerHTML = "";
    }
  
    return valid;
  }

  const uname = document.getElementById("uname"); 
  const uemail = document.getElementById("email");


uname.addEventListener("submit", addTodo);

function addTodo(e) {
  e.preventDefault();
  const userInput = document.querySelector(".userName").value;
  localStorage.setItem('userName', userInput);
}

function callme(){
  var name = document.getElementById('uname').value;
  localStorage.setItem('name', name);
  var email = document.getElementById('email').value;
  localStorage.setItem('email', email);
 

}

const pswrd_1 = document.querySelector("#pswrd_1");
    const pswrd_2 = document.querySelector("#pswrd_2");
    const errorText = document.querySelector(".error-text");
    const showBtn = document.querySelector(".show");
    const btn = document.querySelector("button");
    function active(){
      if(pswrd_1.value.length >= 5){
        btn.removeAttribute("disabled", "");
        btn.classList.add("active");
        pswrd_2.removeAttribute("disabled", "");
      }else{
        btn.setAttribute("disabled", "");
        btn.classList.remove("active");
        pswrd_2.setAttribute("disabled", "");
      }
    }
    btn.onclick = function(){
      if(pswrd_1.value != pswrd_2.value){
        errorText.style.display = "block";
        errorText.classList.remove("matched");
        errorText.textContent = "Error! Passwords Do Not Match";
        return false;
      }else{
        errorText.style.display = "block";
        errorText.classList.add("matched");
        errorText.textContent = "Nice! Passwords Match";
        return false;
      }
    }
    function active_2(){
      if(pswrd_2.value != ""){
        showBtn.style.display = "block";
        showBtn.onclick = function(){
          if((pswrd_1.type == "password") && (pswrd_2.type == "password")){
            pswrd_1.type = "text";
            pswrd_2.type = "text";
            this.textContent = "HIDE";
            this.classList.add("active");
          }else{
            pswrd_1.type = "password";
            pswrd_2.type = "password";
            this.textContent = "SHOW";
            this.classList.remove("active");
          }
        }
      }else{
        showBtn.style.display = "none";
      }
    }



    //onkeyup="active()" onkeyup="active_2()"
  