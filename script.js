const darkModeButton = document.querySelector("#dark-theme-button");

// toggle light - dark mode
darkModeButton.addEventListener("click", () => {

    let element = document.body;
    element.classList.toggle("dark-mode");
    
})

  