let employee =
{
    empname: "Sai",
    empid: 4582,
    empsalary: 100000,
    empjob: "engineer",
    bonus: function()
    {
        return((this.empsalary*10)/100);
        
    }
    

};
console.log(employee.bonus());

