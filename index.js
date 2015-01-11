module.exports = {
    hooks: {
        // After html generation
        "page:after": function(page) {

            rtEditLinkBase = this.options.pluginsConfig.rtEditLinkBase;

            if (typeof this.options.pluginsConfig.rtEditLinkLabel === 'undefined') {
                rtEditLinkLabel = "Edit This Page";
            } else {
                rtEditLinkLabel = this.options.pluginsConfig.rtEditLinkLabel;
            }

            rtEditLink = '<a href="' + this.options.pluginsConfig.rtEditLinkBase + '/' + page.path + '" class="btn fa fa-edit pull-left">&nbsp;&nbsp;' + rtEditLinkLabel + '</a>';

            page.content = page.content.replace (
                '<!-- Actions Right -->',
                rtEditLink + '<!-- Actions Right -->'
            )

            return page;
        }
    }
};
