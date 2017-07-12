/*!
 * MyMoney - add.js v.1.0
 * Copyright 2017 Edison Lee (MING-CHIEN LEE)
 */
var fdb = new ForerunnerDB();
var db = fdb.db("MyMoneyDB");
var collection = db.collection("MyMoneyCollection");
collection.load();
$("#submit").click(function () {
    $("#date-input").attr('class', 'field');
    $("#name-input").attr('class', 'field');
    $("#price-input").attr('class', 'field');
    $("#category-select").attr('class', 'ui selection dropdown');
    $("#saving").append('<div class="ui icon message"><i class="notched circle loading icon"></i><div class="content"><div class="header">Saving...</div><p>Please Wait</p></div></div>')
    var date = $("#date").val();
    var name = $("#name").val();
    var categoryselect = $("#category-select").dropdown('get value');
    var price = $("#price").val();
    var error = true
    if (error === true) {
        if (date === "") {
            $("#date-input").attr('class', 'field error');
            var dateerror = true
            $("#saving").empty();
        } else {
            var dateerror = false
        }
        if (name === "") {
            $("#name-input").attr('class', 'field error');
            var nameerror = true
            $("#saving").empty();
        } else {
            var nameerror = false
        }
        if (categoryselect === "") {
            $("#category-select").attr('class', 'ui selection dropdown error');
            var categoryselecterror = true
            $("#saving").empty();
        } else {
            var categoryselecterror = false
        }
        if (price === "") {
            $("#price-input").attr('class', 'field error');
            var priceerror = true
            $("#saving").empty();
        } else {
            var priceerror = false
        }
        if ($.isNumeric(price) !== true) {
            $("#price-input").attr('class', 'field error');
            var pricenumerror = true
            $("#saving").empty();
        } else {
            var pricenumerror = false
        }
        if (dateerror === false) {
            if (nameerror === false) {
                if (categoryselecterror === false) {
                    if (priceerror === false) {
                        if (pricenumerror === false) {
                            error = false
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
        $('.message .close')
            .on('click', function () {
                $(this)
                    .closest('.message')
                    .transition('fade')
                    ;
            })
            ;
        $("#saving").empty();
    }
});