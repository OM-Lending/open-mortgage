## 博客内容维护指南

本项目的博客内容是直接写在代码里的（不是用 CMS）。  
当你要新增一篇博客文章时，请按本指南操作，确保列表页、详情页以及中英文内容始终保持一致。

---

### 1. 确定 slug 和基础信息

- **Slug**：用于 URL 的英文短串，例如 `choosing-the-right-mortgage-broker`
- **Date**：ISO 日期格式 `YYYY-MM-DD`，例如 `2024-01-20`
- **Title (EN / ZH)**：英文标题和中文标题
- **Excerpt (EN / ZH)**：用于博客列表页的简短摘要（英文 + 中文）

列表页和详情页中，需要使用**相同的 slug 和日期**。

---

### 2. 在博客列表页中添加新文章

文件：`app/[locale]/blogs/page.tsx`

1. 找到 `blogPostsByLocale`。
2. 在 `en` 数组中新增一条记录：
   - `slug`：你新定义的 slug
   - `title`：英文标题
   - `excerpt`：英文摘要
   - `date`：ISO 日期字符串
3. 在 `zh` 数组中新增对应的中文记录：
   - 使用**相同的** `slug` 和 `date`
   - 填写中文 `title` 和 `excerpt`

列表页会根据这里的数据渲染卡片，并生成链接：`/{locale}/blogs/{slug}`。

---

### 3. 在详情页中添加文章内容

文件：`app/[locale]/blogs/[slug]/page.tsx`

1. 找到 `blogPostsByLocale: Record<LocaleKey, Record<string, BlogPost>>`。
2. 在 `en` 下新增一条以 slug 为 key 的记录：
   - key：你的 slug，例如 `"choosing-the-right-mortgage-broker"`
   - `title`：英文标题
   - `date`：与列表页一致的 ISO 日期
   - `content`：一段包在反引号里的 HTML 字符串，通过 `dangerouslySetInnerHTML` 渲染
3. 在 `zh` 下新增对应的中文记录：
   - 使用**相同的 key（slug）和 `date`**
   - `title`：中文标题
   - `content`：中文 HTML 字符串

**HTML 内容编写建议**

- 使用语义化标签：`<h2>`、`<h3>`、`<p>`、`<ul>`、`<li>`、`<strong>` 等
- 不要包含 `<html>`、`<body>` 或 `<main>` 标签，只写正文结构
- 同一段落内尽量保持**纯英文或纯中文**，避免不必要的混排
- 可以参考现有文章的结构和语气来撰写

---

### 4. 检查中英文页面是否正常

完成修改后：

- 启动开发服务器：`npm run dev`
- 确认新文章出现在以下路径：
  - 英文列表：`/en/blogs`
  - 英文详情：`/en/blogs/{your-slug}`
  - 中文列表：`/zh/blogs`
  - 中文详情：`/zh/blogs/{your-slug}`

重点检查：

- 标题和摘要是否正确（中英文各自对应）
- 日期在两种语言下显示是否正常
- 正文排版是否正常（标题、段落、列表等）

---

### 5. 使用现有文章作为参考

如果不确定格式，可以直接参考现有完整示例：

- 列表与 slug 定义：`app/[locale]/blogs/page.tsx`
- 详情内容：`app/[locale]/blogs/[slug]/page.tsx`

目前 slug 为 `choosing-the-right-mortgage-broker` 的文章，是一个从列表到详情、从英文到中文都已经配置好的示例。
