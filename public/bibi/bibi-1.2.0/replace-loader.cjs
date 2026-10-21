module.exports = function replaceBibiTokens(source) {
    const options = this.getOptions();
    if (options.version) source = source.replace(/____Bibi-Version____/ig, options.version);
    if (options.stripCharset) source = source.replace(/@charset \\"UTF-8\\";\\n?/ig, '');
    if (options.development) source += '\nBibi.Dev = true;';
    return source;
};
