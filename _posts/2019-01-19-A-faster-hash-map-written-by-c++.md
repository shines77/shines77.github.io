---
title: 这可能是世界上最快的哈希表——C++高性能HashMap实现
categories: ['c++']
tags: C++, C#, Java, HashMap, HashTable, 哈希表
key: page-fast-hash-map
---

## 1. 简介

  11111

## 2. 常用查找算法

查找的定义：

根据一个给定的某个值（一般称为 `key`），在被查找的数据表中搜寻是否存在这个 `key` 值，并返回与该 `key` 值对应的 `value` 值，或者只返回一个存在或不存在的结果（`a result of whether the key exists`）。

1. 键值对

一般情况下，查找表都是以 `key-value pair`（键值对）的形式出现的。例如：

```csharp
Map<string, int> map;
map.insert("张三", 22);
map.insert("李四", 25);
map.insert("赵五", 27);
int age = map.find("李四");   // 我们可以查到 李四 的年龄是25岁
```

其中 `key` 的值可以是数字（`Integer`）、字符（`Char`）、字符串（`String`）、指针（`Pointer`）或者任意数据类型，而 `Value` 值是一条记录，也同样可以是任意数据类型。

2. 一维表

但是某些时候，查找表也可以以一维表的形式出现（即不需要存储 `value` 值），例如：

在任意 `10` 个数字中，我们想知道里面有没有 `77` 这个数？

```csharp
Array<int> table = [3, 18, 33, 38, 50, 21, 2, 82, 99, 1];
bool result = table.isExists(77);   // 我们得到的结果是: 不存在
```



一般来说，查找表可以以下列的形式出现，包括 `Array`[数组]，`Vector`[向量表]，`Table`[表]，`List`[列表]，`Set`[集合]，`Map`[图]，`Dictionary`[字典]，`HashTable`[哈希表] 等等。

按被查找的数据表的特性分，可分为：

* 静态表查找
* 动态表查找

按被查找的数据表的数据排列状态分，可分为：

* 无序表查找
* 有序表查找

按查找的算法分类，可分为：

* 顺序查找
* 分块查找
* 树表查找
* 哈希查找


## X. 参考文章

1. [[Data Structure & Algorithm] 七大查找算法](http://www.cnblogs.com/maybe2030/p/4715035.html) 摘自 [`Poll的笔记`](http://www.cnblogs.com/maybe2030)

    [http://www.cnblogs.com/maybe2030/p/4715035.html](http://www.cnblogs.com/maybe2030/p/4715035.html)

2. [111](222)

    [111](222)
