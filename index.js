module.exports = {
    hooks: {
        // After html generation
        "page:after": function(page) {
            var config = this.options.pluginsConfig["edit-link"] || {};

            if (!config.base) {
                throw "ERROR: 'base' value required to generate 'Edit This Page' link. \nFor help, please refer to - https://github.com/rtCamp/gitbook-plugin-edit-link/blob/master/README.md#usage";
            }

            if (!config.label) {
                config.label = "Edit This Page";
            }

            rtEditLink = '<a href="' + config.base + '/' + page.path + '" class="btn fa fa-edit pull-left">&nbsp;&nbsp;' + config.label + '</a>';

            page.content = page.content.replace (
                '<!-- Actions Right -->',
                rtEditLink + '<!-- Actions Right -->'
            )

            return page;
        }
    }
};
