/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

function StackAnimation() {
  const el = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const typed = new Typed(el.current, {
      strings: ['Codar.','Musicas.','Tocar Violão.','Academia.','Ouvir MC Poze nos anos 80.'],
      typeSpeed: 70,
      showCursor: true,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="App">
      <span ref={el} className="multiText" />
    </div>
  );
}

export default StackAnimation;
