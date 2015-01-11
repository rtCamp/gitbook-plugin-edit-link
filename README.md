GitBook Plugin: Edit Link
======================================

This GitBook Plugin adds "Edit This Page" link on every page.

Link target will be that page's source file on Github or Gitlab or any repo.

## Usage

1. In you gitbook's `book.json` file, add `edit-link` to `plugins` list.
2. Set `rtEditLinkBase` value which is base path to your github or gitlab or other code repo. Trailing slash is NOT required.
3. Run `gitbook install`. It will automatically install `edit-this-page-link` gitbook plugin for your book. This is needed only once.
4. Finally build your book (`gitbook build`) or serve (`gitbook serve`) as usual.

### Changing Link Label (Localization)

By default link label will be "Edit This Page". You can change it using plugin config `rtEditLinkLabel`.

## Sample `book.json` file

*Important*: Make sure you edit value of `rtEditLinkBase`. You can replace `edit` with `tree` if you want source file to open in read-mode, rather than edit-mode directly on github/gitlab.

```
{
    "plugins": ["edit-link"],
    "pluginsConfig": {
        "rtEditLinkBase": "https://github.com/USER/REPO/edit/BRANCH/path/to/book",
        "rtEditLinkLabel": "Edit This Page"
    }
}
```

Above snippet can be used as complete `book.json` file, if your book doesn't have one yet.

## Screenshot

![gitbook-plugin-edit-link](https://cloud.githubusercontent.com/assets/4115/5695161/f5b79002-99b8-11e4-821a-d2af6c729348.png)


## Troubleshooting

1. If you are not seeing the "Edit this page" link, check if your `book.json` is valid. You can use this online tool - [http://json.parser.online.fr/beta/](http://json.parser.online.fr/beta/)
2. Check if you are using default gitbook theme. It is NOT recommended to modify gitbook themes directly.

## How this work?

This plugin simply looks for HTML comment `<!-- Actions Right -->` in parsed page content and insert HTML will be that page's source file on Github or Gitlab or any repo.
