import {EmployeeList} from "../employee/EmployeeList";
import {ClientList} from "../client/ClientList";

var employee = new EmployeeList();
let client = new ClientList();

export class ServiceList{

    id;
    Employee = new EmployeeList();
    Client = new ClientList();
    date;
    start;
    end;

    constructor(data){
        this.id = data.id;
        this.Employee = data.Employee;
        this.Client = data.Client;
        this.date = data.date;
        this.start = data.start;
        this.end = data.end;
    }
}