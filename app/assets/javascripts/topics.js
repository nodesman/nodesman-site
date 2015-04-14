
function initializeTopicsPage() {


    var $listHolder = $("ul.topics"),
        $right = $(".right"),
        DEFAULT_CATEGORY = 0,
        $left = $(".left"),
        $back = $(".back"),
        xhr = null,
        ListStack = [];

    function generateMenu(list, parent_category) {

        if (undefined === parent_category) {
            parent_category = DEFAULT_CATEGORY;
        }

        function hasChild(current) {
            return undefined !== current.children && current.children.length > 0;
        }

        $listHolder.empty();

        for (var iter = 0; iter < list.length; iter++) {

            var current = list[iter];

            var newItem = $('<li class="top-level"><span><a class="name"></a><p class="description"></p></span></li>');
            newItem.find(".name").text(current.name);
            newItem.data("cat_id", current.id);

            if (current.description.length != 0) {
                newItem.find(".description").text(current.description);
            }
            else {
                $(newItem).find(".description").remove();
            }

            $listHolder.append(newItem);

            if (hasChild(current)) {
                var newUl = $('<ul class="second-level"></ul>');
                $listHolder.append(newUl);
                loopEnd = current.children.length > 3 ? 3 : current.children.length;
                for (var iter = 0; iter < loopEnd; iter++) {
                    var currentSubcategory = $('<li></li>');
                    currentSubcategory.text(current.children[iter].name);
                    currentSubcategory.data("cat_id", current.children[iter].id);
                    newUl.append(currentSubcategory);
                }

                if (current.children.length > 3) {
                    newUl.append($('<li class="more">More...</li>'));
                }
            }
        }


        $left.data("parent_cat_id", parent_category);

        $(".left ul li").hoverIntent(categoryHoverEventHandler);
    }

    function renderPostList(data) {

        var info = {
            postList: data,
            category: "General"
        };

        var template = $("#post_item").html();
        Mustache.parse(template);
        var output = Mustache.render(template, info);
        $right.html(output);
        $right.trigger("load-end")
    }

    function categoryHoverEventHandler(event) {

        var $target = $(this);
        if ($target.hasClass("more") || $target.hasClass("current")) {
            return;
        }

        $(".left ul li").removeClass("current");

        $target.addClass("current");
        var id = $target.data("cat_id");
        if (undefined !== xhr && null !== xhr) {
            xhr.abort();
        }

        xhr = $.get("/catlist", {

            cat_id: id

        }, renderPostList, "json");
        $right.trigger("load-start");
    }


    $left.on("click", ".back", function () {
        if (ListStack.length === 1) {
            return;
        }

        ListStack.pop();

        if (ListStack.length === 1) {
            $(".back").hide();
        }
        generateMenu(ListStack[ListStack.length - 1]);
    });
    function findCategory(list, cat_id) {

        for (var iter = 0; iter < list.length; iter++) {

            var current = list[iter];
            if (current.id === cat_id) {
                return current;

            }
            if (current.children !== undefined && current.children.length > 0) {
                var result = findCategory(current.children, cat_id);
                if (false !== result) {
                    return result;
                }
            }
        }

        return false;
    }

    $right.on("load-start", function () {
        $(this).addClass("loading");
    });

    $right.on("load-end", function () {
        $(this).removeClass("loading");
    });
    $left.delegate(".more", "click", function (event) {

        var moreElement = event.target,
            correspondingLi = $(moreElement).parent().prev(),
            categoryId = $(correspondingLi).data("cat_id");

        var element = findCategory(cat_hierarchy.catList, categoryId);

        ListStack.push(element.children);
        $back.show();
        generateMenu(element.children, categoryId);
    });

    if (typeof cat_hierarchy === "object") {
        generateMenu(cat_hierarchy.catList);
        ListStack.push(cat_hierarchy.catList);
        categoryHoverEventHandler.call($(".left ul > li:nth-of-type(1)").get(0));
    }

    var $categoryElement = $(".left ul li");
}

$(document).ready(initializeTopicsPage);

