// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require chosen-jquery
//= require jquery.turbolinks
//= require turbolinks
//= require bootstrap/dropdown
//= require_tree .
//= require toastr
//= require jquery.timeago
// $(document).ready(function(){
//   $('#confirm_form').on('submit', function(event){
// 	  event.preventDefault();

//     $.ajax({
//        // url: "/questions/<%=@question.id%>/answers",
//        url: $('#confirm_form').attr('action'),
//        method: "POST",
//        dataType: "JSON",
//        data: $(this).serialize(),
//        success: function(response){ 
//        	 $('#confirm_form').val("");
//        }
       	
//     });
       
//   });
// });

function myResetForm() {
    document.getElementById("mySearchForm").reset();
}
