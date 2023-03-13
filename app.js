
let allEmployees=[];
function Employee(EmployeeID, fullName, Department, Level, imageURL,salary){
    this.EmployeeID=EmployeeID;
    this.fullName=fullName;
    this.Department=Department;
    this.Level=Level;
    this.imageURL=imageURL;
    this.Salary= salary;
    allEmployees.push(this);
};

Employee.prototype.salaryCalculator = function (){
    if(this.Level="Senior"){
        this.Salary=randomNumber(1500, 2000)*0.925;
    }
    else if(this.Level="Mid-Senior"){
        this.Salary=randomNumber(1000, 1500)*0.925;
    }
    else{
        this.Salary=randomNumber(500, 1000)*0.925;
    }
}

Employee.prototype.render = function (){
    document.write(`Employee Name = ${this.fullName} &nbsp &nbsp &nbsp Salary = ${this.Salary}<br><br><br>`);
}

let Ghazi = new Employee(1000, "Ghazi Samer", "Administration",  "Senior");
let Lana = new Employee(1001, "Lana Ali", "Finance",  "Senior");
let Tamara = new Employee(1002, "Tamara Ayoub", "Marketing",  "Senior" );
let Safi = new Employee(1003, "Safi Walid", "Administration",  "Mid-Senior" );
let Omar = new Employee(1004, "Omar Zaid", "Development",  "Senior" );
let Rana = new Employee(1005, "Rana Saleh", "Development",  "Junior" );
let Hadi = new Employee(1006, "Hadi Ahmad", "Finance",  "Mid-Senior" );


function randomNumber(min, max){
    return Math.floor(Math.random()* (max-min))+min;
}

function outputViewer(E){
    for (let i = 0; i < allEmployees.length; i++) {
        allEmployees[i].salaryCalculator();
        allEmployees[i].render();
    }
} 

outputViewer();



