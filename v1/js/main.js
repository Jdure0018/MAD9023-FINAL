var app = {    
    init: function () {
      var url = "data.php?"
        fetch(url)
            .then(function (response){
                return response.json();
            })
            .then(function (data) {
                app.createTable(data);
                app.fillTable(data);
                console.log(data);
            })
            .catch(function (err) {
                console.log(err);
            })
//            ev.preventDefault();
	        return false;
    },
   createTable: function (){
       let container = document.getElementById('content');
       let table = document.createElement('table');
       table.className = "table table-bordered table-striped table-hover";
       //Table head and Header Cell
       let thead = document.createElement('thead');
       let tbody = document.createElement('tbody');
       tbody.setAttribute("id", "contacts");
       let row = document.createElement('tr');
       let idCell = document.createElement('th');
       idCell.setAttribute('id','idCell');
       idCell.style.width = "50";
       idCell.addEventListener('click',app.sortId);
       idCell.innerHTML = "ID"; 
       let firstCell = document.createElement('th');
       firstCell.innerHTML = "First Name";
       firstCell.setAttribute('id','firstCell');
       firstCell.addEventListener('click',app.sortFirst);
       let lastCell = document.createElement('th');
       lastCell.innerHTML = "Last Name";
       lastCell.setAttribute('id','lastCell');
       lastCell.addEventListener('click',app.sortLast);
       let emailCell = document.createElement('th');
       emailCell.innerHTML = "Email";
       emailCell.setAttribute('id','emailCell');
       emailCell.addEventListener('click',app.sortEmail);
       let actCell = document.createElement('th');
       actCell.setAttribute("id", "action");
       actCell.style.width = "100";
       actCell.innerHTML = "Action";
        //Append Children     
       container.appendChild(table);
       //table header and body
       table.appendChild(thead);
       table.appendChild(tbody);
       //header cells appended
       thead.appendChild(row);
       row.appendChild(idCell);
       row.appendChild(firstCell);
       row.appendChild(lastCell);
       row.appendChild(emailCell);
       row.appendChild(actCell);
       
   },
    fillTable: function (rows){
        let tbody = document.getElementById('contacts');
        let contactList = rows.contacts; 
        console.log(contactList);
            for(var j = 0; j < contactList.length; j++){
                var tr = document.createElement('tr');
                var td = document.createElement('td');
                td.appendChild(document.createTextNode(contactList[j].contact_id));
                tr.appendChild(td);
                
                
                 td = document.createElement('td');
                 td.appendChild(document.createTextNode(contactList[j].contact_first));
                 tr.appendChild(td)
                 
                 
                 td = document.createElement('td');
                 td.appendChild(document.createTextNode(contactList[j].contact_last));
                 tr.appendChild(td)
                 
                 
                 td = document.createElement('td');
                 td.appendChild(document.createTextNode(contactList[j].contact_email));;
                 tr.appendChild(td)
                             
                
               
                //Delete Button
                let delCell = document.createElement('td');
		        let delbtn = document.createElement('button');
		        delbtn.classList.add('button', 'delete');
		        delbtn.dataset.id = contactList[j].contact_id;
		        delbtn.innerHTML = '&times;';
                delbtn.addEventListener('click', app.deleteContact);
		        delCell.appendChild(delbtn);
		        tr.appendChild(delCell);
            
                //Update Button
                let editbtn = document.createElement('button');
                editbtn.classList.add('button', 'edit');
                editbtn.dataset.id = contactList[j].contact_id;
                editbtn.innerHTML = '&isin;';
                editbtn.addEventListener('click', app.editContact);
                delCell.appendChild(editbtn);
		        tr.appendChild(delCell);
                tbody.appendChild(tr); 
            }
        
    },
    
    insertRow: function(data){
        let url = "insert.php?"
        
        fetch(url)
            .then(function (response){
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            if (data.success){
                app.init();
            }
            })
            .catch(function (err) {
                console.log(err);
            });
//            ev.preventDefault();
	        return false;
    },
    
    selectRow: function(data){
        
//        let url = "select.php?order=" + data
        let url = "select.php?"
        
        fetch(url)
            .then(function (response){
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            if (data.success){
                app.init();
            }
            })
            .catch(function (err) {
                console.log(err);
            });
//            ev.preventDefault();
	        return false;
    },
    
    deleteRow: function(id){
        
        let url = "delete.php?id="+id
        
        fetch(url)
            .then(function (response){
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            if (data.success){
                app.init();
            }
            })
            .catch(function (err) {
                console.log(err);
            });
//            ev.preventDefault();
	        return false;
    },
    
    updateRow: function(id){

        let url = "update.php?id="+id
        
        fetch(url)
            .then(function (response){
                return response.json();
            })
            .then(function (data) {
                console.log(data);
            if (data.success){
                app.init();
            }
            })
            .catch(function (err) {
                console.log(err);
            });
//            ev.preventDefault();
	        return false;
    },
    //Event Listeners
    deleteContact: function(ev){
        if(ev.target.classList.contains('delete')){
            app.deleteRow(ev.target.dataset.id);
            window.location.reload();
        }
    },
    
    editContact: function(ev){
        let form = document.getElementById('webForm');
        let inputId = document.getElementById('contact_id');
        let submitBtn = document.getElementById('btnSubmit');
       if(ev.target.classList.contains('edit')){
           submitBtn.innerHTML = "Edit Contact";
           inputId.removeAttribute('hidden');
           inputId.setAttribute('placeholder', 'Input ID For Edit');
           form.setAttribute('action','update.php');
            app.updateRow(ev.target.dataset.id);
        } 
    },

sortId: function(){
 let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("contacts");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      let x = rows[i].getElementsByTagName("TD")[0];
        console.log(x);
      let y = rows[i + 1].getElementsByTagName("TD")[0];
        console.log(y);
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }    
},
sortFirst: function(){
let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("contacts");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      let x = rows[i].getElementsByTagName("TD")[1];
        console.log(x);
      let y = rows[i + 1].getElementsByTagName("TD")[1];
        console.log(y);
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }    
},
sortLast: function(){
let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("contacts");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      let x = rows[i].getElementsByTagName("TD")[2];
        console.log(x);
      let y = rows[i + 1].getElementsByTagName("TD")[2];
        console.log(y);
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }    
},
sortEmail: function(){
let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("contacts");
  switching = true;
  //Set the sorting direction to ascending:
  dir = "asc"; 
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.getElementsByTagName("TR");
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i < (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      let x = rows[i].getElementsByTagName("TD")[3];
        console.log(x);
      let y = rows[i + 1].getElementsByTagName("TD")[3];
        console.log(y);
      /*check if the two rows should switch place,
      based on the direction, asc or desc:*/
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          //if so, mark as a switch and break the loop:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      //Each time a switch is done, increase this count by 1:
      switchcount ++; 
    } else {
      /*If no switching has been done AND the direction is "asc",
      set the direction to "desc" and run the while loop again.*/
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }    
},
}
app.init();
