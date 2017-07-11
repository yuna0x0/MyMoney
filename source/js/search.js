/*!
 * MyMoney - search.js v.2.0
 * Copyright 2017 Edison Lee (MING-CHIEN LEE)
 */
var fdb = new ForerunnerDB();
var db = fdb.db("MyMoneyDB");
var collection = db.collection("MyMoneyCollection");
collection.load();
$("#submit").on("click", function () {
  var searchMode = $("input[name='mode']:checked").val();
  var from = "", to = "";
  if (searchMode == 'thisMonth') {
    var date = new Date();
    var year = date.getUTCFullYear();
    var month = date.getUTCMonth() + 1; // gteMonth 的結果會是實際月份-1
    if (month <= 9) {
      month = "0" + month; // 必須讓月份以雙位數顯示，否則無法比較 ( Ex. 2016-10-1 會小於 2016-6-1 )
    }
    from = year + "-" + month + "-" + "01";
    to = year + "-" + month + "-" + "31";
  } else if (searchMode == 'period') {
    from = $("#from").val();
    to = $("#to").val();
  }
  var category = {
    "食物": 0,
    "衣服": 0,
    "交通": 0,
    "娛樂": 0
  };
  var total = 0;
  var expenses = collection.find(
    {
      date: {
        $gte: from,
        $lte: to
      }
    }, {
      $orderBy: { date: 1 }
    }
  );
  $("tbody").html("");
  if (expenses.length === 0) {
    $("tbody").append("<tr><td colspan='3' style='text-align:center'>查無資料</td></tr>");
  } else {
    for (var i = 0; i < expenses.length; i++) {
      $("#expenses tbody").append("<tr><td>" + expenses[i].date + "</td><td>" + expenses[i].name + "</td><td>" + expenses[i].price + "</td></tr>");
      category[expenses[i].category] += expenses[i].price / 1;
      total += expenses[i].price / 1;
    }
    for (key in category) {
      var price = category[key];
      $("#category tbody").append("<tr><td>" + key + "</td><td>" + price + "</td><td>" + Math.round(price / total * 100) + "%" + "</td></tr>");
    }
    $("#category tbody").append("<tr><td colspan='3'>總計: " + total + "</td></tr>");
  }
});