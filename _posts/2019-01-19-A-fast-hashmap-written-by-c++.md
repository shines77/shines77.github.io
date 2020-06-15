---
title: "C++ HashMap(二)--常用查找算法"
categories: ['c++']
tags: ['C++', 'C#', 'Java', 'HashMap', 'HashTable', '哈希表']
key: page-cpp-fast-hashmap
---

# 常用查找算法

## 1. 概述

在计算机应用中，查找是非常常用的基本算法，例如：编译程序中符号表的查找。

## 2. 查找表的形式

根据一个给定的值（一般称为 `Key`），在被查找的数据表中搜寻是否存在这个 `Key` 值，并返回与该 `Key` 值对应的 `Value` 值，或者只返回该 `Key` 值存在或不存在的结果（`a result of whether the key exists`）。

### 2.1. key only 形式

有些时候，我们只关心查询的 `Key` 值存在或不存在，此时退化成一个 `集合（Set）` ，即只有 `Key` 值，而不需要 `Value` 值。

例如：在一组给定的数字中，是否包含 `77` 这个元素？

```csharp
Array<int> sets = [3, 18, 33, 38, 50, 21, 2, 82, 99, 1];
bool result = sets.isExists(77);   // 结果是: false，不存在
```

### 2.2. key-value 形式

一般情况下，查找表都是以 `key-value pair`（键值对）的形式出现的。例如：

```csharp
Map<string, int> map;
map.insert("张三", 22);
map.insert("李四", 25);
map.insert("赵五", 27);

bool exists = map.contains("李四");
if (exists) {
    int age = map.find("李四");   // 李四的年龄是25
}
```

`Key`、`Value` 的类型一般是字符串（`String`）或整型（`Integer`），也可以是字符（`Char`）、浮点数（`Float`）、指针（`Pointer`）、其他 `Pod` 数据类型、任意 `Struct` 或者 `Class`。

## 3. 查找表的分类

一般来说，在各种编程语言里，`查找表` 可以下列的形式出现，包括且不局限于 `Array`（静态数组），`Vector`（动态数组），`Table`（SQL的表），`List`（列表，链表），`Set`（集合），`Map`（图），`Tree`（查找树：红黑树，B-树，B+树），`Dictionary / HashTable`（字典 / 哈希表），`SkipList`（跳表）等。

### 3.1. 按查找表的特性分

* `静态表查找`：在查找表中只做查询操作，而不改动表中的数据元素，称之为静态查找表，例如：顺序查找、二分查找、分块查找等。静态表一般属于“`key only 形式`”。

* `动态表查找`：相反的，在查找表中做查询操作的同时，还可以方便的插入或者删除表中的元素，称之为动态查找表，例如：树表查找、哈希查找等。动态表一般属于“`key-value 形式`”。

### 3.2. 按查找表的数据分

* `无序表查找`：被查找的数据分布是无序的，或者是离散的，跟数据的顺序无关。例如：顺序查找，哈希查找。

* `有序表查找`：被查找的数据必须是有序的或者规则的，每次增/删元素的时候必须调整数据的顺序或分布。例如：`二分查找` 需要已知数列必须是有序的，`分块查找` 也需要分块内的数列是有序的，大部分的 `树表查找` 都需要被查找的数据是满足算法自身的分布规则的。

### 3.3. 按查找的算法分

可分为：

* `顺序查找`：

* `分块查找`：

* `树表查找`：

* `哈希查找`：

## 4. 查找算法

### 4.1. 顺序查找

顺序查找，顾名思义，就是从头到尾扫一遍，直到找到跟被查找的 `key` 值一样的元素为止。特点是对数据无特殊要求，有序和无序的都可以。

伪代码：

```csharp
class SequenceSearch {
    List<int> list = new List<int>();

    int find(int key) {
        for (int i = 0; i < list.length; i++) {
            if (list[i] == key)
                return i;
        }
        return -1;
    }
}
```

#### 4.1.1. 复杂度分析

查找成功时的平均查找长度为：（假设每个数据元素匹配 `key` 的概率相等）

```csharp
ASL = (1 + 2 + 3 + … + n) / n = (n + 1) / 2;
```

`ASL` = `Average Search Length`

当查找不成功时，最多需要 `n + 1` 次比较。

所以，顺序查找的时间复杂度为 `O(n)`。

### 4.2. 二分查找



## 5. 参考文章

1. [《`[Data Structure & Algorithm] 七大查找算法`》](http://www.cnblogs.com/maybe2030/p/4715035.html) 摘自 [`Poll的笔记`](http://www.cnblogs.com/maybe2030)

    [http://www.cnblogs.com/maybe2030/p/4715035.html](http://www.cnblogs.com/maybe2030/p/4715035.html)

2. [《`常用查找算法`》](http://codingxiaxw.cn/2017/01/14/66-leetcode-find/) 摘自 [`codingXiaxw's blog`](http://codingxiaxw.cn)

    [http://codingxiaxw.cn/2017/01/14/66-leetcode-find/](http://codingxiaxw.cn/2017/01/14/66-leetcode-find/)

3. [《`数据结构之查找算法`》](http://data.biancheng.net/view/53.html) 摘自 [`biancheng.net`](http://data.biancheng.net)

    [http://data.biancheng.net/view/53.html](http://data.biancheng.net/view/53.html)
