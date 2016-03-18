$(document).ready(function () {
    manageright();
    $(document).on('click', '.r-diolog-box .remove-box', function () {
        var remove_div = $(this).parent().parent().parent().parent();
        if (remove_div.hasClass("r-diolog-box")) {
            remove_div.remove();
            manageright();
        }
    });

    $(document).on('click', '.google-diolog-box', function (event) {
        event.preventDefault();
        var link = $(this).attr("href");
        var this_element = $(this);
        this_element.text("Submiting.....");
        this_element.attr("disabled", true);
        $.ajax({
            url: link,
        }).done(function (data) {
            $(".diolog-box-area").append(data);
            manageright();
            this_element.text("Submit");
            this_element.attr("disabled", false);
        });
    });
});

(function ($) {
    var $window = $(window);

    function resize() {
        if ($window.width() < 514) {
            return $(".google-diolog-box").removeClass('google-diolog-box').addClass('ajaxviewmodel');
        }
        $(".ajaxviewmodel").removeClass('ajaxviewmodel').addClass('google-diolog-box')
    }
    $window
            .resize(resize)
            .trigger('resize');
})(jQuery);

function manageright() {
    var left = 1;
    var bottom = 50;
    var total_block = 0;
    $(".diolog-box-area .r-diolog-box").each(function (index) {
        var children_div = $(this).children();
        if (total_block >= 1) {
            children_div.addClass("collapsed-box");
            $(this).find(".minimise-box i").removeClass("fa fa-minus").addClass("fa fa-plus");
        }
        if (total_block >= 2) {
            $(this).attr('style', 'bottom:' + bottom + 'px;right:' + left + "%");
            bottom = bottom + 50;
        } else {
            $(this).attr('style', 'right:' + left + "%");
        }
        if (total_block < 1) {
            left = left + 49
        }

        total_block = total_block + 1;
    });
}