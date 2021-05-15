const fs = require('fs');

fs.readFile("./data.json","utf-8",(err,jsonString)=>{
    if(err){
        console.log(err)
    }else {
        try{
            const data = JSON.parse(jsonString);
            for (var i =0 ; i < data.length; i ++){
                for(var x =0; x < data[i].deliveryAreas.length; x ++){
                    if(data[i].vehichleType == 'scooter' && data[i].deliveryAreas[x].name =="City Center"){
                        console.log(data[i])
                    }
                }
                
            }
        }catch(err){
            console.log("Error parsing JSON", err)
        }
    }
})

// ADD NEW DRIVER 
const newObject ={
    id: "12345",
    isActive: true,
    vehichleType: "scooter",
    VehiclColor: "red",
    name: {
      first: "Senzo",
      last: "Tshezi"
    },
    email: "senzo@undefined.co.uk",
    phone: "+27 (982) 543-2900",
    deliveryAreas: [
      {
        name: "Tableview"
      }
    ]
};

const jsonString = JSON.stringify(newObject);

// I Created a new file newDriver.json just to see new object that is created .
fs.writeFile("./newDriver.json", JSON.stringify(newObject, null, 2), err => {
    if(err){
        console.log(err);
    }else{
        console.log('Diver successfully added');
    }
});
