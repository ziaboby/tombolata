/*
to customize webpack settings, eg.

export default (config) => {
    if (config.mode !== "development") config.output.publicPath = '/tombolata/';
};

*/

export default (config) => {
  if (config.mode == "production") config.output.publicPath = "/tombolata/";
};
