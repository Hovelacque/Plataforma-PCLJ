
(function () {
    if (!sweetAlert) {
        return;
    }

    var showMessage = function (type, message, title, callback) {

        let options = {
            icon: type,
            html: message,
            title: title,
            confirmButtonColor: '#1351b4'
        };

        if (type == 'confirm')
            options = {
                title: title,
                text: message,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#1351b4',
            }


        return Swal.fire(options).then((result) => {
            callback && callback(result);
        });
    };

    pclj.message.info = function (message, title) {
        return showMessage('info', message, title, null);
    };

    pclj.message.success = function (message, title) {
        return showMessage('success', message, title, null);
    };

    pclj.message.warn = function (message, title) {
        return showMessage('warn', message, title, null);
    };

    pclj.message.error = function (message, title) {
        return showMessage('error', message, title, null);
    };

    pclj.message.confirm = function (message, title, callback) {
        const confirmFunc = (result) => {
            let isCancelled = result.dismiss === Swal.DismissReason.cancel;

            return callback && callback(result.isConfirmed, isCancelled);
        }

        return showMessage('confirm', message, title, confirmFunc);
    };
})();