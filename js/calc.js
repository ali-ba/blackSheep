
var vehiclePrices = Array();
  vehiclePrices.bike = 109;
  vehiclePrices.smallCar = 129;
  vehiclePrices.largeCar = 144;
  vehiclePrices.van = 200;


var days = Array();
  days["1"] = 1;
  days["2"] = 2;
  days["3"] = 3;
  days["4"] = 4;
  days["5"] = 5;
  days["6"] = 6;
  days["7"] = 7;
  days["8"] = 8;
  days["9"] = 9;
  days["10"] = 10;
  days["11"] = 11;
  days["12"] = 12;
  days["13"] = 13;
  days["14"] = 14;
  days["15"] = 15;

function sizeCost() {
  var cost = 0;
  var form = document.forms.TransportForm;
  var vehicleType = form.elements.vehicleType;
  
  var day=0;
  var theForm = document.forms.TransportForm;
  var numDays = theForm.elements.days;
  day = days[numDays.value];
    
    for(var i = 0; i < vehicleType.length; i++)
    {
        
        if(vehicleType[i].checked)
        {
            cost = vehiclePrices[vehicleType[i].value] * day;

        }

        if (vehicleType[0].checked) {
          var dis1 = document.createAttribute("DISABLED");
          document.getElementById("six").setAttributeNode(dis1);

          var dis2 = document.createAttribute("DISABLED");
          document.getElementById("seven").setAttributeNode(dis2);

          var dis3 = document.createAttribute("DISABLED");
          document.getElementById("eight").setAttributeNode(dis3);

          var dis4 = document.createAttribute("DISABLED");
          document.getElementById("nine").setAttributeNode(dis4);

          var dis5 = document.createAttribute("DISABLED");
          document.getElementById("ten").setAttributeNode(dis5);          

          var dis6 = document.createAttribute("DISABLED");
          document.getElementById("eleven").setAttributeNode(dis6);

          var dis7 = document.createAttribute("DISABLED");
          document.getElementById("twelve").setAttributeNode(dis7);

          var dis8 = document.createAttribute("DISABLED");
          document.getElementById("thirteen").setAttributeNode(dis8);

          var dis9 = document.createAttribute("DISABLED");
          document.getElementById("fourteen").setAttributeNode(dis9);        

          var dis10 = document.createAttribute("DISABLED");
          document.getElementById("fifteen").setAttributeNode(dis10);

        }

        if (vehicleType[1].checked) {
          var dis11 = document.createAttribute("DISABLED");
          document.getElementById("eleven").setAttributeNode(dis11);

          var dis12 = document.createAttribute("DISABLED");
          document.getElementById("twelve").setAttributeNode(dis12);

          var dis13 = document.createAttribute("DISABLED");
          document.getElementById("thirteen").setAttributeNode(dis13);

          var dis14 = document.createAttribute("DISABLED");
          document.getElementById("fourteen").setAttributeNode(dis14);        

          var dis15 = document.createAttribute("DISABLED");
          document.getElementById("fifteen").setAttributeNode(dis15);
        }


        if (vehicleType[2].checked) {
          var dis16 = document.createAttribute("DISABLED");
          document.getElementById("one").setAttributeNode(dis16);

          var dis17 = document.createAttribute("DISABLED");
          document.getElementById("two").setAttributeNode(dis17);

          var dis18 = document.createAttribute("DISABLED");
          document.getElementById("eleven").setAttributeNode(dis18);

          var dis19 = document.createAttribute("DISABLED");
          document.getElementById("twelve").setAttributeNode(dis19);

          var dis20 = document.createAttribute("DISABLED");
          document.getElementById("thirteen").setAttributeNode(dis20);

          var dis21 = document.createAttribute("DISABLED");
          document.getElementById("fourteen").setAttributeNode(dis21);        

          var dis22 = document.createAttribute("DISABLED");
          document.getElementById("fifteen").setAttributeNode(dis22);          
        }

        if (vehicleType[3].checked) {
          var dis23 = document.createAttribute("DISABLED");
          document.getElementById("one").setAttributeNode(dis23);

          var dis24 = document.createAttribute("DISABLED");
          document.getElementById("two").setAttributeNode(dis24);

        }
    }
    return cost;
}


function insuranceCost()
{
  var insuranceCost = 0;
  var tranportForm = document.forms.TransportForm;
  var insurance = tranportForm.elements.Insurance;

  if(insurance.checked===true)
    {
      insuranceCost = 20;
    }
  return insuranceCost;
}


var destinations = Array();
  destinations.Piha = 39.9; 
  destinations.Hamilton = 124.7;
  destinations.Tauranga = 211.4;
  destinations.Rotorua = 228.1;

function destinationCost() {
  var destinationsCost = 0; 
  var myForm = document.forms.TransportForm;
  var vehicleType = myForm.elements.vehicleType;
  var dest = myForm.elements.destinations;

  for(var i = 0; i < vehicleType.length; i++)
    {
        
        if(dest[i].checked && vehicleType[0].checked)
        {
            destinationsCost = 0.0371 * destinations[dest[i].value] ;

        }

        if(dest[i].checked && vehicleType[1].checked)
        {
            destinationsCost = 0.0851 * destinations[dest[i].value] ;

        }

        if(dest[i].checked && vehicleType[2].checked)
        {
            destinationsCost = 0.0971 * destinations[dest[i].value] ;

        }

        if(dest[i].checked && vehicleType[3].checked)
        {
            destinationsCost = 1.71 * destinations[dest[i].value] ;

        }                

  
}
return destinationsCost;
}


function calculateTotal() {
    var VehiclePrice = sizeCost() + insuranceCost() + destinationCost();
    var roundedPrice = VehiclePrice.toFixed(2);
    var totalP = document.getElementById('totalPrice');
    totalP.innerHTML = "Total Price For a Vehicle us $"+ roundedPrice;
}


function myFunction() {
  location.reload();
}
