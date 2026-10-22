# uan021112.github.io

A static academic homepage based on [Jon Barron's website](https://jonbarron.info/) and its [source code](https://github.com/jonbarron/jonbarron.github.io). No build tools are required.

## Editing content

- `index.html`: Homepage structure, including the English and Chinese names, biography, laboratory and advisor links, and contact details. Publications contains papers and shared authorship notes. The Misc. section below introduces the design background and links to Art & Design.
- `stylesheet.css`: Centered layout, typography, links, and responsive styles.
- `avatar.js`: Avatar interaction. The first four activations keep the original image; the fifth switches to `images/hi.png`; the sixth restores the original and resets the counter. Mouse, touch, and keyboard Enter/Space share the same counter, which resets on reload.
- `pronunciation.js`: The small `!` beside the name displays the standard Pinyin `Tiānchí Luán` and IPA pronunciation. It supports hover, click/touch, and keyboard focus. Escape, moving focus away, or clicking outside closes the tooltip; moving the pointer away also closes it when the trigger is not focused.
- `images/avatar.png`: Original profile photo. Displayed at up to 200px on desktop and 160px on mobile, with a circular crop that preserves space above the head without changing the source image.
- `images/hi.png`: Alternate avatar, displayed in the same circular area as the original.
- `images/wechat.jpg`: Original WeChat QR code, kept in JPEG format and opened through the WeChat contact link.
- `images/feed-forward-ar-teaser.png`: Illustration for the first paper, taken from the [original used in the project README](https://github.com/uan021112/Feed-forward_model_meets_AR/blob/main/assets/teaser.png). The image appears beside the text on desktop and above it on mobile. Its full aspect ratio is preserved, and clicking the thumbnail opens the original.
- `art-design/index.html`: Art & Design gallery at `/art-design/`, sharing the homepage stylesheet and providing a link back home. The gallery uses two columns on desktop and one on mobile, with the dormitory bed labels spanning the full row. The complete recruitment graphic is available in a height-limited scrolling region that also supports keyboard scrolling when focused.
- `images/art-design/`: Original artwork with English filenames: `dormitory-bed-labels.jpg`, `youth-league-recruitment.jpg`, and `freshman-welcome-poster.jpg`.
- `youth-league-recruitment-preview.jpg` and `freshman-welcome-poster-preview.jpg`: Lightweight gallery previews in the same artwork directory. They do not overwrite the originals. Each work links to its original image; the recruitment original is approximately 64 MB and loads only when its full-image link is opened.
- When changing the name, update the page `title`, avatar `alt`, and the Pinyin and IPA in the pronunciation tooltip. Replace `images/avatar.png` to update the profile photo, and use only valid personal links.
- Contact links are in `.profile-links`: Email, Google Scholar, WeChat, and GitHub. CV is currently disabled gray text rather than an empty link.
- Keep the footer attribution and its links to Jon Barron's website and source repository.
- Paper entries in Publications are inside `.publications`. The current paper is marked `Under review`; its title and `SSRN` link point to the paper page, and `GitHub` links to the [project repository](https://github.com/uan021112/Feed-forward_model_meets_AR).
- Authors are listed in `.publication-authors` in the confirmed order. Tianchi Luan is bold black text; the remaining authors are blue. Add links for known homepages and leave other names as plain text.
- `.authorship-legend` provides shared notation for Publications: `*` means Equal contribution, and `†` means Corresponding author. Chen Wang appears before Minghuan Liu and is marked with `†`. Add symbols only for confirmed authorship roles.

The site retains the template's Lato font, loaded from Google Fonts, with system fonts as a fallback.

## Local preview

```sh
python3 -m http.server 10925 --bind 0.0.0.0
```

Open <http://127.0.0.1:10925/> on this machine. Other devices on the same network can use `http://YOUR_LAN_IP:10925/`. The Art & Design gallery is at `/art-design/`. GitHub Pages can serve the site directly from the repository root without installing dependencies.
