function shuffleList() {
    const list = document.getElementById("link-list");
    const items = Array.from(list.children);
    
    // Shuffle the array using Fisher-Yates algorithm
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    
    // Clear and re-append shuffled items
    list.innerHTML = "";
    items.forEach(item => list.appendChild(item));
  }
  
  // Shuffle when the page loads
  window.addEventListener("DOMContentLoaded", shuffleList);
