
function openPage(pageName,_this,color,tabcontent) {
    // Hide all elements with class="tabcontent" by default */
    let i, tabcontent1;
    is_blocked = document.getElementById(pageName).style.display;
    tabcontent1 = document.getElementsByClassName(tabcontent);

    if(pageName.startsWith("content")){
      if(is_blocked != 'block'){
        for (i = 0; i < tabcontent1.length; i++) {
          tabcontent1[i].style.display = "none";
        }
        document.getElementById(pageName).style.display = "block";
      }
      else{
        document.getElementById(pageName).style.display = "none";
      }
    } 
    else{
      for (i = 0; i < tabcontent1.length; i++) {
        tabcontent1[i].style.display = "none";
      }
      document.getElementById(pageName).style.display = "block";
    }

    
  
    // Show the specific tab content
    
    // Add the specific color to the button used to open the tab content
    // elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  // document.getElementById("defaultOpen").click();
  // document.querySelectorAll("#defaultOpen").click();
  document.getElementsById("defaultOpen").click();

