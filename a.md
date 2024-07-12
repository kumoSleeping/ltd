
# Markdown文档教程示例！


</center>


> 本文仅为Markdown文档教程示例。更多教程请点击[这里](https://www.runoob.com/markdown/md-tutorial.html)。

本站**支持**html语法和css，~~但是不支持js语法。~~



## 标题

使用井号（#）来创建标题，井号的**数量**表示标题的**级别**。


> :pencil2: **源码**
> ```
> #### 四级标题
> 
> ##### 五级标题
>


## 强调

使用星号（*）或下划线（_）包围文本来创建斜体或粗体效果。

> :pencil2: **源码**
>  ```
> *斜体文本*
> 
> **粗体文本**
>

> :book: **效果**
>
> *斜体文本*
> 
> **粗体文本**
>

## 图片

使用感叹号（!）、方括号和圆括号来创建图片。

> :pencil2: **源码**
>```
> ![图片](https://en.bang-dream.com/wordpress/wp-content/uploads/20221003213030/BGD_OS_HPheader_FOOTER_PC-3.jpg)


> :book: **效果**
> ![图片](https://en.bang-dream.com/wordpress/wp-content/uploads/20221003213030/BGD_OS_HPheader_FOOTER_PC-3.jpg)




## 居中

使用\<center>标签来居中文本。

> :pencil2: **源码**
>
> 
> ```
> <center>
> 
> **夏に閉じこめて**
> 
> 宁静的乐曲沉浸于海风与夏夜，浸透着温馨与浪漫。这首歌来自Poppin'Party 18th 单的主题曲～“夏末，与你共赏的星空，和汽水瓶的叮咚”与夏夜的波子汽水一起，永远的记住这繁星之夜的愿望吧～
> 
> </center>


> :book: **效果**
> 
> 
> <center>
> 
> **夏に閉じこめて**
> 
> 宁静的乐曲沉浸于海风与夏夜，浸透着温馨与浪漫。这首歌来自Poppin'Party 18th 单的主题曲～“夏末，与你共赏的星空，和汽水瓶的叮咚”与夏夜的波子汽水一起，永远的记住这繁星之夜的愿望吧～
> 
> </center>





## 列表

使用减号（-）创建列表，支持**嵌套**。
使用**tap键**配合减号（-）来创建嵌套列表。
使用1. 2. 3.来创建有序列表。

> :pencil2: **源码**
> ```嵌套列表
> - 主要项目1
>   - 子项目1.1
> - 主要项目2
>   - 子项目2.1
>       - 孙项目(草)2.1.1
>   - 子项目2.2

> :book: **效果**
> 
> - 主要项目1
>   - 子项目1.1
> - 主要项目2
>   - 子项目2.1
>       - 孙项目(草)2.1.1
>   - 子项目2.2

## 链接

使用方括号和圆括号来创建链接。

> :pencil2: **源码**
> ```
> [访问Google](https://www.google.com)


> :book: **效果**
>
> [访问Google](https://www.google.com)

## 代码块

使用反引号（\`）来创建内联代码，使用三个反引号（\`\`\`）来创建代码块。

> :pencil2: **源码**
>```
> ```python
> def kumo():
>     print("kumo")```
> ```

> :book: **效果**
> 
> ```python
> def kumo():
>     print("kumo")
> ```

## 水平线

使用三个或更多的星号（*）、减号（-）或下划线（_）来创建水平线。


> :pencil2: **源码**
> ```
> ***

> :book: **效果**
>
> 
> ***
>
>  ~~就是上面那条线:point_up:~~


## 表格

使用竖线（|）和连字符（-）来创建表格。

> :pencil2: **源码**
> ```表格
> | 角色   | 代表色 |  
> | ------ | ---- | 
> | 愛城華恋   | #FB5458   | 
> | 戸山香澄   | #FF5522   | 
> | 優木せつ菜   | #D81C2F   | 

> :book: **效果**
> 
> | 角色   | 代表色 |  
>| ------ | ---- | 
>| 愛城華恋   | #FB5458   | 
>| 戸山香澄   | #FF5522   | 
>| 優木せつ菜   | #D81C2F   |  


## 引用

> :pencil2: **源码**
>```
> > 你好

> :book: **效果**
>
> > 你好





## 颜色

使用`<font color="red">文本</font>`来创建颜色。

> :pencil2: **源码**
>  ```颜色
> <font color="FB5458">这是华恋</font>
> <font color="FF5522">这是香澄</font>
> <font color="D81C2F">这是雪菜</font>


> :book: **效果**
> 
> <font color="FB5458">这是华恋</font>
> <font color="FF5522">这是香澄</font>
> <font color="D81C2F">这是雪菜</font>

## 删除线

使用两个**英文**波浪线（\~）包围文本来创建~~删除线~~，用一个波浪线（\~）包围文本来~把文本变成这样~。

> :pencil2: **源码**
> ```
> ~~删除线~~
> 
> ~删除线~

> :book: **效果**
> 
> ~~删除线~~
> 
> ~删除线~




## emoji (可能不受浏览器支持)

使用冒号（:）来创建emoji。[emoji列表](https://theme-hope.vuejs.press/zh/cookbook/markdown/emoji/)大全。


> :pencil2: **源码**
>```emoji
> :smile:
> :heart:

> :book: **效果**
> 
> :smile:
> :heart:


## 转义字符

如果你想要显示Markdown标记本身，可以使用反斜杠\\进行转义。有时需要用到使用反引号（\`）


# 代码高亮

默认支持 CSS、JavaScript 和 HTML

目前引入


```python
def kumo():
    print("kumo")
```



```typescript
function kumo() {
    console.log("kumo")
}
```


```bash
echo "kumo"
```


```diff
}, {
     // 使用自增的主键值
     autoInc: true,
+    unique: [['platform', 'guildId']],
   })
   ```

   

