var i, j;
var temp;
var objPerson;
var objTemp;

var children_listSorted = [];
var children_list = [
     {'pId':'2','name':'Mark','priority':'2'},
     {'pId':'4','name':'Van','priority':'1'},
     {'pId':'3','name':'Joshua','priority':'3'},
     {'pId':'4','name':'Mae','priority':'2'},
     {'pId':'1','name':'Joseph','priority':'2'},
     {'pId':'3','name':'Julian','priority':'1'},
     {'pId':'1','name':'Jane','priority':'1'},
     {'pId':'3','name':'Shawn','priority':'2'},
     {'pId':'5','name':'Rodelyn','priority':'1'},
     {'pId':'2','name':'Lovely','priority':'1'}
];

for(i=1;i<children_list.length;i++)
{
	j=i-1;
	num=children_list[i];
	while(j>=0 && children_list[j].pId>=num.pId)
	{
		//document.write("         "+children_list[j].name+" vs "+num.name+"     -"+j+"-   ");
		children_list[j+1]=children_list[j];
		j=j-1;
	}
	children_list[j+1]=num;
	for(x=0;x<children_list.length;x++)
	{
		document.write(children_list[x].name + " " + children_list[x].pId + " " + children_list[x].priority + "<br>");
	}
	document.write("<br>");
}


for(x=0;x<children_list.length;x++)
{
	document.write(children_list[x].name + " " + children_list[x].pId + " " + children_list[x].priority + "<br>");
}