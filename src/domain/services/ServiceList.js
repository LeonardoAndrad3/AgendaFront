import {EmployeeList} from "../employee/EmployeeList";
import {ClientList} from "../client/ClientList";

export class ServiceList{

    id;
    employee = new EmployeeList();
    client = new ClientList();
    date;
    start;
    end;

    constructor(data){
        this.id = data.id;
        this.employee = data.Employee;
        this.client = data.Client;
        this.date =  new Date(data.date);
        this.start = data.start;
        this.end = data.end;
    }

    getformatDate(){
        let month = this.date.getMonth();
        let day = this.date.getDate();
        return `${month < 10 ? `0${month}` : month}/${day}`
    }

    formatHours(hours){
        hours = hours.split(":");
        return `${hours[0]}:${hours[1]}`;
    }
}