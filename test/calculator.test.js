test('コンストラクタテスト',function(){
	var c = new Calculator();
	ok(c instanceof Calculator,'new演算子をつけてコンストラクタを呼び出す検査');
	
	var c = Calculator();
	ok(c instanceof Calculator,'new演算子をつけないでコンストラクタを呼び出す検査');
})

test('getExpressionテスト',function(){
	var c = new Calculator();
	var result = c.getExpression();
	equal(result,'');
})

test('appendテスト',function(){
	var a = new Calculator();
	a.append('2');
	var result = a.getExpression();
	equal(result,'2');
})

test('clearテスト',function(){
	var a = new Calculator();
	a.append('432');
	a.clear();
	var result = a.getExpression();
	equal(result,'');
})

test('clearEntryテスト',function(){
	var a = new Calculator();
	a.append('2234');
	a.clearEntry();
	var result = a.getExpression();
	equal(result,'223');
})

test('calculateテスト',function(){
	var a = new Calculator();
	a.append('4*5');
	a.calculate();
	var result = a.getExpression();
	equal(result,20);
	
	var c = new Calculator();
	c.append('1×1');
	c.calculate();
	var result = c.getExpression();
	equal(result,1);
})

test('calculate2テスト',function(){
	var a = new Calculator();
	a.append('0.1+0.2');
	a.calculate();
	var result = a.getExpression();
	equal(result,0.3);
})