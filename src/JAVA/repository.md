# java 中好用的库
## 好用的表达式引擎
~~~ text 
Aviator是一个高性能、轻量级的java语言实现的表达式求值引擎，主要用于各种表达式的动态求值。
~~~
引入`jar包`
~~~ xml
<dependency>
  <groupId>com.googlecode.aviator</groupId>
  <artifactId>aviator</artifactId>
  <version>3.0.1</version>
</dependency>
~~~
> 使用文档
>
> [AviatorScript 文档](https://www.yuque.com/boyan-avfmj/aviatorscript)

## sse 服务端向客户端推送实时数据
~~~ text
Spring WebFlux 提供了对 Server-Sent Events (SSE) 的支持，允许服务器向客户端推送实时更新。SSE 是一种基于 HTTP 的协议，允许服务器向客户端发送事件流，客户端可以通过事件流接收服务器推送的数据。
~~~