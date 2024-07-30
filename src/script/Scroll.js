import SCROLL_EFFECT_MODULE from "js-scroll-effect-module";

const ScrollEffectModule = new SCROLL_EFFECT_MODULE({
  target: "[data-scroll]",
  classNameInview: "active",

  ratio: 0.8,
  reverse: true,

  ratioReverse: null,

  firstDelay: 200,

  autoStart: true,
  autoStartType: "ready", // ready, load, scroll

  throttleInterval: 5,
});

ScrollEffectModule.Start();
