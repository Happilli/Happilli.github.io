        // Show the loader for at least 1 second
        window.addEventListener("load", function() {
            const loader = document.getElementById("loader");
            const content = document.getElementById("content");
            
            setTimeout(function() {
                loader.classList.add("hide-loader");
                
                setTimeout(function() {
                    loader.remove();
                    content.style.display = "block"; // Show the content after the loader is removed
                    content.classList.add("show-content");
                }, 1000); // Remove loader 
            }, 1000);
        });
