var CompCalendar=function(){var e=$(".calendar-events"),t=function(){e.find("li").each(function(){var e={title:$.trim($(this).text()),color:$(this).css("background-color")};$(this).data("eventObject",e),$(this).draggable({zIndex:999,revert:!0,revertDuration:0})})};return{init:function(){t();var a=$("#add-event"),i="";$("#add-event-btn").on("click",function(){return i=a.prop("value"),i&&(e.append('<li class="animation-slideDown">'+$("<div />").text(i).html()+"</li>"),a.prop("value",""),t()),!1});var n=new Date,o=n.getDate(),r=n.getMonth(),l=n.getFullYear();$("#calendar").fullCalendar({header:{left:"prev,next",center:"title",right:"month,agendaWeek,agendaDay"},firstDay:1,editable:!0,droppable:!0,drop:function(e,t){var a=$(this).data("eventObject"),i=$.extend({},a);i.start=e,i.allDay=t,$("#calendar").fullCalendar("renderEvent",i,!0),$(this).remove()},events:[{title:"Gaming Day",start:new Date(l,r,1),color:"#9b59b6"},{title:"Live Conference",start:new Date(l,r,3)},{title:"Top Secret Project",start:new Date(l,r,4),end:new Date(l,r,8),color:"#1abc9c"},{id:999,title:"Gym (repeated)",start:new Date(l,r,o-3,15,0),allDay:!1},{id:999,title:"Gym (repeated)",start:new Date(l,r,o+3,15,0),allDay:!1},{title:"Job Meeting",start:new Date(l,r,o,16,0),allDay:!1,color:"#f39c12"},{title:"Awesome Project",start:new Date(l,r,o,9,0),end:new Date(l,r,o,12,0),allDay:!1,color:"#d35400"},{title:"Book Reading",start:new Date(l,r,15),end:new Date(l,r,16),allDay:!0,color:"#3498db"},{title:"Party",start:new Date(l,r,o+8,21,0),end:new Date(l,r,o+8,23,30),allDay:!1},{title:"Follow me on Twitter",start:new Date(l,r,20),end:new Date(l,r,24),url:"http://twitter.com/pixelcave",color:"#e74c3c"}]})}}}();