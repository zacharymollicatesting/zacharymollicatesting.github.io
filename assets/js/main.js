function showHideNav(){$("nav").hasClass("expanded")?hideNav():showNav()}function showNav(){$("nav").removeClass("invisible").addClass("expanded"),$("#container").addClass("blurred"),window.setTimeout(function(){$("body").addClass("no_scroll")},10),$("#navigation a").attr("tabindex","")}function hideNav(){$("#container").removeClass("blurred"),window.setTimeout(function(){$("body").removeClass()},10),$("nav").removeClass("expanded"),$("#navigation a").attr("tabindex","-1"),$(".icon").blur()}$(".toggle-icon").on("click touchstart",function(){$("#nav-container").toggleClass("pushed")}),$("body").keydown(function(e){27!==e.keyCode&&77!==e.keyCode||$("#nav-container").toggleClass("pushed")}),$(".toggle-icon").on("click touchstart",function(e){showHideNav(),e.preventDefault()}),$("nav").on("click touchstart",function(e){e.stopPropagation()}),$("body").keydown(function(e){$("nav .icon").is(":focus")&&(13!==e.keyCode&&32!==e.keyCode||(showHideNav(),e.preventDefault())),27!==e.keyCode&&77!==e.keyCode||(showHideNav(),e.preventDefault())});var $boxs=$("#parent > .box"),$btns=$(".btn").on("click",function(){var e=$btns.removeClass("active").filter(this).addClass("active").data("filter");$boxs.hide().filter("."+e).fadeIn(450)});$btns=$(".btn").click(function(){if("all"==this.id)$("#parent > div").fadeIn(450);else{var e=$("."+this.id).fadeIn(450);$("#parent > div").not(e).hide()}$btns.removeClass("active"),$(this).addClass("active")});$(".question").click(function(){$(this).hasClass("hello")?($(".question").removeClass("hello"),$answer=$(this).next(),$answer.slideUp(200)):($(".question").removeClass("hello"),$(this).addClass("hello")),$answer=$(this).next(),$answer.is(":visible")?$(".question").removeClass("hello"):($(".answer").slideUp(200),$answer.slideDown(200))}),$(document).ready(function(){$(window).scroll(function(){100<=$(window).scrollTop()?$(".title-small").addClass("shrink"):$(".title-small").removeClass("shrink")})});