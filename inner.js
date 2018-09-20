const $ = window.top.$

$('#button', window.document).click(function () {
    $.ajax({
        url: '/data.json',
        success: function (data) {
            $('#data', window.document).text(JSON.stringify(data, null, 2))
        },
        xhr: function () {
            return new window.XMLHttpRequest()
        }
    })
})
