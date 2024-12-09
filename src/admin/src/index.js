const bootstrap = (app) => {
  // Enable RTL by injecting the correct dir and class
  document.documentElement.dir = "rtl";
  document.documentElement.classList.add("rtl");
};

export default {
  config: {},
  bootstrap,
};
