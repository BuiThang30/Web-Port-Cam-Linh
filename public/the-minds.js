const tabsBox = document.getElementById('tabs');
if (tabsBox) {
  tabsBox.addEventListener('click', (e) => {
    const btn = e.target.closest('.tab');
    if (!btn) return;
    
    tabsBox.querySelectorAll('.tab').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    document.querySelectorAll('.panel').forEach(p => {
      p.hidden = p.id !== btn.dataset.target;
    });
  });
}