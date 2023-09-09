"use strict";

(function () {
    if (!FreezeUI || !UnFreezeUI) {
        return;
    }

    pclj.ui.setBusy = function (element) {
        if (element)
            FreezeUI({ selector: element, text: 'Carregando...' })
        FreezeUI({ text: 'Carregando...' })
    };

    pclj.ui.clearBusy = function (element) {
        UnFreezeUI()
    };
})();