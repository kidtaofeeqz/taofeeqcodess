
  let sideBar = document.querySelector(".side-bar");

  function openSidebar () {
    sideBar.style.display ="flex";
   
  }

  function cancelSidebar () {
    sideBar.style.display ="none";
    
  }

  function refresh () {
    window.location.reload(1);
  }