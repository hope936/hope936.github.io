const userInfo = {
    name:"邓欣",
    intro:"物联网专业大二学生，喜欢记录学习笔记、分享生活日常",
    hobby:"羽毛球、美食、编程、摄影",
    avatar:"avatar.jpg"
}

const adList = [
    {src:"ad1.jpg",link:"https://www.bilibili.com"},
    {src:"ad2.jpg",link:"https://github.com"}
]

const friendLink = [
    {name:"CSDN技术社区",url:"https://blog.csdn.net"},
    {name:"哔哩哔哩",url:"https://www.bilibili.com"},
    {name:"菜鸟教程",url:"https://www.runoob.com"}
]

let articleList = JSON.parse(localStorage.getItem("articleList")) || [
    {title:"端午随笔",content:"今日端午节，整理网站代码，吃粽子放松",publish_date:"2026-06-19"},
    {title:"74161计数器学习笔记",content:"数字电路模16计数器使用方法总结",publish_date:"2026-06-18"}
]

let mediaList = JSON.parse(localStorage.getItem("mediaList")) || [
    {title:"校园风景",src:"campus.jpg",type:1,publish_date:"2026-06-17"},
    {title:"我的可爱的仓鼠",src:"badminton.mp4",type:2,publish_date:"2026-06-17"}
]

localStorage.setItem("articleList",JSON.stringify(articleList));
localStorage.setItem("mediaList",JSON.stringify(mediaList));
