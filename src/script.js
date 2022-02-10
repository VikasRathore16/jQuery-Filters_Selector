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

function brandValue(){

		var brand=$('#brandNames option:selected').text(); 
	
		return brand

}
function osValue(){
	
		var Os=$('#brandOs option:selected').text(); 

		return Os

}
function dropdown(){
	

	$(document).on("change","#product_list",function(){
		var brandvalue = brandValue()
		var Osvalue = osValue()
		console.log(brandvalue,Osvalue)
		
		var data ="<table id=\"mytable\">\
		<tr>\
			<th>ID</th>\
			<th>Name</th>\
			<th>Brand</th>\
			<th>Qperating System</th>\
			<th>Remove</th>\
		</tr>";
		for(var i=0;i<products.length;i++){
			
			if(brandvalue=="Brand" && Osvalue=="Os"){
				console.log(brandvalue,Osvalue)
				data += "<tr id= '"+ products[i].id+"'>\
				<td value='" + products[i].id + "' >" + products[i].id + "</td>\
				<td value='"+ products[i].name + "'\">" + products[i].name + " </td>\
				<td value='"+ products[i].brand + "'\">" + products[i].brand + "</td>\
				<td value='"+ products[i].os + "'\">" + products[i].os + "</td>\
				<td data-value='"+products[i].id +"'id='close'>X</td>\
			  </tr>";
			}
			if(brandvalue==products[i].brand && Osvalue=="Os"){
				console.log(products[i],Osvalue)
				data+="<tr id= '"+ products[i].id+"'>\
				<td value='" + products[i].id + "' >" + products[i].id + "</td>\
				<td value='"+ products[i].name + "'\">" + products[i].name + " </td>\
				<td value='"+ products[i].brand + "'\">" + products[i].brand + "</td>\
				<td value='"+ products[i].os + "'\">" + products[i].os + "</td>\
				<td data-value='"+products[i].id +"'id='close'>X</td>\
			  </tr>"
				
			}
			if(Osvalue==products[i].os && brandvalue=="Brand"){
				console.log(products[i],brandvalue)
				console.log("change")
				data+="<tr id= '"+ products[i].id+"'>\
				<td value='" + products[i].id + "' >" + products[i].id + "</td>\
				<td value='"+ products[i].name + "'\">" + products[i].name + " </td>\
				<td value='"+ products[i].brand + "'\">" + products[i].brand + "</td>\
				<td value='"+ products[i].os + "'\">" + products[i].os + "</td>\
				<td data-value='"+products[i].id +"'id='close'>X</td>\
			  </tr>"
			}
			if(Osvalue==products[i].os && brandvalue==products[i].brand){
				console.log(products[i],brandvalue,Osvalue)
				console.log("change")
				data+="<tr id= '"+ products[i].id+"'>\
				<td value='" + products[i].id + "' >" + products[i].id + "</td>\
				<td value='"+ products[i].name + "'\">" + products[i].name + " </td>\
				<td value='"+ products[i].brand + "'\">" + products[i].brand + "</td>\
				<td value='"+ products[i].os + "'\">" + products[i].os + "</td>\
				<td data-value='"+products[i].id +"'id='close'>X</td>\
			  </tr>"
			}
			
			
		}
		data+="</table>"
		$("#mytable").html(data);
	
		
	})
}



$(document).ready(function(){
	display();
	dropdown();
	$("#myInput").on("keyup", function() {
		
		var value = $(this).val().toLowerCase();
		$("#tbody tr").filter(function() {
			console.log("filter")
		  $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
		});
	  });
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
	var inp = "<input id=\"myInput\" type=\"text\" placeholder=\"Search..\"></input><br>"
	var dropdownBrands=inp + "<div>Brands : <select id=\"brandNames\" name=\" brands\"><option value='Brand'>Brand</option> "
	for(var i=0;i<uniqueBrands.length;i++){
		
		dropdownBrands+="<Option value="+uniqueBrands[i] +" >"+ uniqueBrands[i] +"</option>"
	}
	dropdownBrands+="</select>"
	var dropdownOs= dropdownBrands + "<div>Os : <select id=\"brandOs\" name=\" brands\"><option value='Os'>Os</option>"
	for(var i=0;i<uniqueOs.length;i++){
		
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
    </tr><tbody id=\"tbody\">";
    for (var i = 0; i < products.length; i++) {
        data += "<tr id= '"+ products[i].id+"'>\
		<td id=\"id\" value='" + products[i].id + "' >" + products[i].id + "</td>\
        <td id=\"name\" value='"+ products[i].name + "'\">" + products[i].name + " </td>\
        <td value='"+ products[i].brand + "'\">" + products[i].brand + "</td>\
        <td value='"+ products[i].os + "'\">" + products[i].os + "</td>\
        <td data-value='"+products[i].id +"'id='close'>X</td>\
      </tr>";
    }


    data += "</tbody></table>";

  
    $("#product_list").html(data);
    
}

