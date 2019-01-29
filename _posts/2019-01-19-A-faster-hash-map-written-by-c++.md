---
title: C++高性能HashMap（二）—— 常用查找算法
categories: ['c++']
tags: ['C++', 'C#', 'Java', 'HashMap', 'HashTable', '哈希表']
key: page-fast-hash-map
---

# 常用查找算法

## 1. 简介

在计算机应用中，查找是非常常用的基本算法，例如编译程序中符号表的查找

## 2. 查找的定义

根据一个给定的值（一般称为 `Key`），在被查找的数据表中搜寻是否存在这个 `Key` 值，并返回与该 `Key` 值对应的 `Value` 值，或者只返回该 `Key` 值存在或不存在的结果（`a result of whether the key exists`）。

### 2.1. 键值对的形式

一般情况下，查找表都是以 `key-value pair`（键值对）的形式出现的。例如：

```cpp
Map<string, int> map;
map.insert("张三", 22);
map.insert("李四", 25);
map.insert("赵五", 27);

bool exists = map.contains("李四");
if (exists) {
    int age = map.find("李四");   // 我们可以查到，李四的年龄是25岁
}
```

其中 `Key` 的值可以是整型（`Integer`）、字符（`Char`）、字符串（`String`）、指针（`Pointer`）或者任意数据类型，而 `Value` 的值一般是一个 `Struct` 或者 `Class`，当然也同样可以是任意数据类型。

### 2.2. 一维表的形式

但是某些时候，查找表也可以一维表的形式出现（即不需要存储 `Value` 值），此时只需要返回 `Key` 值存在或不存在的结果即可。例如：

在给定的 `10` 个数字中，我们想知道里面是否存在 `77` 这个数？

```cpp
Array<int> table = [3, 18, 33, 38, 50, 21, 2, 82, 99, 1];
bool result = table.isExists(77);   // 我们得到的结果是: 不存在
```

结论：以上两种形式虽然具体实现不一样，但是思路是相似的，可以一并讨论。

## 3. 查找表的分类

一般来说，在各种编程语言里，`查找表` 可以下列的形式出现，包括且不局限于 `Array`（数组），`Vector`（向量表），`Table`（表），`List`（列表），`Set`（集合），`Map`（图），`Dictionary`（字典），`HashTable`（哈希表）等。

### 3.1. 按查找表的特性分

静态或者动态是针对查找表而言的，分为：

* `静态表查找`：在查找表中只做查找操作，而不改动表中数据元素，称此类查找表为静态查找表，例如：顺序查找、二分查找、分块查找等。静态表一般属于“`一维表的形式`”。

* `动态表查找`：反之，在查找表中做查找操作的同时，可以进行插入或者删除的操作，称此类表为动态查找表，例如：树表查找、哈希查找等。动态表一般属于“`键值对的形式`”。

### 3.2. 按查找表的数据分

可分为：

* `无序表查找`：被查找数列是有序的或无序的均可，跟数据的顺序无关。例如：顺序查找，哈希查找。

* `有序表查找`：被查找数列必须是有序的或者规则的，如果是无序的或无规则的，必须先转化为有序的或规则的，这是由查找算法的特点决定的。例如：`二分查找` 需要已知数列必须是有序的，`分块查找` 也需要分块内的数列是有序的，大部分的 `树表查找` 都需要被查找的数据是满足算法自身的分布规则的。

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

```cpp
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

```
ASL = (1 + 2 + 3 + … + n) / n = (n + 1) / 2;
```

ASL = `Average Search Length`

当查找不成功时，最多需要 `n + 1` 次比较。

所以，顺序查找的时间复杂度为 `O(n)`。

### 4.2. 二分查找



## X. 参考文章

1. [《[Data Structure & Algorithm] 七大查找算法》](http://www.cnblogs.com/maybe2030/p/4715035.html) 摘自 [`Poll的笔记`](http://www.cnblogs.com/maybe2030)

    [http://www.cnblogs.com/maybe2030/p/4715035.html](http://www.cnblogs.com/maybe2030/p/4715035.html)

2. [《常用查找算法》](http://codingxiaxw.cn/2017/01/14/66-leetcode-find/) 摘自 [`codingXiaxw's blog`](http://codingxiaxw.cn)

    [http://codingxiaxw.cn/2017/01/14/66-leetcode-find/](http://codingxiaxw.cn/2017/01/14/66-leetcode-find/)

3. [《数据结构之查找算法》](http://data.biancheng.net/view/53.html) 摘自 [`biancheng.net`](http://data.biancheng.net)

    [http://data.biancheng.net/view/53.html](http://data.biancheng.net/view/53.html)


