# vue3

## 目录
### watch监听 :art:

~~~text
接受三个参数
	*第一个参数：监听的数据源
		一个getter 函数，返回一个值
		一个 ref() 定义的响应式数据
		一个 reactive() 定义的响应式数据
		   以及由以上类型的值组成的数组
~~~



### 组件通信 :heavy_exclamation_mark:

> 方式1
>
> > props
>
> ~~~vue
> 
> 
> ~~~
>
> 方式2
>
> > 自定义事件
>
> ~~~vue
> 
> ~~~
>
> 方式3
>
> > mitt
> >
> > ~~~vue
> > 
> > ~~~
>
> 方式4
>
> >v-model
> >
> >~~~vue
> > 
> >~~~
> >
> >:heavy_exclamation_mark:补充v-model基本原理
> >
> >~~~vue
> >  <input type="text" :value="username" @input="username=$event?.target.value">
> >// 通过:value绑定input输入框的值 @input 修改value的值
> >
> >/*
> >自定义组件
> >**/
> >  <h-input :modelValue="username" @update:modelValue="username=$event"/>
> >~~~
> >
> >

## 琐碎

### 断言

> 断言方式
>
> >~~~ts
> >//as 方式
> >username=($event?.target as HTMLInputElement).value
> >//<>方式
> >username=(<HTMLInputElement>$event?.target).value
> >~~~

* $event

  > 对于原生事件，$evnet就是事件对象 ===>能.target
  >
  > 对于自定义事件，$event就是触发事件时，所传递的数据 ==> 不能.target
