function Calculator(){
	if(!(this instanceof Calculator)){
		return new Calculator();
	}
	this.expression = '';//現在の計算式を表すプロパティ

	this.append = function(ch){//末尾に追加
		this.expression += ch;
	}
	
	this.clearEntry = function(){//一文字削除
		this.expression = this.expression.substring(0,this.expression.length - 1);
	}
	
	this.clear = function(){//空文字列化
		this.expression = '';
	}
	
	this.getExpression = function(){//文字列取得
				
		return this.expression;
	}
	
	this.calculate = function(){//計算
		this.expression = this.expression.replace('×','*');
		this.expression = this.expression.replace('÷','/');
		this.expression = eval(this.expression);
	}
}