# 重写一下js内置的 Array 方法

### Reduce:
``` javascript
Array.prototype.reduce = function(callback, initialValue) {
  var len = this.length;
  var initialIndex = initialValue === undefined ? 1 : 0;
  var prev = initialValue === undefined ? this[0] : initialValue;
  for (var i = initialIndex; i < len; i++) {
    prev = callback(prev, this[i], i);
  }
  return prev;
}
```

### Map:
``` javascript
Array.prototype.map = function(callback) {
  var len = this.length;
  var newArray = [];
  for (var i = 0; i < len; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
}
```

### ForEach:
``` javascript
Array.prototype.forEach = function(callback) {
  var len = this.length;
  for (var i = 0; i < len; i++) {
    callback(this[i], i, this);
  }
}
```

### Filter:
``` javascript
Array.prototype.filter = function(callback) {
  var len = this.length;
  var newArray = [];
  for (var i = 0; i < len; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i]);
    }
  }
  return newArray;
}
```

### Example:
``` javascript
var a = new Array([1], [2], [3], [4]);
a.reduce(function(a, b) {
  return a.concat(b);
}).map(function(e) {
  return e + 1;
}).filter(function(e) {
  return e % 2 === 0;
}).forEach(function(e) {
  console.log(e);
});
```

### Console:
```
> 2
> 4
```
