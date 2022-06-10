menu_list_array = [ "Veg Margherita Pizza","Cheese Pizza","Non-veg Pizza","Tomato Basil Pizza"]; 

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
    var item = document.getElementById("add_item").value.trim();
    if(item === "") {
        alert("Please enter a pizza name!");
        return;
    }
    if(!menu_list_array.includes(item))
        menu_list_array.push(item);
    else
        alert("This pizza is already on the menu!");
    document.getElementById("add_item").value="";
    getmenu();
}

