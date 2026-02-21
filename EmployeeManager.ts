

interface Employee_data {
    name: string;
    salary: number;
    isActive: boolean;
}

class EmployeeManager {
    employees: Employee_data[] = [];

    public addEmployee(name: string, salary: number) {
        this.employees.push({ name: name, salary: salary, isActive: true });
    }

    public findEmployee(searchName: string) {
        for (let i = 0; i < this.employees.length; i++) {
          if (this.employees[i].name === searchName) {
            return this.employees[i];
        }
        }
        return null;
    }
    
    public promoteEmployee(emp: Employee_data, isPromoted: boolean) {
        if (isPromoted) {
            emp.salary += 5000;
        }
    }
}

const manager = new EmployeeManager();
manager.addEmployee("Alice", 70000);
manager.addEmployee("Bob", 65000);

manager.promoteEmployee(manager.employees[0], true);