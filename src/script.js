var products = [{
	"id": "100",
	"name": "iPhone 4S",
	"brand": "Apple",
	"os": "iOS"
},
{
	"id": "101",
	"name": "Moto X",
	"brand": "Motorola",
	"os": "Android"
},
{
	"id": "102",
	"name": "iPhone 6",
	"brand": "Apple",
	"os": "iOS"
},
{
	"id": "103",
	"name": "Samsung Galaxy S",
	"brand": "Samsung",
	"os": "Android"
},
{
	"id": "104",
	"name": "Google Nexus",
	"brand": "ASUS",
	"os": "Android"
},
{
	"id": "105",
	"name": "Surface",
	"brand": "Microsoft",
	"os": "Windows"
}];
var uniqueBrands =[]
var uniqueOs =[]
$(document).ready(function(){
	
	display();
	$("#product_list").on("click","#close",function(){
		var id = $(this).data('value')
		console.log(id)
		$(this).parent().hide()
	})
	
})
function display() {
	for(var i=0; i<products.length;i++){
		if(!uniqueBrands.includes(products[i].brand)){
			uniqueBrands.push(products[i].brand)
		}
		if(!uniqueOs.includes(products[i].os)){
			uniqueOs.push(products[i].os)
		}
	}
	console.log(uniqueBrands,uniqueOs,"list")
	var dropdownBrands="<div>Brands <select name=\" brands\">"
	for(var i=0;i<uniqueBrands.length;i++){
		console.log(uniqueBrands[i])
		dropdownBrands+="<Option data-value="+uniqueBrands[i] +" >"+ uniqueBrands[i] +"</option>"
	}
	dropdownBrands+="</select>"
	var dropdownOs= dropdownBrands + "<div>Os <select name=\" brands\">"
	for(var i=0;i<uniqueOs.length;i++){
		console.log(uniqueOs[i])
		dropdownOs+="<Option data-value="+uniqueOs[i] +" >"+ uniqueOs[i] +"</option>"
	}
	dropdownOs+="</select></div>"
    var data = dropdownOs + "<table id=\"mytable\">\
    <tr>\
        <th>ID</th>\
        <th>Name</th>\
        <th>Brand</th>\
        <th>Qperating System</th>\
        <th>Remove</th>\
    </tr>";
    for (var i = 0; i < products.length; i++) {
        data += "<tr id= '"+ products[i].id+"'>\
		<td value='" + products[i].id + "' >" + products[i].id + "</td>\
        <td value='"+ products[i].name + "'\">" + products[i].name + " </td>\
        <td value='"+ products[i].brand + "'\">" + products[i].brand + "</td>\
        <td value='"+ products[i].os + "'\">" + products[i].os + "</td>\
        <td data-value='"+products[i].id +"'id='close'>X</td>\
      </tr>";
    }


    data += "</table>";

    console.log(data);
    $("#product_list").html(data);
    
}

