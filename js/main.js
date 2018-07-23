/**
 * MyMoney - main.js
 * Copyright (c) 2018 MING-CHIEN LEE
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fdb = new ForerunnerDB();
var db = fdb.db("MyMoneyDB");
var collection = db.collection("MyMoneyCollection");
collection.load();
if (mymoneyLanguage == "en") {
    $.getJSON("package.json", (packageJSON) => {
        var mymoneyVersion = packageJSON.version;
        $("#mymoneyVersion").text(mymoneyVersion);
    });
} else {
    $.getJSON("../package.json", (packageJSON) => {
        var mymoneyVersion = packageJSON.version;
        $("#mymoneyVersion").text(mymoneyVersion);
    });
}

var nowPage = "home.html";
var callCheck = () => {
    $(".ui.dropdown").dropdown();
    if (nowPage == "add.html") {
        $("#submit").click(function () {
            $("#date-input").attr("class", "field");
            $("#name-input").attr("class", "field");
            $("#price-input").attr("class", "field");
            $("#category-select").attr("class", "ui selection dropdown");
            $("#saving").append('<div class="ui icon message"><i class="notched circle loading icon"></i><div class="content"><div class="header">Saving...</div><p>Please Wait</p></div></div>');
            var date = $("#date").val();
            var name = $("#name").val();
            var categoryselect = $("#category-select").dropdown("get value");
            var price = $("#price").val();
            var error = true;
            if (error === true) {
                if (date === "") {
                    $("#date-input").attr("class", "field error");
                    var dateerror = true;
                    $("#saving").empty();
                } else {
                    var dateerror = false;
                }
                if (name === "") {
                    $("#name-input").attr("class", "field error");
                    var nameerror = true;
                    $("#saving").empty();
                } else {
                    var nameerror = false;
                }
                if (categoryselect === "") {
                    $("#category-select").attr("class", "ui selection dropdown error");
                    var categoryselecterror = true;
                    $("#saving").empty();
                } else {
                    var categoryselecterror = false;
                }
                if (price === "") {
                    $("#price-input").attr("class", "field error");
                    var priceerror = true;
                    $("#saving").empty();
                } else {
                    var priceerror = false;
                }
                if ($.isNumeric(price) !== true) {
                    $("#price-input").attr("class", "field error");
                    var pricenumerror = true;
                    $("#saving").empty();
                } else {
                    var pricenumerror = false;
                }
                if (dateerror === false) {
                    if (nameerror === false) {
                        if (categoryselecterror === false) {
                            if (priceerror === false) {
                                if (pricenumerror === false) {
                                    error = false;
                                }
                            }
                        }
                    }
                }
            }
            if (error === false) {
                collection.insert({
                    date: date,
                    name: name,
                    category: categoryselect,
                    price: price
                });
                collection.save();
                $("#page-header").append('<div class="ui success message"><i class="close icon"></i><div class="header">Record Success!</div><p>Expense saved to the database</p></div>');
                $(".message .close").on("click", function () {
                    $(this).closest(".message").transition("fade");
                });
                $("#saving").empty();
            }
        });
    }


    if (nowPage == "10-expense.html") {
        collection.load(function () {
            var expenses = collection.find(
                {},
                {
                    $orderBy: { timestamp: -1 },
                    $limit: 10
                }
            );
            for (var i = 0; i < expenses.length; i++) {
                $("tbody").append("<tr><td>" + expenses[i].date + "</td><td>" + expenses[i].name + "</td><td>" + expenses[i].price + "</td></tr>");
            }
        });
    }

    if (nowPage == "search.html") {
        $("#submit").on("click", function () {
            var searchMode = $("input[name='mode']:checked").val();
            var from = "", to = "";
            if (searchMode == "thisMonth") {
                var date = new Date();
                var year = date.getUTCFullYear();
                var month = date.getUTCMonth() + 1;
                if (month <= 9) {
                    month = "0" + month;
                }
                from = year + "-" + month + "-" + "01";
                to = year + "-" + month + "-" + "31";
            } else if (searchMode == "period") {
                from = $("#from").val();
                to = $("#to").val();
            }
            var category = {
                "Food": 0,
                "Clothing": 0,
                "Transportation": 0,
                "Entertainment": 0
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
                $("tbody").append("<tr><td colspan='3' style='text-align:center'>No Data</td></tr>");
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
                $("#category tbody").append("<tr><td colspan='3'>Total: " + total + "</td></tr>");
            }
        });
    }
}
var callPage = (pageRef) => {
    $.ajax({
        url: pageRef,
        type: "GET",
        dataType: "html",
        success: (response) => {
            $("#" + nowPage.slice(0, -5)).attr('class', 'nav-item');
            nowPage = pageRef;
            $('#mainContainer').html(response);
            $("#" + pageRef.slice(0, -5)).attr('class', 'nav-item active');
            callCheck();
        }
    });
}

callPage("home.html");