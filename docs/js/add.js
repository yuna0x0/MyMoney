/*!
 *    MyMoney - add.js v.1.0
 *    Copyright (C) 2017 MING-CHIEN LEE
 * 
 *    This program is free software: you can redistribute it and/or modify
 *    it under the terms of the GNU Affero General Public License as published
 *    by the Free Software Foundation, either version 3 of the License, or
 *    (at your option) any later version.
 * 
 *    This program is distributed in the hope that it will be useful,
 *    but WITHOUT ANY WARRANTY; without even the implied warranty of
 *    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *    GNU Affero General Public License for more details.
 * 
 *    You should have received a copy of the GNU Affero General Public License
 *    along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * 
 *    Copyright Contact Information
 *    MING-CHIEN LEE <edisonlee@edisonlee55.com> (https://www.edisonlee55.com/#contact)
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