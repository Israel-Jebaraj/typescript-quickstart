var customerData = (function () {
    function customerData() {
    }
    customerData.prototype.callAPI = function () {
        $.ajax({
            url: 'https://northwind.netcore.io/customers/ALFKI',
            type: 'GET',
            contentType: 'application/json',
            dataType: 'json',
            success: function (data, status) {
                alert(data);
            },
        });
    };
    return customerData;
}());
export { customerData };

//# sourceMappingURL=customerData.js.map
