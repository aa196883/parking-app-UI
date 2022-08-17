export class Parking{
    parkingNumber: string;
    owner: string;
    status: string;
    assignee: string;
    action: number;

    constructor(parkingNumber: string, owner: string, status: string, assignee: string, action: number){
        this.parkingNumber = parkingNumber;
        this.owner = owner;
        this.status = status;
        this.assignee = assignee;
        this.action = action;
    }
}