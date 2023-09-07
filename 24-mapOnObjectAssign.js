
class Employee{
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
    }
    show(){
        console.log(`Employee Details is Employee ID: ${this.emp_id}, Full Name: ${this.emp_name} , Employee Dept: ${this.emp_dept}
        Salary: ${this.emp_salary}, Employee Compnay: ${this.emp_company}`);
      }
    }
    
    
    const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
    const emp_radha = new Employee(33, "Radha", "HR", 74080, "Wipro");
    const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
    const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
    const emp_gonika = new Employee(77, "Monika", "IT", 40080, "Wipro");
    const emp_viny = new Employee(88, "Vinayak" , "IT", 75008, "TCS");
    const emp_mahi = new Employee(99, "Mahesh", "HR", 85001, "Infy");
    
    const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_gonika, emp_viny, emp_mahi];

    const arrayOfName = arrayEmployees.map((Employee)=>{
        return Employee.emp_name;
    });
    console.log(`Employee Names: ${arrayOfName}`);

    console.log(`**************************************`);

    const arrayOfDept = arrayEmployees.map((Employee)=>{
        return Employee.emp_dept;
    });
    console.log(`Employee Departments: ${arrayOfDept}`);

    console.log(`**************************************`);


    const arrayOfId = arrayEmployees.map((Employee)=>{
        return Employee.emp_id;
    });
    console.log(`Employee Id's: ${arrayOfId}`);