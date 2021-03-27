(function($){
   $.fn.main = function() {
      alert("hi");
   };
   $.fn.adjust=function(option){
/* Установим значения опций по умолчанию. Они будут использованы если пользователь при вызове плагина не передаст значений. */
      var setting={size:"1.4em",color:"red"};
      return this.each(function(){
// Если пользователь передал опции соединить их с опциями по умолчанию 
         if (option){ $.extend(setting,option);}
         $(this).css("fontSize",setting.size);
         $(this).css("color",setting.color);
      });
   }
   $.fn.randomise=function(option){
      return this.each(function(){
         //if (option){ $.extend(setting,option);}
		 var min=1; 
		 var max=7;
		 var random =Math.floor(Math.random() * (+max - +min)) + +min;
         $(this).val(option*random);
      });
   }
   $.fn.clearelement=function(){
      return this.each(function(){
		 var random ="0";
         $(this).val(random);
      });
   }
})(jQuery);