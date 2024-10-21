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
### 1.1工厂模式的类型
> - 简单工厂模式（Simple Factory Pattern）
> - 工厂方法模式（Factory Method Pattern）
> - 抽象工厂模式（Abstract Factory Pattern）

| 优点                                                   | 缺点                                                         |
| ------------------------------------------------------ | ------------------------------------------------------------ |
| 调用者只需要知道对象的名称即可创建对象。               | 每次增加一个产品时，都需要增加一个具体类和对应的工厂，使系统中类的数量成倍增加，增加了系统的复杂度和具体类的依赖。 |
| 扩展性高，如果需要增加新产品，只需扩展一个工厂类即可。 |                                                              |
| 屏蔽了产品的具体实现，调用者只关心产品的接口。         |                                                              |

#### 1.2实现(简单工厂模式)

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

  

## 2. 抽象工厂模式（Abstract Factory Pattern）

~~~text
抽象工厂模式（Abstract Factory Pattern）是围绕一个超级工厂创建其他工厂。该超级工厂又称为其他工厂的工厂。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。


在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。

抽象工厂模式提供了一种创建一系列相关或相互依赖对象的接口，而无需指定具体实现类。通过使用抽象工厂模式，可以将客户端与具体产品的创建过程解耦，使得客户端可以通过工厂接口来创建一族产品。
~~~

| 优点                         | 缺点                                                         |
| ---------------------------- | ------------------------------------------------------------ |
| 确保统一产品族的对象一起工作 | 扩展产品族非常困难。增加一个新的产品族需要修改抽象工厂和所有具体工厂的代码。（增加产品族相对容易，增加一个新的产品的等级结构相对困难） |

 ### 2.1结构

* 抽象工厂（Abstract Factory）：声明了一组用于创建产品对象的方法，每个方法对应一种产品类型。抽象工厂可以是接口或抽象类。
* 具体工厂（Concrete Factory）：实现了抽象工厂接口，负责创建具体产品对象的实例。
* 抽象产品（Abstract Product）：定义了一组产品对象的共同接口或抽象类，描述了产品对象的公共方法。
* 具体产品（Concrete Product）：实现了抽象产品接口，定义了具体产品的特定行为和属性。

### 2.2实现

![抽象工厂模式](http://8.137.17.19:9898/getImage?name=AbstractFactory.jpg)

* 为形状创建一个接口 `Shape.java`

  ~~~ java
  public interface Shape {
      void draw();
  }
  ~~~

* 创建`Shape.java`的 实体类 `Rectangle.java` ；`Square.java`；`Circle.java`

:::

~~~ java
/**
 * 长方形实体类
 */
public class Rectangle implements Shape{
    @Override
    public void draw() {
        System.out.println("制作长方形");
    }
}

~~~

~~~java
/**
 * 平方形实体类
 */
public class Square implements Shape{

    @Override
    public void draw() {
        System.out.println("创建方形");
    }
}
~~~

~~~java
/**
 * 圆形实体类
 */
public class Circle implements Shape{
    @Override
    public void draw() {
        System.out.println("创建圆形");
    }
}
~~~

:::

* 为颜色创建一个接口 `Color.java`

~~~java
/**
 * 颜色接口
 */
public interface Color {
    void fill();
}
~~~

创建`Color.java`的实体类 `Red.java` `Green.java` `Blue.java`

::: code-group

~~~java [Red.java]
/**
 * 红色实现类
 */
public class Red implements Color {
 
   @Override
   public void fill() {
      System.out.println("Inside Red::fill() method.");
   }
}
~~~

~~~java [Green.java]
/**
 * 绿色实现类
 */
public class Green implements Color {
 
   @Override
   public void fill() {
      System.out.println("Inside Green::fill() method.");
   }
}
~~~

~~~java [Blue.java]
/**
 * 蓝色实现类
 */
public class Blue implements Color {
 
   @Override
   public void fill() {
      System.out.println("填充蓝色");
   }
}
~~~

::: 

* 为 Color 和 Shape 对象创建抽象类来获取工厂。

~~~JAVA

/**
 * 抽象工厂
 */
public abstract  class AbstractFactory {
    public abstract Color getColor(String color);
    public abstract Shape getShape(String shape);
}
~~~

* 创建扩展了 AbstractFactory 的工厂类，基于给定的信息生成实体类的对象。`ShapeFactory.java` `ColorFactory.java`

::: code-group
~~~java [ShapeFactory.java]
/**
 * 形状工厂类
 */
public class ShapeFactory extends AbstractFactory {
    
   @Override
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
   
   @Override
   public Color getColor(String color) {
      return null;
   }
}
~~~

~~~java [ColorFactory.java]
/**
 * 颜色工厂类
 */
public class ColorFactory extends AbstractFactory {
    
   @Override
   public Shape getShape(String shapeType){
      return null;
   }
   
   @Override
   public Color getColor(String color) {
      if(color == null){
         return null;
      }        
      if(color.equalsIgnoreCase("RED")){
         return new Red();
      } else if(color.equalsIgnoreCase("GREEN")){
         return new Green();
      } else if(color.equalsIgnoreCase("BLUE")){
         return new Blue();
      }
      return null;
   }
}
~~~

::: 

* 创建一个工厂创造器/生成器类，通过传递形状或颜色信息来获取工厂。

~~~java
/**
 * 获取工厂
 */
public class FactoryProducer {
   public static AbstractFactory getFactory(String choice){
      if(choice.equalsIgnoreCase("SHAPE")){
         return new ShapeFactory();
      } else if(choice.equalsIgnoreCase("COLOR")){
         return new ColorFactory();
      }
      return null;
   }
}
~~~

## 3 单例模式（Singleton Pattern） :1st_place_medal: 

~~~text
单例模式（Singleton Pattern）是 Java 中最简单的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。

这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象。

单例模式是一种创建型设计模式，它确保一个类只有一个实例，并提供了一个全局访问点来访问该实例。
~~~

**注意：**

- 1、单例类只能有一个实例。
- 2、单例类必须自己创建自己的唯一实例。
- 3、单例类必须给所有其他对象提供这一实例。

| 优点                                                         | 缺点                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| 内存中只有一个实例，减少内存开销，尤其是频繁创建和销毁实例时 | 没有接口，不能继承。                                         |
| 避免资源的多重占用（如写文件操作）。                         | 与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心实例化方式。 |

### 3.1注意事项

- **线程安全**：`getInstance()` 方法中需要使用同步锁 `synchronized (Singleton.class)` 防止多线程同时进入造成实例被多次创建。
- **延迟初始化**：实例在第一次调用 `getInstance()` 方法时创建。
- **序列化和反序列化**：重写 `readResolve` 方法以确保反序列化时不会创建新的实例。
- **反射攻击**：在构造函数中添加防护代码，防止通过反射创建新实例。
- **类加载器问题**：注意复杂类加载环境可能导致的多个实例问题。

### 3.2实现

![抽象工厂模式](http://8.137.17.19:9898/getImage?name=singleton.jpg)

* 创建一个`Singleton.java`

~~~java
/**
 * 基础单例模式
 */
public class SingleObject {
 
   //创建 SingleObject 的一个对象
   private static SingleObject instance = new SingleObject();
 
   //让构造函数为 private，这样该类就不会被实例化
   private SingleObject(){}
 
   //获取唯一可用的对象
   public static SingleObject getInstance(){
      return instance;
   }
 
   public void showMessage(){
      System.out.println("Hello World!");
   }
}
~~~

#### 3.2.1单例模式的集中实现方式

##### (1) 懒汉式，线程不安全

* 是否lazy初始化：是
* 是否多线程安全： 否

~~~java
/**
 * 懒汉式
 * * lazy初始化：是
 * * 多线程安全：否
 */
public class Singleton {  
    private static Singleton instance;  
    private Singleton (){}  
  
    public static Singleton getInstance() {  
        if (instance == null) {  
            instance = new Singleton();  
        }  
        return instance;  
    }  
}
~~~

##### (2)懒汉式，线程安全

~~~text
这种方式具备很好的 lazy loading，能够在多线程中很好的工作，但是，效率很低，99% 情况下不需要同步。
~~~

| 优点                             | 缺点                                                   |
| -------------------------------- | ------------------------------------------------------ |
| 第一次调用才初始化，避免内存浪费 | 必须加锁 synchronized 才能保证单例，但加锁会影响效率。 |



~~~java
/**
 * 懒汉式。线程安全
 * 是否 Lazy 初始化：是
 *
 * 是否多线程安全：是
 */
public class SingletonSafe {
    private static SingletonSafe instance;
    private SingletonSafe (){}
    public static synchronized SingletonSafe getInstance() {
        if (instance == null) {
            instance = new SingletonSafe();
        }
        return instance;
    }
}
~~~

