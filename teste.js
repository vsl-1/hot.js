if (typeof hot_parameters !== "function") {
    function hot_parameters() {
        if ('undefined' != typeof hotlink_btn_params_control_job_done) return;
        hotlink_btn_params_control_job_done = true;
        if (location.search.toString().indexOf('?') === -1) return;

        var getUrlParameter = function (parameterName) {
            var result = null, tmp = [];
            var items = location.search.substr(1).split("&");
            for (var index = 0; index < items.length; index++) {
                tmp = items[index].split("=");
                if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
            }
            return result;
        };

        var name = getUrlParameter('name') || getUrlParameter('Name');
        if (name) {
            // Preencher o campo de nome no formulário
            var nameField = document.querySelector('input[name="name"], input[name="Name"]');
            if (nameField) {
                nameField.value = name;
            }
        }

        // Adicione aqui qualquer outra manipulação necessária
    }
}

window.onload = function () {
    hot_parameters();
};
