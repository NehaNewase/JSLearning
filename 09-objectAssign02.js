let sbiBank = {
    BankName: "SBI Bank",
    Location: "Pune",
    AccNo: 2421222,
    IFSCCode: "sbi3219",
    InterestRate: 7.9,
    showDetails: function(){
        console.log("Data Members", this.BankName, this.Location, this.AccNo, this.IFSCCode, this.InterestRate);
    }
} 

let axisBank = {
    BankName: "AIS Bank",
    Location: "Sangli",
    AccNo: 111122,
    IFSCCode: "axis3219",
    InterestRate: 9.9,
    showDetails: function(){
        console.log("Data Members", this.BankName, this.Location, this.AccNo, this.IFSCCode, this.InterestRate);
    }
} 

let hdfcBank = {
    BankName: "HDFC Bank",
    Location: "Mumbai",
    AccNo: 98998,
    IFSCCode: "hdfc3219",
    InterestRate: 7.1,
    showDetails: function(){
        console.log("Data Members", this.BankName, this.Location, this.AccNo, this.IFSCCode, this.InterestRate);
    }
} 

let yesBank = {
    BankName: "YES Bank",
    Location: "Nashik",
    AccNo: 989821,
    IFSCCode: "yes3219",
    InterestRate: 12.9,
    showDetails: function(){
        console.log("Data Members", this.BankName, this.Location, this.AccNo, this.IFSCCode, this.InterestRate);
    }
} 

console.log(sbiBank.showDetails());
console.log(axisBank.showDetails());
console.log(yesBank.showDetails());
console.log(hdfcBank.showDetails());
