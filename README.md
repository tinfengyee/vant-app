# vant-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



# 遇到的问题

## 路由导入Home组件报错

> 文件夹改成homes,或者路由配置@/views/home/index



## 在 layout 组件引入 app-main(包含home组件) 和 tarbar组件,由于swipe原因,点击tarbar时,页面内容会抖动

解决办法: 首先给swipe组件加一个外层容器 `.swipe-box` 然后增加 css 代码

```css
  .swipe-box {
    transform: translateZ(0);
    overflow: hidden;
  }
  /* 两个缺一补个 , 原因 ??? */
```

[轮播图轮播时的抖动解决方案](https://blog.csdn.net/weixin_44442095/article/details/87614913)

[移动端轮播图下内容抖动问题](https://blog.csdn.net/weixin_44442095/article/details/87614913)



## [Chrome浏览器不支持字体小于12px的解决办法](https://blog.csdn.net/xjun0812/article/details/50497137)

第一种:

```css
span {
  font-size: 12px;
  transform: scale(0.8);
  display: block; /* transform:scale()这个属性只为可以缩放可以定义宽高的元素*/
}

/* 另外如果只是调整 p 元素(p里面没有span), 可以设置 -webkit-transform-origin-x: 0; ,可以防止两边空白 */

width: 300px;
-webkit-transform-origin-x: 0;   //X方向上缩放的中心点
-webkit-transform: scale(0.9);   //缩放比例
transform: scale(0.9);
 
在使用的时候，需要注意的是这种方法需要提前计算好文字的宽度，然后按照比例进行缩放。
这里只写了chrome浏览器的兼容性，要兼容其他的浏览器把前缀加上即可。

<style> 
    //方法一 
    .setSize{ 
        font-size: 10px; 
        transform: scale(0.7); 
        display: inline-block; 
    } 
 
    //方法二 
    .setSize{ 
        font-size: 22px; 
        transform: scale(0.5); 
        transform-origin: 0% 0%; 
    } 
</style>
```

第二种:(可能失效)

```css
   html,body{ -webkit-text-size-adjust:none; }
```

[解决浏览器或移动端不支持小于12px的字体](https://blog.csdn.net/Raytheon107/article/details/82733865)



## Vue组件 Tabbar 切换过渡抖动

原因是因为使用了fixed 跟 transform?

解决办法:

[vuejs 过渡动画 头部抖动问题](https://segmentfault.com/q/1010000010884379)

[vue 过渡动画抖动问题处理](https://blog.csdn.net/qq_25610161/article/details/81940863)

或者不同位移的动画,只用fade动画

```html
<router-view :key="key" class="page" /> // 1.现在router-view设置一个类
//2.然后设置样式
.page {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
//3.设置过渡动画
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  // position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: transform 0.38s ease;
}

// 或者设置样式代码直接在.v-*-active里面设置

```

## [better-scroll无法滚动](https://blog.csdn.net/qiqi_77_/article/details/79361413#commentBox)

