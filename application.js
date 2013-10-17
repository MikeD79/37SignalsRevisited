$(document).ready(function(){
    $("#bc,#hr,#cf,.arrow").hide();
    
    $("#Basecamp").on("mouseenter",function() {
        $("#bc, #Basecamp .arrow").show();
        $("#general").hide();
        });

    $("#Basecamp").on("mouseleave", function() {
    	$("#bc, #Basecamp .arrow").hide();
        $("#general").show();
    	});
    $("#Highrise").on("mouseenter",function() {
        $("#bc, #Highrise .arrow").show();
        $("#general").hide();
        });

    $("#Highrise").on("mouseleave", function() {
    	$("#bc, #Highrise .arrow").hide();
        $("#general").show();
    	});
    $("#Campfire").on("mouseenter",function() {
        $("#bc, #Campfire .arrow").show();
        $("#general").hide();
        });

    $("#Campfire").on("mouseleave", function() {
    	$("#bc, #Campfire .arrow").hide();
        $("#general").show();
    	});
  });
