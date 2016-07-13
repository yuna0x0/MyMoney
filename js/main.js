$("#submit").click(function() {
    var name = $("#name").val();
    var category = $("#category").val();
    var price = $("#price").val();
    if (name === "") {
        alert("錯誤:名稱不可為空白!");
    }else if(price === ""){
        alert("錯誤:價錢不可為空白!");
    }else{
        console.log("OK!");
    }
});