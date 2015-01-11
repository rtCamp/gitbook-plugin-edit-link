module.exports = {
    book: {
        // assets: "./book",
        // js: [
        //     "test.js"
        // ],
        // css: [
        //     "test.css"
        // ],
    //     html: {
    //         "html:start": function() {
    //             return "<!-- Start book "+this.options.title+" -->"
    //         },
    //         "html:end": function() {
    //             return "<!-- End of book "+this.options.title+" -->"
    //         },
    //
    //         "head:start": "<!-- head:start -->",
    //         "head:end": "<!-- head:end -->",
    //
    //         "body:start": "<!-- body:start -->",
    //         "body:end": "<!-- body:end -->"
    //     }
    // },
    hooks: {
        // After html generation
        "page:after": function(page) {

            page.content = page.content.replace(
                '<!-- Actions Right -->',
                '<a href="' + this.options.pluginsConfig.rtEditLinkBase + '/' + page.path + '" class="btn fa fa-edit pull-left"><b>Edit This Page on Github</b></a>' + '<!-- Actions Right -->'
                )

            return page;
        }
    }
};
