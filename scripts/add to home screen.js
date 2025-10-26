    let deferredPrompt;
    const addBtn = document.querySelector("#addToHomeScreenButton");
    
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
      // Update UI to notify the user they can add to home screen
      addBtn.style.display = "block"; // Make the button visible
    });