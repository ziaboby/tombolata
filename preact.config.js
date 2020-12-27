export default (config) => {
    if (config.mode !== "development") config.output.publicPath = '/tombolata/';
};