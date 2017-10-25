/*!
 *    MyMoney - 10-expense.js v.1.0
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