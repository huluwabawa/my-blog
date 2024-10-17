# java设计模式





## 设计模式简介👋

设计模式（Design pattern）代表了最佳的实践，通常被有经验的面向对象的软件开发人员所采用。设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的。

设计模式是一套被`反复`使用的、多数人知晓的、经过分类编目的、`代码设计经验的总结`。使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。 毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使代码编制真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样。项目中合理地运用设计模式可以完美地解决很多问题，每种模式在现实中都有相应的原理来与之对应，每种模式都描述了一个在我们周围不断重复发生的问题，以及该问题的核心解决方案，这也是设计模式能被广泛应用的原因。

### 创建型模式

```text
这些设计模式提供了一种在创建对象的同时隐藏创建逻辑的方式，而不是使用 new 运算符直接实例化对象。这使得程序在判断针对某个给定实例需要创建哪些对象时更加灵活
```

> - [工厂模式（Factory Pattern)](#_1-工厂模式)
>
> -  抽象工厂模式（Abstract Factory Pattern）
> -  单例模式（Singleton Pattern）
> -  建造者模式（Builder Pattern）
> -  原型模式（Prototype Pattern）

### 结构型模式

```text
这些模式关注对象之间的组合和关系，旨在解决如何构建灵活且可复用的类和对象结构。
```

> - 适配器模式（Adapter Pattern）
> - 桥接模式（Bridge Pattern）
> - 过滤器模式（Filter、Criteria Pattern）
> - 组合模式（Composite Pattern）
> - 装饰器模式（Decorator Pattern）
> - 外观模式（Facade Pattern）
> - 享元模式（Flyweight Pattern）
> - 代理模式（Proxy Pattern）

### 行为型模式

~~~text
这些模式关注对象之间的通信和交互，旨在解决对象之间的责任分配和算法的封装。
~~~

>- 责任链模式（Chain of Responsibility Pattern）
>- 命令模式（Command Pattern）
>- 解释器模式（Interpreter Pattern）
>- 迭代器模式（Iterator Pattern）
>- 中介者模式（Mediator Pattern）
>- 备忘录模式（Memento Pattern）
>- 观察者模式（Observer Pattern）
>- 状态模式（State Pattern）
>- 空对象模式（Null Object Pattern）
>- 策略模式（Strategy Pattern）
>- 模板模式（Template Pattern）
>- 访问者模式（Visitor Pattern）

### J2EE模式

~~~text
这些设计模式特别关注表示层。这些模式是由 Sun Java Center 鉴定的。
~~~

> - MVC 模式（MVC Pattern）
> - 业务代表模式（Business Delegate Pattern）
> - 组合实体模式（Composite Entity Pattern）
> - 数据访问对象模式（Data Access Object Pattern）
> - 前端控制器模式（Front Controller Pattern）
> - 拦截过滤器模式（Intercepting Filter Pattern）
> - 服务定位器模式（Service Locator Pattern）
> - 传输对象模式（Transfer Object Pattern）

## 设计模式之间的关系 :hand:

![设计模式之间的关系](http://8.137.17.19:9898/getImage?name=java-24-design-pattern.png)

### 设计模式的六大原则

**1、开闭原则（Open Close Principle）**

开闭原则的意思是：**对扩展开放，对修改关闭**。在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插拔的效果。简言之，是为了使程序的扩展性好，易于维护和升级。想要达到这样的效果，我们需要使用接口和抽象类，后面的具体设计中我们会提到这点。

**2、里氏代换原则（Liskov Substitution Principle）**

里氏代换原则是面向对象设计的基本原则之一。 里氏代换原则中说，任何基类可以出现的地方，子类一定可以出现。LSP 是继承复用的基石，只有当派生类可以替换掉基类，且软件单位的功能不受到影响时，基类才能真正被复用，而派生类也能够在基类的基础上增加新的行为。里氏代换原则是对开闭原则的补充。实现开闭原则的关键步骤就是抽象化，而基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范。

**3、依赖倒转原则（Dependence Inversion Principle）**

这个原则是开闭原则的基础，具体内容：针对接口编程，依赖于抽象而不依赖于具体。

**4、接口隔离原则（Interface Segregation Principle）**

这个原则的意思是：使用多个隔离的接口，比使用单个接口要好。它还有另外一个意思是：降低类之间的耦合度。由此可见，其实设计模式就是从大型软件架构出发、便于升级和维护的软件设计思想，它强调降低依赖，降低耦合。

**5、迪米特法则，又称最少知道原则（Demeter Principle）**

最少知道原则是指：一个实体应当尽量少地与其他实体之间发生相互作用，使得系统功能模块相对独立。

**6、合成复用原则（Composite Reuse Principle）**

合成复用原则是指：尽量使用合成/聚合的方式，而不是使用继承。


## 1.工厂模式 🍪
~~~ text
工厂模式（Factory Pattern）是 Java 中最常用的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。
~~~
### 工厂模式的类型
> - 简单工厂模式（Simple Factory Pattern）
> - 工厂方法模式（Factory Method Pattern）
> - 抽象工厂模式（Abstract Factory Pattern）

| 优点                                                   | 缺点                                                         |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| 调用者只需要知道对象的名称即可创建对象。               | 每次增加一个产品时，都需要增加一个具体类和对应的工厂，使系统中类的数量成倍增加，增加了系统的复杂度和具体类的依赖。 |
| 扩展性高，如果需要增加新产品，只需扩展一个工厂类即可。 |                                                              |
| 屏蔽了产品的具体实现，调用者只关心产品的接口。         |                                                              |

#### 实现(简单工厂模式)

![工厂模式](http://8.137.17.19:9898/getImage?name=factory.jpg)

* 创建一个接口定义方法`Shape.java`

~~~ java
public interface Shape {
    void draw();
}

~~~

* 创建实现接口的实体类`Rectangle.java;Circle.java;Square.java`

::: code-group

``` java [Rectangle.java]
public class Rectangle implements Shape{
    @Override
    public void draw() {
        System.out.println("长方形::draw() method.");
    }
}
```

```java[Circle.java]
public class Circle implements Shape{
    @Override
    public void draw() {
        System.out.println("圆形draw方法");
    }
}
```

```java[Square.java]
public class Square implements Shape{
    @Override
    public void draw() {
        System.out.println("方形draw方法");
    }
}
```

:::

* 创建一个工厂`ShapeFactory.java`

  ~~~java
  public class ShapeFactory {
  
      // 使用getShape方法获取形状类型的对象
      public Shape getShape(String shapeType){
          if(shapeType == null){
              return null;
          }
          if(shapeType.equalsIgnoreCase("CIRCLE")){
              return new Circle();
          } else if(shapeType.equalsIgnoreCase("RECTANGLE")){
              return new Rectangle();
          } else if(shapeType.equalsIgnoreCase("SQUARE")){
              return new Square();
          }
          return null;
      }
  }
  ~~~

* 使用工厂

  ~~~ java
     ShapeFactory shapeFactory = new ShapeFactory();
  
          //获取 Circle 的对象，并调用它的 draw 方法
          Shape shape1 = shapeFactory.getShape("CIRCLE");
  
          //调用 Circle 的 draw 方法
          shape1.draw();
  
          //获取 Rectangle 的对象，并调用它的 draw 方法
          Shape shape2 = shapeFactory.getShape("RECTANGLE");
  
          //调用 Rectangle 的 draw 方法
          shape2.draw();
  
          //获取 Square 的对象，并调用它的 draw 方法
          Shape shape3 = shapeFactory.getShape("SQUARE");
  
          //调用 Square 的 draw 方法
          shape3.draw();
  // 运行结果
  圆形draw方法
  长方形::draw() method.
  方形draw方法
  ~~~

* 工厂方法的拓展`ObjectFactory`

  ~~~ java
  /**
   * 拓展针对多个接口实现一个公共的工厂类
   */
  public class ObjectFactory {
      public <T>  T getObject(Class<T> clazz){
          if(clazz == null){
              return null;
          }
          T t=null;
          try {
              t= (T) Class.forName(clazz.getName()).newInstance();
          } catch (InstantiationException e) {
              throw new RuntimeException(e);
          } catch (IllegalAccessException e) {
              throw new RuntimeException(e);
          } catch (ClassNotFoundException e) {
              throw new RuntimeException(e);
          }
          return t;
      }
  }
  ~~~

  

