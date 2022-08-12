
//constructior function inheritence
var proto_TATA_Safari_Gravitas = 
{
      engine : "2.0 L Diesel",
      suspension: "Independent McPherson Strut",
      brakes: "All disc",
      wheels_size: "R16 AT",
      steering: "Power Assisted hydraulic"
};



// varients of TATA_Safari using Object.create

// base model
var safari_XM_base_varient = Object.create(proto_TATA_Safari_Gravitas);

safari_XM_base_varient.steering_mounted_countrols = "No"
safari_XM_base_varient.Infotenment_system = "2 din in dash music system"
safari_XM_base_varient.seats_upholstery = "Fabric"
safari_XM_base_varient.wheels = "steel Rims"
safari_XM_base_varient.transmission = "5 speed manual"
safari_XM_base_varient.price = "14.8 Lakh Ex-showroom Delhi"


//mid varient
var safari_XT_mid_varient = Object.create(proto_TATA_Safari_Gravitas);

safari_XT_mid_varient.steering_mounted_countrols = "yes"
safari_XT_mid_varient.Infotenment_system = " 5 inch touch screen music system"
safari_XT_mid_varient.seats_upholstery = "semi lether"
safari_XT_mid_varient.wheels = "Alloy wheels"
safari_XT_mid_varient.transmission = "6 speed Torque Converter (AT)"
safari_XT_mid_varient.price = "17.4 Lakh Ex-showroom Delhi"


// top model
var safari_XT_Plus_Top_varient = Object.create(proto_TATA_Safari_Gravitas);

safari_XT_Plus_Top_varient.steering_mounted_countrols = "yes with paddle shifters"
safari_XT_Plus_Top_varient.Infotenment_system = " 8 inch touch screen JBL sound system"
safari_XT_Plus_Top_varient.seats_upholstery = "All lether"
safari_XT_Plus_Top_varient.wheels = " dimond cut Alloy wheels"
safari_XT_Plus_Top_varient.transmission = "7 speed DSG (AT)"
safari_XT_Plus_Top_varient.price = "20 Lakh Ex-showroom Delhi"

console.log(safari_XM_base_varient);
console.log(safari_XT_mid_varient);
console.log(safari_XT_Plus_Top_varient);






//constructior function inheritence

function proto_TATA_Safari (e,su,b,w,s)
{
      this.engine = e
      this.suspension = su
      this.brakes = b
      this.wheels_size = w
      this.steering = s
}

proto_TATA_Safari.prototype.safari_base = function (e)
{
     console.log(`x`)
     this.engine = e
     
}


var safari_XM_base_varient1 = new proto_TATA_Safari("2.0 L Diesel","Independent McPherson Strut","All disc","R16 AT","Power Assisted hydraulic")

safari_XM_base_varient1.steering_mounted_countrols = "No"
safari_XM_base_varient1.Infotenment_system = "2 din in dash music system"
safari_XM_base_varient1.seats_upholstery = "Fabric"
safari_XM_base_varient1.wheels = "steel Rims"
safari_XM_base_varient1.transmission = "5 speed manual"
safari_XM_base_varient1.price = "14.8 Lakh Ex-showroom Delhi"


safari_XM_base_varient1.safari_base("2.0 L Diesel")

//mid varient
var safari_XT_mid_varient1 = new proto_TATA_Safari("2.0 L Diesel","Independent McPherson Strut","All disc","R16 AT","Power Assisted hydraulic")

safari_XT_mid_varient1.steering_mounted_countrols = "yes"
safari_XT_mid_varient1.Infotenment_system = " 5 inch touch screen music system"
safari_XT_mid_varient1.seats_upholstery = "semi lether"
safari_XT_mid_varient1.wheels = "Alloy wheels"
safari_XT_mid_varient1.transmission = "6 speed Torque Converter (AT)"
safari_XT_mid_varient1.price = "17.4 Lakh Ex-showroom Delhi"

//top model
var safari_XT_Plus_Top_varient1 = new proto_TATA_Safari("2.0 L Diesel","Independent McPherson Strut","All disc","R16 AT","Power Assisted hydraulic")

safari_XT_Plus_Top_varient1.steering_mounted_countrols = "yes with paddle shifters"
safari_XT_Plus_Top_varient1.Infotenment_system = " 8 inch touch screen JBL sound system"
safari_XT_Plus_Top_varient1.seats_upholstery = "All lether"
safari_XT_Plus_Top_varient1.wheels = " dimond cut Alloy wheels"
safari_XT_Plus_Top_varient1.transmission = "7 speed DSG (AT)"
safari_XT_Plus_Top_varient1.price = "20 Lakh Ex-showroom Delhi"

console.log(safari_XM_base_varient1);
console.log(safari_XT_mid_varient1);
console.log(safari_XT_Plus_Top_varient1);
