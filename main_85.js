menu_list_array = [ "Veg Margherita Pizza","Cheese Pizza","Non-veg Pizza","Tomato Basil Pizza"]; 

function getmenu()
{
    var htmldata="<p style='color:#f5c71a; font-size:18px;'>Total items: " + menu_list_array.length + "</p>";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata + (i+1) + ". " + menu_list_array[i] + ' <button onclick="remove_pizza(' + i + ')" style="background:#e2062c;color:white;border:none;padding:2px 8px;cursor:pointer;font-size:12px;">x</button><br>';
    }
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

function remove_pizza(index) {
    menu_list_array.splice(index, 1);
    getmenu();
}

function searchMenu() {
    var query = document.getElementById("search_item").value.toLowerCase();
    var htmldata = "";
    var count = 0;
    for(var i = 0; i < menu_list_array.length; i++) {
        if(menu_list_array[i].toLowerCase().includes(query)) {
            count++;
            htmldata += count + ". " + menu_list_array[i] + ' <button onclick="remove_pizza(' + i + ')" style="background:#e2062c;color:white;border:none;padding:2px 8px;cursor:pointer;font-size:12px;">x</button><br>';
        }
    }
    htmldata = "<p style='color:#f5c71a; font-size:18px;'>Found: " + count + " items</p>" + htmldata;
    document.getElementById("display_menu").innerHTML = htmldata;
}

