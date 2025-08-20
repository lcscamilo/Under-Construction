// desenha marcas
      (function () {
        const g = document.getElementById('ticks');
        for (let i = 0; i < 12; i++) {
          const a = i / 12 * Math.PI * 2, r1 = 95, r2 = 120;
          const x1 = Math.cos(a) * r1, y1 = Math.sin(a) * r1;
          const x2 = Math.cos(a) * r2, y2 = Math.sin(a) * r2;
          const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
          l.setAttribute('x1', x1); l.setAttribute('y1', y1);
          l.setAttribute('x2', x2); l.setAttribute('y2', y2);
          l.setAttribute('class', 'tick');
          g.appendChild(l);
        }
      })();

      const minG = document.getElementById('minGroup');
      let pos = 0; // posição atual (0 a 59)

      setInterval(() => {
        pos = (pos + 5) % 60; // vai até 59 e reinicia
        const deg = pos * 6; // 360/60
        minG.setAttribute('transform', `rotate(${deg} 140 140)`);
      }, 1000);