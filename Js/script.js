document.getElementById("button").addEventListener("click", function() {
    
    document.body.style.backgroundImage = "url('./port_asset/rick.gif')"
  
    
    document.querySelector(".everything").style.display = "none"
  
    
    var song = document.getElementById("song")
    song.play()
  })