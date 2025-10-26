    const installButton = document.getElementById('addToHomeScreenButton');
    if (installButton) {
      installButton.addEventListener('click', () => {
   
        
        // Show the browser's A2HS prompt
        deferredPrompt.prompt();
        
        // Track the user's choice
        deferredPrompt.userChoice.then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null; // Clear the deferredPrompt
        });
      });
    }