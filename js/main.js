var fdb = new ForerunnerDB();
var db = fdb.db("MyAppDB");
var collection = db.collection("MyAppCollection");
collection.load();
$("#submit").click(function() {
    var date = $("#date").val();
    var name = $("#name").val();
    var category = $("#category").val();
    var price = $("#price").val();
    if(date === ""){
        alert("錯誤:日期不可為空白!");
    }else if (name === "") {
        alert("錯誤:名稱不可為空白!");
    }else if(price === ""){
        alert("錯誤:價錢不可為空白!");
    }else if($.isNumeric(price) !== true ){
        alert("錯誤:價錢只可為數字!");
    }else{
        collection.insert({
            date: date,
            name: name,
            category: category,
            price: price
        });
        collection.save();
    }
});