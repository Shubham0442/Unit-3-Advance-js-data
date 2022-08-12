
// inheritence in case of object.create
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

console.log("************inherated properties and other properties in same object**************");
var safari_XM_base_varient1 = new proto_TATA_Safari("2.0 L Diesel","Independent McPherson Strut","All disc","R16 AT","Power Assisted hydraulic")

safari_XM_base_varient1.steering_mounted_countrols = "No"
safari_XM_base_varient1.Infotenment_system = "2 din in dash music system"
safari_XM_base_varient1.seats_upholstery = "Fabric"
safari_XM_base_varient1.wheels = "steel Rims"
safari_XM_base_varient1.transmission = "5 speed manual"
safari_XM_base_varient1.price = "14.8 Lakh Ex-showroom Delhi"




//mid varient
var safari_XT_mid_varient1 = new proto_TATA_Safari("2.0 L Diesel","Independent McPherson Strut","All disc","R16 AT","Power Assisted hydraulic")

safari_XT_mid_varient1.steering_mounted_countrols = "yes"
safari_XT_mid_varient1.Infotenment_system = "5 inch touch screen music system"
safari_XT_mid_varient1.seats_upholstery = "semi lether"
safari_XT_mid_varient1.wheels = "Alloy wheels"
safari_XT_mid_varient1.transmission = "6 speed Torque Converter (AT)"
safari_XT_mid_varient1.price = "17.4 Lakh Ex-showroom Delhi"

//top model
var safari_XT_Plus_Top_varient1 = new proto_TATA_Safari("2.0 L Diesel","Independent McPherson Strut","All disc","R16 AT","Power Assisted hydraulic")

safari_XT_Plus_Top_varient1.steering_mounted_countrols = "yes with paddle shifters"
safari_XT_Plus_Top_varient1.Infotenment_system = "8 inch touch screen JBL sound system"
safari_XT_Plus_Top_varient1.seats_upholstery = "All lether"
safari_XT_Plus_Top_varient1.wheels = "dimond cut Alloy wheels"
safari_XT_Plus_Top_varient1.transmission = "7 speed DSG (AT)"
safari_XT_Plus_Top_varient1.price = "20 Lakh Ex-showroom Delhi"

console.log(safari_XM_base_varient1);
console.log(safari_XT_mid_varient1);
console.log(safari_XT_Plus_Top_varient1);




//if I want to show inherated properties separate in prototype in case of constructor function
console.log("************inherated properties separate in prototype**************");
function proto_TATA_Safari1 (e,su,b,w,t,s)
{
      this.steering_mounted_countrols = e
      this.Infotenment_system = su
      this.seats_upholstery = b
      this.wheels = w
      this.transmission = t
      this.price = s
}

proto_TATA_Safari1.prototype.engine = "2.0 L Diesel"
proto_TATA_Safari1.prototype.suspension = "Independent McPherson Strut"
proto_TATA_Safari1.prototype.brakes = "All disc"
proto_TATA_Safari1.prototype.wheels_size = "R16 AT"
proto_TATA_Safari1.prototype.steering = "Power Assisted hydraulic"

// for base model
var safari_XM_base_varient2 = new proto_TATA_Safari1("No","2 din in dash music system","Fabric","steel Rims","5 speed manual","14.8 Lakh Ex-showroom Delhi")
var safari_XT_mid_varient2 = new proto_TATA_Safari1("yes","5 inch touch screen music system","semi lether","Alloy wheels","6 speed Torque Converter (AT)","17.4 Lakh Ex-showroom Delhi")
var safari_XT_Plus_Top_varient12 = new proto_TATA_Safari1("yes with paddle shifters","8 inch touch screen JBL sound system","All lether","dimond cut Alloy wheels","7 speed DSG (AT)","20 Lakh Ex-showroom Delhi")

console.log(safari_XM_base_varient2)
console.log(safari_XT_mid_varient2)
console.log(safari_XT_Plus_Top_varient12)