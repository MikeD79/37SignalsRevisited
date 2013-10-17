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
        $("#hr, #Highrise .arrow").show();
        $("#general").hide();
        });

    $("#Highrise").on("mouseleave", function() {
    	$("#hr, #Highrise .arrow").hide();
        $("#general").show();
    	});
    $("#Campfire").on("mouseenter",function() {
        $("#cf, #Campfire .arrow").show();
        $("#general").hide();
        });

    $("#Campfire").on("mouseleave", function() {
    	$("#cf, #Campfire .arrow").hide();
        $("#general").show();
    	});
  });
