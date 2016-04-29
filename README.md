# SleemonApp
Sleemon training app frontend

Execution flow example:

Start -> localhost:3003/ -> layout.html -> #/user -> views/user/user.js -> http(/user?wechatId=xxx) -> controller/user.info -> proxy/user.js -> WEBAPI -> views/user/index.html -> End

1. start.
2. type http://localhost:3003/ in web broswer.
3. render layout.html based on express router setting in app.js.
4. click 'a href=#/user' tag on layout.html.
5. execute ng-controller of views/user/user.js based on Angular routerProvider setting.
6. send http request http://localhost:3003/user?wechatId=xxx to node server.
7. request goes into controller/user.info based on node server router setting in router.js.
9. user.info call WebApi, WebApi handle request and give data back to node server.
9. node server validate WebApi response and send it back to Angular ng-controller.
10. render views/user/index.html
11. end. 

To do list:
1. solve routes.js src issue on views/layout.html
2. gulp config