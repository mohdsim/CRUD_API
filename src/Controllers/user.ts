const homeDetails= (req:any,resp:any)=>{
resp.json({
    content: [
        {fName:'Mohd',lName:'Ahtesham',contact:'9878987654',email:'abc@gmail.com'},
        {fName:'Ujjwal',lName:'Miraje',contact:'9878987656',email:'atestgmail.com'},
        {fName:'Sandeep',lName:'Kanu',contact:'9878987876',email:'aestgmail.com'}
    ]
});


}

module.exports=homeDetails