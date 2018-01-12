# Order  约餐 
#### 一起吃饭的同事选择自己喜欢吃的菜，可以提前下单，到店就能吃，节约餐厅点餐，做菜的时间

---

##### 这里只是前端部分的代码，用的是 web socket 链接服务器，实时同步菜单

---

##### 使用，要想看效果那只能自己搭个 http 服务跑起来才能看到效果（不含web socket 交互功能）

---

Mac 系统 
* 因为自带 python 2.0 环境，直接利用python的命令行就行
* order 目录下，运行 python -m SimpleHTTPServer 8000

---

Windows 系统
* 安装 node 环境
* order 目录下，运行 http-server -p 8000
