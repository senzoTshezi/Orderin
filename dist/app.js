var fs = require('fs');
fs.readFile("./data.json", "utf-8", function (err, jsonString) {
    if (err) {
        console.log(err);
    }
    else {
        try {
            var data = JSON.parse(jsonString);
            for (var i = 0; i < data.length; i++) {
                for (var x = 0; x < data[i].deliveryAreas.length; x++) {
                    if (data[i].vehichleType == 'scooter' && data[i].deliveryAreas[x].name == "City Center") {
                        console.log(data[i]);
                    }
                }
            }
        }
        catch (err) {
            console.log("Error parsing JSON", err);
        }
    }
});
var newObject = {
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
var jsonString = JSON.stringify(newObject);
fs.writeFile("./newDriver.json", JSON.stringify(newObject, null, 2), function (err) {
    if (err) {
        console.log(err);
    }
    else {
        console.log('Diver successfully added');
    }
});
