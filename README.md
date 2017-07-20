# Lesson
实验楼里面的小课程，记录学习情况！
## picToChar ：是利用python 实现 图片转字符画的代码
## HtmlDeomo

7-19 :HTML5 Canvas小游戏
* 学了js, html, css, 为了巩固基础知识，模仿写了个小游戏
* 一点点的成就感，驱动着下一阶段的学习:-D

## 游戏的玩法
> 通过用键盘输入，控制英雄，到达怪物的位置，吃掉怪物，即胜利


###用到的技术&值得学习的知识点

* 在画布上加载图片有固定的js 模板。 API， 但，为什么能在画布上加载？ 而非画布外？
   <img src="images/background.png" >    就是用js , 动态加载，着个html 标签
* 在英雄在画布上移动，转化为代码， 即时： 在像素上移动， speed 元素
*  处理用户的输入: 只是监听两个用户的输入： HTML的E 元素
    addEventListener  的写法。 

* 开始新的一轮游戏: 英雄位置的初始化， 怪物位置的初始化（随机） 的实现
* 更新对象？ 为什么？
> 在游戏的过程中，不管是用户在玩（有正确输入的状态）还是游戏结束，我们都是需要及时更新游戏的对象
* 判断 英雄和怪物的代码？
* 游戏结束标志
* 为什么能保持英雄速度很多？ 与代码的运行速度无关吗？
* 渲染， 加载图片的过程， 循序要注意， 特别是，因为图片会互相覆盖。
* 设置requestAnimationFrame()

###游戏的不足bug
* 当用键盘，控制到画布外面时，英雄容易消失。
* 


###游戏能提高的地方，增加的功能
* 可以设置相应的陷阱， 当英雄移动到陷阱时死亡
* 


##总结
* 
> 在前端开发中，一般是用户触发了点击事件然后才去执行动画或发起异步请求之类的

* 第一次加载失败， 。。Debug .
* 如果可以，想将游戏加载过程，用流程图画出来。
