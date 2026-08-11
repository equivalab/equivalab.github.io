# Equiva Lab homepage

一个零依赖、响应式的 Equiva Lab 团队网站。内容结构参考学术实验室常见的信息组织，视觉采用明亮背景、克制字号、圆角内容卡片与低饱和蓝绿色渐变。

网站包含：首页、研究成果、团队成员、团队新闻与加入我们页面。

## 本地预览

直接打开 `index.html`，或在目录中运行任意静态文件服务器，例如：

```powershell
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 上线前需要替换

- `index.html` 中的联系邮箱 `hello@equiva-lab.org`
- `team.html` 中的真实成员信息与个人主页
- `results.html` 中的真实论文、项目和开源内容
- `news.html` 中后续发布的团队动态
- 页脚中的学校、机构与备案信息（如适用）

页面支持中英文切换、当前章节高亮、移动端导航、滚动入场动画、减少动态效果的系统偏好，以及基于 Canvas 的等价表征动态示意图。
