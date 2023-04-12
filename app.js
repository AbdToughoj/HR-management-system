
let allEmployees=[];

function Employee(fullName, department, level, imageURL){
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;

    this.generateID()
    this.salaryCalculator();
    this.addEmployeeToList();
};

Employee.prototype.salaryCalculator = function (){
    if(this.level == "senior"){
        this.salary = randomNumber(1500, 2000)*0.925;
    }
    else if(this.level == "mid-senior"){
        this.salary = randomNumber(1000, 1500)*0.925;
    }
    else if (this.level == "junior"){
        this.salary = randomNumber(500, 1000)*0.925;
    }
}

Employee.prototype.generateID = function (){ 
    this.id =  Math.floor(1000 + Math.random() * 9000);
}

Employee.prototype.addEmployeeToList = function (){ 
    // if(! allEmployees ){
    //     allEmployees = {};
    // }

    // if(allEmployees[this.department]){
    //     allEmployees[this.department].push(this);
    // }else{
    //    allEmployees[this.department] = [this]
    // }

    allEmployees.push(this);
}

function render (employee){
    let card = `<div class="card" style="width:400px;margin-right: 20px;" >
                    <img class="card-img-top" src="${employee.imageURL}" alt="Card image" style="width:100%">
                    <div class="card-body">
                        <h4 class="card-title"> Name: ${employee.fullName} - ID: ${employee.id}</h4>
                        <p class="card-text">Department${employee.department} - Level: ${employee.level}</p>
                        <p class="card-text"> Salary: ${employee.salary}</p>
                    </div>
                </div>`
    document.getElementById("employees").innerHTML += card;
}

function randomNumber(min, max){
    return (Math.floor(Math.random() * (max-min))+min);
}

function displayAllEmployees(){
    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].salaryCalculator();
        allEmployees[i].render();
    }
} 

function addEmployee(event){
    event.preventDefault();

    let employeeForm = document.forms.employee_form;

    let formData = new FormData(employeeForm);

    let newEmployee = new Employee(
            formData.get('fullname'), 
            formData.get('department'),
            formData.get('level'),
            formData.get('image_url'));

    this.render(newEmployee);

    localStorage.setItem("allEmployees", JSON.stringify(allEmployees));
}

$(document).ready(function () {
    let employeesInStorage = JSON.parse((localStorage.getItem('allEmployees')));
    allEmployees = employeesInStorage !==null ? employeesInStorage : [];
    if(allEmployees){
        for (let i = 0; i < allEmployees.length; i++) {
            render(allEmployees[i]);
        }
    }
});



