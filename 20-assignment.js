class Employee{
constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company){
this.emp_id = emp_id;
this.emp_name = emp_name;
this.emp_dept = emp_dept;
this.emp_salary = emp_salary;
this.emp_company = emp_company;
}
}


const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74080, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_gonika = new Employee(77, "Monika", "IT", 48080, "Wipro");
const emp_viny = new Employee(88, "Vinayak" , "IT", 75808, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85101, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_gonika, emp_viny, emp_mahi];
  arrayEmployees.forEach( (Employee)=> {
    if(Employee.emp_company==="TCS"){
    console.log(Employee.emp_name, Employee.emp_company);
    }
});

arrayEmployees.forEach( (Employee)=> {
    if(Employee.emp_dept==="Finance"){
        console.log(Employee.emp_name, Employee.emp_dept);
    }
});

arrayEmployees.forEach( (Employee)=> {
    if(Employee.emp_name.startsWith("R")){
        console.log(Employee);
    }
  });

  arrayEmployees.forEach( (Employee)=> {
    if(Employee.emp_salary>75000){
        console.log(Employee.emp_name, Employee.emp_company, Employee.emp_salary);
    }
  });

  arrayEmployees.forEach( (Employee)=> {
    if(Employee.emp_salary>=50000 && Employee.emp_dept==="IT"){
        console.log(Employee);
    }
  });

  arrayEmployees.forEach( (Employee)=> {
    if(Employee.emp_company==="Infy"){
        console.log(Employee);
    }
  });