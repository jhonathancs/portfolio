/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import Typed from 'typed.js';
import { useEffect, useRef } from 'react';

function NameAnimation() {
  const el = useRef(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const typed = new Typed(el.current, {
      strings: ['Jhonathan Costa, Desenvolvedor Full Stack.'],
      typeSpeed: 50,
      showCursor: false
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

export default NameAnimation;
