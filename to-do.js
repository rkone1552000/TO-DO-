var enterButton = document.getElementById("enter");
var input = document.getElementById("user");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");
function inputLength()
{ 
	return input.value.length;
}
function listLength()
{
	return item.length;
}
function create()
{
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	
	function crossOut()
	{
		li.classList.toggle("done");
	}
	li.addEventListener("click",crossOut);
	
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);
	
	function deleteListItem()
	{
		li.classList.toggle("delete")
	}
}
function addListAfterClick(){
	if (inputLength() > 0) 
	{ 
		create();
	}
}
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { 
	create();
	} 
}

enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

