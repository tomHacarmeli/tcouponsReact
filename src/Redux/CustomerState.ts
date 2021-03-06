import Customer from "../Models/Customer";



export class CustomerState{
    public customers:Customer[] = [];
}

export enum CustomerActionType{
    CustomerDownloaded="CustomerDownloaded",
    CustomerAdded = "CustomerAdded",
    CustomerUpdated = "CustomerUpdated",
    CustomerDelete = "CustomerDelete"
}

export interface CustomerAction{
    type:CustomerActionType;
    payload?: any;
}

export function customerDownloadedAction(customers: Customer[]):CustomerAction{
    return {type: CustomerActionType.CustomerDownloaded, payload:customers}
}
export function customerAddedAction(customer: Customer):CustomerAction{
    return {type: CustomerActionType.CustomerAdded, payload:customer}
}

export function customerUpdateAction(customer: Customer):CustomerAction{
    return {type: CustomerActionType.CustomerUpdated, payload:customer}
}

export function customerDeleteAction(id:number):CustomerAction{
    return {type: CustomerActionType.CustomerDelete, payload:id}
}


//reducer
export function customerReducer(currentState: CustomerState = new CustomerState, action:CustomerAction):CustomerState{
    const newState = {...currentState};

    switch(action.type){
        case CustomerActionType.CustomerDownloaded:
            newState.customers = action.payload
            break;
        case CustomerActionType.CustomerAdded:
            newState.customers.push(action.payload)
            break;
        case CustomerActionType.CustomerUpdated:
            newState.customers.push(action.payload)
            break;
        case CustomerActionType.CustomerDelete:
            localStorage.removeItem("customers")
            break;
    }
    return newState;
}