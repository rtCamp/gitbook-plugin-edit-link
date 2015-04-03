GitBook Plugin: Edit Link
======================================

This GitBook Plugin adds "Edit This Page" link on every page.

Link target will be that page's source file on Github or Gitlab or any repo.

## Screenshot

![gitbook-plugin-edit-link](https://cloud.githubusercontent.com/assets/4115/5695161/f5b79002-99b8-11e4-821a-d2af6c729348.png)

## Usage

### Step #1 - Update `book.json` file

1. In you gitbook's `book.json` file, add `edit-link` to `plugins` list.
2. In `pluginsConfig`, Set `base` value which is base path to your github or gitlab or other code repo. Trailing slash is NOT required.
3. By default link label will be "Edit This Page". You can change it using plugin config `label`.

#### Sample `book.json` file

```
{
    "plugins": ["edit-link"],
    "pluginsConfig": {
            "edit-link": {
                "base": "https://github.com/USER/REPO/edit/BRANCH/path/to/book",
                "label": "Edit This Page"
            }
    }
}
```
**Note**: Above snippet can be used as complete `book.json` file, if your book doesn't have one yet.

**Github/Gitlab**: In string `...REPO/edit/BRANCH...`, you may replace `edit` with `tree` if you want source file to open in read-mode, rather than edit-mode directly on github/gitlab.

### Step #2 - gitbook commands

1. Run `gitbook install`. It will automatically install `edit-link` gitbook plugin for your book. This is needed only once.
2. Build your book (`gitbook build`) or serve (`gitbook serve`) as usual.

## Troubleshooting

1. If you are not seeing the "Edit this page" link, check if your `book.json` is valid. You can use this online tool - [http://json.parser.online.fr/beta/](http://json.parser.online.fr/beta/)
2. Check if you are using default gitbook theme. It is NOT recommended to modify gitbook themes directly.

## How this work?

This plugin simply looks for HTML comment `<!-- Actions Right -->` in parsed page content and insert "edit link" HTML just before `<!-- Actions Right -->`.

This means if that HTML comment changes, this plugin will break but I hope to fix it easily whenever that happen.

## Changelog

**1.2 - 03 April 2015**

- Multiligual gitbook support added by [@aniav](https://github.com/aniav) ([#2](https://github.com/rtCamp/gitbook-plugin-edit-link/pull/2))

**1.1.3 - 11 Jan 2015**

- Initial release
