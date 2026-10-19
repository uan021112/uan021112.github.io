# uan021112.github.io

参考 [Jon Barron 的个人主页](https://jonbarron.info/)及其[源代码](https://github.com/jonbarron/jonbarron.github.io)制作的静态学术主页，无需构建工具。

## 编辑内容

- `index.html`：页面结构；已填写中英文姓名、三段个人介绍、实验室与导师链接以及联系方式，Research 区块的补充介绍暂留空。
- `stylesheet.css`：居中布局、字体、链接和移动端样式。
- `avatar.js`：头像点击交互；前 4 次保持原图，第 5 次切换为 `images/hi.png`，第 6 次恢复原头像并重新计数。鼠标、触摸及键盘 Enter/Space 均使用同一计数，刷新页面后重置。
- `images/avatar.png`：头像原图；桌面最大显示 200px，手机显示 160px，以圆形裁剪并保留头顶空间，不修改图片本身。
- `images/hi.png`：头像点击彩蛋的替换图片，与原头像使用相同的圆形显示区域。
- `images/wechat.jpg`：微信二维码原图，保留 JPEG 格式，由联系方式中的 WeChat 入口打开。
- `images/feed-forward-ar-teaser.png`：第一篇论文配图，取自[项目 README 使用的原图](https://github.com/uan021112/Feed-forward_model_meets_AR/blob/main/assets/teaser.png)。桌面左图右文、手机上下排列；保留完整比例，点击缩略图可查看原图。
- 修改姓名时，同步更新页面的 `title` 和头像的 `alt`；替换头像时更新 `images/avatar.png`，个人链接仅使用真实可用的地址。
- 联系方式位于 `.profile-links`，包含 Email、Google Scholar、WeChat 和 GitHub；CV 暂以不可点击的灰色文字显示，不使用空链接。
- 页脚保留指定致谢，并链接至 Jon Barron 的网站和源码仓库。
- Research 中的论文条目位于 `.publications`；当前文章标注为 `Under review`，标题与 `SSRN` 指向论文页面，`GitHub` 指向[项目仓库](https://github.com/uan021112/Feed-forward_model_meets_AR)。

字体沿用原模板的 Lato，从 Google Fonts CDN 加载；不可用时使用系统字体。

## 本地预览

```sh
python3 -m http.server 10924 --bind 0.0.0.0
```

本机打开 <http://127.0.0.1:10924/>，同一局域网的其他设备使用 `http://本机局域网IP:10924/`。页面可由 GitHub Pages 直接从仓库根目录提供，无需安装依赖。