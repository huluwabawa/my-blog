# 记录一些平常碎片化看到的东西
### 1. java中常用的
`函数式接口`
```text
consumer 只有入参
runable 入参和出参都没有
function  有入参和出参
supplier 只有出参
```

### javaWeb
`rest风格判断真实的url @Pathvarible`
::: code-group

``` 1.java
private String getRealUrl(Object handler,String url){
        Annotation[][] parameterAnnotations = ((HandlerMethod) handler).getMethod().getParameterAnnotations();
        int i = 0;
        for (Annotation[] annotations : parameterAnnotations) {
            for (Annotation annotation : annotations) {
                if(annotation instanceof PathVariable){
                    i++;
                    break;
                }
            }
        }
        if (i == 0){
            return url;
        }
        List<String> split = Arrays.asList(url.split("\\/"));
        List<String> subList = split.subList(0, split.size() - i);
        String join = Joiner.on("/").join(subList);
        return join;
}

```
```2.java
public String getRealUrl(HttpServletRequest request) {
        Object attribute = request.getAttribute(HandlerMapping.BEST_MATCHING_PATTERN_ATTRIBUTE);
        return attribute.toString();
    }
```
:::