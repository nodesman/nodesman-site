var ReadyInbox=function(){return{init:function(){var e="active";$("thead input:checkbox").click(function(){var t=$(this).prop("checked"),a=$(this).closest("table");t?$("tbody tr",a).addClass(e):$("tbody tr",a).removeClass(e),$("tbody input:checkbox",a).each(function(){$(this).prop("checked",t)})}),$("tbody input:checkbox").click(function(){var t=$(this).prop("checked"),a=$(this).closest("tr");t?a.addClass(e):a.removeClass(e)}),$(".msg-fav-btn").click(function(){$(this).toggleClass("text-muted text-warning"),$("i",this).toggleClass("fa-star-o fa-star")}),$(".msg-read-btn").click(function(){$(this).toggleClass("text-muted text-success")})}}}();