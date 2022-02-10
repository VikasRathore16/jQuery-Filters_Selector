var products = [
	{
		id: "100",
		name: "iPhone 4S",
		brand: "Apple",
		os: "iOS",
	},
	{
		id: "101",
		name: "Moto X",
		brand: "Motorola",
		os: "Android",
	},
	{
		id: "102",
		name: "iPhone 6",
		brand: "Apple",
		os: "iOS",
	},
	{
		id: "103",
		name: "Samsung Galaxy S",
		brand: "Samsung",
		os: "Android",
	},
	{
		id: "104",
		name: "Google Nexus",
		brand: "ASUS",
		os: "Android",
	},
	{
		id: "105",
		name: "Surface",
		brand: "Microsoft",
		os: "Windows",
	},
];
var uniqueBrands = [];
var uniqueOs = [];

function brandValue() {
	var brand = $("#brandNames option:selected").text();
	return brand;
}
function osValue() {
	var Os = $("#brandOs option:selected").text();
	return Os;
}


$(document).ready(function () {
	uniqueValues()
	display(products)
	$(document).on("change", "#wrapper", function () {
	dropdown();
	})
	search()
	$("#product_list").on("click", "#close", function () {
		var id = $(this).data("value");
		console.log(id);
		$(this).parent().hide();
	});
});
function search(){
	var newproducts=[]
	$("#dropdown").on("click","#search", function () {
		var value = $("#myInput").val();
		
		/* console.log(value)
		console.log(products.find(x => x.id === value),products.find(x => x.name === value)); */
		for(var i=0;i<products.length;i++){
		
			if(value==products[i].id){
				newproducts.push(products[i])
			
				
			}
			if(value==products[i].name){
				newproducts.push(products[i])
				
			}
			if(products[i].name.includes(value)){
				newproducts.push(products[i])
				console.log(products[i].name,"pattern")
			}

			display(newproducts)
		}
		newproducts=[]
	});
	
}
function dropdown() {
		var newproducts = [];
		var brandvalue = brandValue();
		var Osvalue = osValue();
		console.log(brandvalue, Osvalue)
		
		for (var i = 0; i < products.length; i++) {
			if (brandvalue == "Brand" && Osvalue == "Os") {
				console.log(brandvalue, Osvalue);
				newproducts=products
			}
			if (Osvalue == products[i].os && brandvalue == "Brand") {
				console.log(products[i], Osvalue);
				newproducts.push(products[i])
			}
			if (brandvalue == products[i].brand && Osvalue == "Os") {
				console.log(products[i]);
				newproducts.push(products[i])
			}
			if (brandvalue == products[i].brand && Osvalue == products[i].os) {
				console.log(products[i]);
				newproducts.push(products[i])
			}
		
		}
		console.log(newproducts,"newproducts")
		display(newproducts)
}
function uniqueValues(){
	for (var i = 0; i < products.length; i++) {
		if (!uniqueBrands.includes(products[i].brand)) {
			uniqueBrands.push(products[i].brand);
		}
		if (!uniqueOs.includes(products[i].os)) {
			uniqueOs.push(products[i].os);
		}
	}
	console.log(uniqueBrands, uniqueOs, "list");
	var inp =
		'<div id="drop"><input id="myInput" type="text" placeholder="Search.."></input>';
	var dropdownBrands =
		inp +
		'<select id="brandNames" name=" brands"><option value=\'Brand\'>Brand</option> ';
	for (var i = 0; i < uniqueBrands.length; i++) {
		dropdownBrands +=
			"<Option value=" + uniqueBrands[i] + " >" + uniqueBrands[i] + "</option>";
	}
	dropdownBrands += "</select>";
	var dropdownOs =
		dropdownBrands +
		'<select id="brandOs" name=" brands"><option value=\'Os\'>Os</option>';
	for (var i = 0; i < uniqueOs.length; i++) {
		dropdownOs +=
			"<Option data-value=" + uniqueOs[i] + " >" + uniqueOs[i] + "</option>";
	}
	dropdownOs += "</select><button id=\"search\">Search</button></div>";
	$("#dropdown").html(dropdownOs)
	
}
function display(newproducts) {
	
	var data =
		'<div><table id="mytable">\
    <tr>\
        <th>ID</th>\
        <th>Name</th>\
        <th>Brand</th>\
        <th>Qperating System</th>\
        <th>Remove</th>\
    </tr><tbody id="tbody">';
	
	for (var i = 0; i < newproducts.length; i++) {
		data +=
			"<tr id= '" +
			newproducts[i].id +
			"'>\
		<td id=\"id\" value='" +
			newproducts[i].id +
			"' >" +
			newproducts[i].id +
			'</td>\
        <td id="name" value=\'' +
			newproducts[i].name +
			"'\">" +
			newproducts[i].name +
			" </td>\
        <td value='" +
			newproducts[i].brand +
			"'\">" +
			newproducts[i].brand +
			"</td>\
        <td value='" +
			newproducts[i].os +
			"'\">" +
			newproducts[i].os +
			"</td>\
        <td data-value='" +
			newproducts[i].id +
			"'id='close'>X</td>\
      </tr>";
	}

	data += "</tbody></table></div>";

	$("#product_list").html(data);
}

/* function dropdown() {
	$(document).on("change", "#product_list", function () {
		var brandvalue = brandValue();
		var Osvalue = osValue();
		console.log(brandvalue, Osvalue);

		var data =
			'<table id="mytable">\
		<tr>\
			<th>ID</th>\
			<th>Name</th>\
			<th>Brand</th>\
			<th>Qperating System</th>\
			<th>Remove</th>\
		</tr>';
		for (var i = 0; i < products.length; i++) {
			if (brandvalue == "Brand" && Osvalue == "Os") {
				console.log(brandvalue, Osvalue);
				data +=
					"<tr id= '" +
					products[i].id +
					"'>\
				<td value='" +
					products[i].id +
					"' >" +
					products[i].id +
					"</td>\
				<td value='" +
					products[i].name +
					"'\">" +
					products[i].name +
					" </td>\
				<td value='" +
					products[i].brand +
					"'\">" +
					products[i].brand +
					"</td>\
				<td value='" +
					products[i].os +
					"'\">" +
					products[i].os +
					"</td>\
				<td data-value='" +
					products[i].id +
					"'id='close'>X</td>\
			  </tr>";
			}
			if (brandvalue == products[i].brand && Osvalue == "All") {
				console.log(products[i], Osvalue);
				data +=
					"<tr id= '" +
					products[i].id +
					"'>\
				<td value='" +
					products[i].id +
					"' >" +
					products[i].id +
					"</td>\
				<td value='" +
					products[i].name +
					"'\">" +
					products[i].name +
					" </td>\
				<td value='" +
					products[i].brand +
					"'\">" +
					products[i].brand +
					"</td>\
				<td value='" +
					products[i].os +
					"'\">" +
					products[i].os +
					"</td>\
				<td data-value='" +
					products[i].id +
					"'id='close'>X</td>\
			  </tr>";
			}
			if (Osvalue == products[i].os && brandvalue == "All") {
				console.log(products[i], brandvalue);
				console.log("change");
				data +=
					"<tr id= '" +
					products[i].id +
					"'>\
				<td value='" +
					products[i].id +
					"' >" +
					products[i].id +
					"</td>\
				<td value='" +
					products[i].name +
					"'\">" +
					products[i].name +
					" </td>\
				<td value='" +
					products[i].brand +
					"'\">" +
					products[i].brand +
					"</td>\
				<td value='" +
					products[i].os +
					"'\">" +
					products[i].os +
					"</td>\
				<td data-value='" +
					products[i].id +
					"'id='close'>X</td>\
			  </tr>";
			}
			if (Osvalue == products[i].os && brandvalue == products[i].brand) {
				console.log(products[i], brandvalue, Osvalue);
				console.log("change");
				data +=
					"<tr id= '" +
					products[i].id +
					"'>\
				<td value='" +
					products[i].id +
					"' >" +
					products[i].id +
					"</td>\
				<td value='" +
					products[i].name +
					"'\">" +
					products[i].name +
					" </td>\
				<td value='" +
					products[i].brand +
					"'\">" +
					products[i].brand +
					"</td>\
				<td value='" +
					products[i].os +
					"'\">" +
					products[i].os +
					"</td>\
				<td data-value='" +
					products[i].id +
					"'id='close'>X</td>\
			  </tr>";
			}
		}
		data += "</table>";
		$("#mytable").html(data);
	});
}  */