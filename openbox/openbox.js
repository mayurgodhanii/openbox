$(document).ready(function () {
    manageright();
    $(document).on('click', '.r-diolog-box .remove-box', function () {
        var remove_div = $(this).parent().parent().parent().parent();
        if (remove_div.hasClass("r-diolog-box")) {
            remove_div.remove();
            manageright();
        }
    });
});

function manageright() {
    var left = 1;
    var bottom = 50;
    var total_block = 0;
    $(".diolog-box-area .r-diolog-box").each(function (index) {
        var children_div = $(this).children();
        if (total_block >= 2) {
            children_div.addClass("collapsed-box");
            $(this).find(".minimise-box i").removeClass("fa fa-minus").addClass("fa fa-plus");
        }
        if (total_block >= 3) {
            $(this).attr('style', 'bottom:' + bottom + 'px;right:' + left + "%");
            bottom = bottom + 50;
        } else {
            $(this).attr('style', 'right:' + left + "%");
        }
        if (total_block < 2) {
            left = left + 33;
        }

        total_block = total_block + 1;
    });
}