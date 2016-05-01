var Add = function(){
   this.sum = 0;
   this.count = 0;

   this.add = function(arr){
      var _this = this;
      _this.count = arr.length;
      arr.forEach(function(value, index, arr){
         console.log("Value = ", value);
         _this.sum = _this.sum + value;
   });
      return {'sum':this.sum, 'count':this.count};
   }
}

var a = new Add();
a.add([60, 4, 56, 78, 90, 45, 3232, 546]);