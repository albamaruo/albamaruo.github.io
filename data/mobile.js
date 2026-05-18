 (function(){
      const btn = document.getElementById('menuButton');
      const wrapper = document.getElementById('mobileMenu');
      const overlay = document.getElementById('mobileOverlay');
      const panel = document.getElementById('mobilePanel');
      const closeBtn = document.getElementById('closeMenu');
      if (!btn || !wrapper || !overlay || !panel) return;

      function openMenu(){
        wrapper.classList.remove('hidden');

        overlay.classList.remove('pointer-events-none');
 
        requestAnimationFrame(()=> panel.classList.remove('-translate-x-full'));
        btn.setAttribute('aria-expanded','true');
        btn.setAttribute('aria-label','Close main menu');
      }

      function closeMenu(){
      
        panel.classList.add('-translate-x-full');
        btn.setAttribute('aria-expanded','false');
        btn.setAttribute('aria-label','Open main menu');
        setTimeout(()=>{
          wrapper.classList.add('hidden');
          overlay.classList.add('pointer-events-none');
        }, 300);
      }

      btn.addEventListener('click', function(){
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        if (expanded) closeMenu(); else openMenu();
      });

      if (closeBtn) closeBtn.addEventListener('click', closeMenu);

    
      document.addEventListener('keydown', function(e){
        if (e.key === 'Escape') closeMenu();
      });

       overlay.addEventListener('click', function(e){
        closeMenu();
      });

      panel.addEventListener('click', function(e){
        e.stopPropagation();
      });
    })();