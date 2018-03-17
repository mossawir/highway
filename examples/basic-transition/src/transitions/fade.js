// This example uses `Greensock` an animation library
import { TweenMax } from 'gsap';

// To create your custom transition you need to provide two required methods:
// - `in`: The transition part to show your view.
// - `out`: The transition part to hide you view.
//
// Each method receives two parameters, the `view` and a callback method called
// `done` you will always have to call when the method is over.
const Fade = {
  in: (view, done) => {
    TweenMax.fromTo(view, 1,
      { alpha: 0 },
      {
        alpha: 1,
        onComplete: done
      }
    );
  },
  out: (view, done) => {
    TweenMax.fromTo(view, 1,
      { alpha: 1 },
      {
        alpha: 0,
        onComplete: done
      }
    );
  }
};

// Don't forget to export in some way your custom transition.
export default Fade;