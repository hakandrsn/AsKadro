export default class UserService {
    constructor(id,firstName,lastName,adress,phone,tc,work=[],iban){
        this.id=id
        this.firstName=firstName
        this.lastName=lastName
        this.adress=adress
        this.phone=phone
        this.tc=tc
        this.work=work,
        this.iban=iban
    }
    
}