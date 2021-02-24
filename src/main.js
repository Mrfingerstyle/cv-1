let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `
/* 你好,我是小刘
 * 一名前端新人
 * 接下来我要演示一个效果
 * 首先准备一个div
 */
#div-1 {
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 
 * 接下来 准备把div变为一个八卦图
 * 注意看
 * 首先div变为一个圆形
 */
#div-1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/* 
 * 接下来 准备处理八卦图的两个渐变区域
 * 注意看
 * 首先使用背景渐变
 */
#div-1 {
    background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 100%);
}
/* 
 * 接下来 使用伪元素设置两个圆形的交界区域
 */
#div-1::before {
    content: '';display: block;position: absolute;width: 100px;height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
}

#div-1::after {
    content: '';display: block;position: absolute;width: 100px;height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
}
/* 
 * 接下来 
 * 使用径向渐变设置两个黑白互相渗透的圆形区域
 */
#div-1::before {
    background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 25%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 100%) 
}
#div-1::after {
    background: radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 25%, rgba(255, 255, 255, 1) 25%, rgba(255, 255, 255, 1) 100%, rgba(0, 0, 0, 1) 100%)
}
`
// string 中的 css 代码如何生效

// 缓存显示在屏幕上的文字
let string_2 = ''
let n = 1

let step = () => {
    // 0.1s 增加 1次
    setTimeout(() => {
        // 如果是回车
        // 如果不是回车照搬
        // 如果是代码的空格 添加 &nbsp;
        if (string[n] === '\n') {
            string_2 += '<br>'    
        } else if (string[n] === ' ') {
            string_2 += '&nbsp;'
        } else {
            string_2 += string[n]
        }

        html.innerHTML = string_2
        style.innerHTML = string.substring(0, n)

        window.scrollTo(0, 9999)
        html.scrollTo(0, 9999)

        if (n < string.length - 1) {
            // 如果n不是最后一个 就继续
            n++ 
            step()
        }
    } ,0)    
}

step()






