# Gulp 汉字字体自动转 CSS

## 说明

需要艺术汉字字体，但是对代码体积或者性能优化有要求时。比如小程序开发场景。

可以只把需要的少量汉字从字库中提取出来。

然后通过 CSS font-family 属性调用字体文件。

本示例通过 Gulp 实现字体自动转换成 CSS。

## 文件夹结构

```
font-to-css
├─ dist                                  # CSS 转换结果目录
│  └─ AaWeiTaNingMengCha-2.css           # CSS 结果示例
├─ src                                   # 项目原始资源目录
│  ├─ fonts                              # 原始字体目录，待处理字体放这里
│  │  ├─ .font-spider                    # 自动备份原始字体
│  │  │  └─ AaWeiTaNingMengCha-2.ttf     # 自动备份示例
│  │  ├─ woff2                           # 自动备份 woff2
│  │  │  └─ AaWeiTaNingMengCha-2.woff2   # 自动备份示例
│  │  └─ AaWeiTaNingMengCha-2.ttf        # 原始字体处理结果
│  └─ index.html                         # 待提取汉字信息在这里输入
├─ test                                  # 测试目录
│  └─ index.html                         # 测试结果 示例
├─ gitignore                             # Git 忽略配置
├─ gulpfile.js                           # Gulp 配置脚本
│  package.json                          # NPM 配置
└─ README.md                             # 项目说明文件
```

## 用法

1. 将待提取的字体原始文件放入 src/fonts 目录
2. 在 src/index.html 文件， h1 标签内输入要提取的汉字
3. 在 gulpfile.js 所在目录执行 npm run start

## 测试结果

1. 在 dist 目录查看转换结果
2. 可选在 test 目录编写测试文件，本例中的 test/index.html 拖入浏览器可见字体效果
