/**
 * AdminLTE Demo Menu
 * ------------------
 * You should not use this file in production.
 * This file is for demo purposes only.
 */
(function ($) {
  'use strict'

  var $sidebar = $('.control-sidebar')
  var $container = $('<div />', {
    class: 'p-3 control-sidebar-content'
  })

  $sidebar.append($container)

  var navbar_dark_skins = [
    'navbar-primary',
    'navbar-secondary',
    'navbar-info',
    'navbar-success',
    'navbar-danger',
    'navbar-indigo',
    'navbar-purple',
    'navbar-pink',
    'navbar-navy',
    'navbar-lightblue',
    'navbar-teal',
    'navbar-cyan',
    'navbar-dark',
    'navbar-gray-dark',
    'navbar-gray',
  ]

  var navbar_light_skins = [
    'navbar-light',
    'navbar-warning',
    'navbar-white',
    'navbar-orange',
  ]

  $container.append(
    '<h5>Customize AdminLTE</h5><hr class="mb-2"/>'
  )

  var $no_border_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('border-bottom-0'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('border-bottom-0')
    } else {
      $('.main-header').removeClass('border-bottom-0')
    }
  })
  var $no_border_container = $('<div />', { 'class': 'mb-1' }).append($no_border_checkbox).append('<span>No Navbar border</span>')
  $container.append($no_border_container)

  var $text_sm_body_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('body').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('body').addClass('text-sm')
    } else {
      $('body').removeClass('text-sm')
    }
  })
  var $text_sm_body_container = $('<div />', { 'class': 'mb-1' }).append($text_sm_body_checkbox).append('<span>Body small text</span>')
  $container.append($text_sm_body_container)

  var $text_sm_header_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-header').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-header').addClass('text-sm')
    } else {
      $('.main-header').removeClass('text-sm')
    }
  })
  var $text_sm_header_container = $('<div />', { 'class': 'mb-1' }).append($text_sm_header_checkbox).append('<span>Navbar small text</span>')
  $container.append($text_sm_header_container)

  var $text_sm_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('text-sm')
    } else {
      $('.nav-sidebar').removeClass('text-sm')
    }
  })
  var $text_sm_sidebar_container = $('<div />', { 'class': 'mb-1' }).append($text_sm_sidebar_checkbox).append('<span>Sidebar nav small text</span>')
  $container.append($text_sm_sidebar_container)

  var $text_sm_footer_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-footer').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-footer').addClass('text-sm')
    } else {
      $('.main-footer').removeClass('text-sm')
    }
  })
  var $text_sm_footer_container = $('<div />', { 'class': 'mb-1' }).append($text_sm_footer_checkbox).append('<span>Footer small text</span>')
  $container.append($text_sm_footer_container)

  var $flat_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-flat'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-flat')
    } else {
      $('.nav-sidebar').removeClass('nav-flat')
    }
  })
  var $flat_sidebar_container = $('<div />', { 'class': 'mb-1' }).append($flat_sidebar_checkbox).append('<span>Sidebar nav flat style</span>')
  $container.append($flat_sidebar_container)

  var $legacy_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-legacy'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-legacy')
    } else {
      $('.nav-sidebar').removeClass('nav-legacy')
    }
  })
  var $legacy_sidebar_container = $('<div />', { 'class': 'mb-1' }).append($legacy_sidebar_checkbox).append('<span>Sidebar nav legacy style</span>')
  $container.append($legacy_sidebar_container)

  var $compact_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-compact'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-compact')
    } else {
      $('.nav-sidebar').removeClass('nav-compact')
    }
  })
  var $compact_sidebar_container = $('<div />', { 'class': 'mb-1' }).append($compact_sidebar_checkbox).append('<span>Sidebar nav compact</span>')
  $container.append($compact_sidebar_container)

  var $child_indent_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.nav-sidebar').hasClass('nav-child-indent'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.nav-sidebar').addClass('nav-child-indent')
    } else {
      $('.nav-sidebar').removeClass('nav-child-indent')
    }
  })
  var $child_indent_sidebar_container = $('<div />', { 'class': 'mb-1' }).append($child_indent_sidebar_checkbox).append('<span>Sidebar nav child indent</span>')
  $container.append($child_indent_sidebar_container)

  var $no_expand_sidebar_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.main-sidebar').hasClass('sidebar-no-expand'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.main-sidebar').addClass('sidebar-no-expand')
    } else {
      $('.main-sidebar').removeClass('sidebar-no-expand')
    }
  })
  var $no_expand_sidebar_container = $('<div />', { 'class': 'mb-1' }).append($no_expand_sidebar_checkbox).append('<span>Main Sidebar disable hover/focus auto expand</span>')
  $container.append($no_expand_sidebar_container)

  var $text_sm_brand_checkbox = $('<input />', {
    type: 'checkbox',
    value: 1,
    checked: $('.brand-link').hasClass('text-sm'),
    'class': 'mr-1'
  }).on('click', function () {
    if ($(this).is(':checked')) {
      $('.brand-link').addClass('text-sm')
    } else {
      $('.brand-link').removeClass('text-sm')
    }
  })
  var $text_sm_brand_container = $('<div />', { 'class': 'mb-4' }).append($text_sm_brand_checkbox).append('<span>Brand small text</span>')
  $container.append($text_sm_brand_container)

  $container.append('<h6>Navbar Variants</h6>')

  var $navbar_variants = $('<div />', {
    'class': 'd-flex'
  })
  var navbar_all_colors = navbar_dark_skins.concat(navbar_light_skins)
  var $navbar_variants_colors = createSkinBlock(navbar_all_colors, function (e) {
    var color = $(this).data('color')
    var $main_header = $('.main-header')
    $main_header.removeClass('navbar-dark').removeClass('navbar-light')
    navbar_all_colors.map(function (color) {
      $main_header.removeClass(color)
    })

    if (navbar_dark_skins.indexOf(color) > -1) {
      $main_header.addClass('navbar-dark')
    } else {
      $main_header.addClass('navbar-light')
    }

    $main_header.addClass(color)
  })

  $navbar_variants.append($navbar_variants_colors)

  $container.append($navbar_variants)

  var sidebar_colors = [
    'bg-primary',
    'bg-warning',
    'bg-info',
    'bg-danger',
    'bg-success',
    'bg-indigo',
    'bg-lightblue',
    'bg-navy',
    'bg-purple',
    'bg-fuchsia',
    'bg-pink',
    'bg-maroon',
    'bg-orange',
    'bg-lime',
    'bg-teal',
    'bg-olive'
  ]

  var accent_colors = [
    'accent-primary',
    'accent-warning',
    'accent-info',
    'accent-danger',
    'accent-success',
    'accent-indigo',
    'accent-lightblue',
    'accent-navy',
    'accent-purple',
    'accent-fuchsia',
    'accent-pink',
    'accent-maroon',
    'accent-orange',
    'accent-lime',
    'accent-teal',
    'accent-olive'
  ]

  var sidebar_skins = [
    'sidebar-dark-primary',
    'sidebar-dark-warning',
    'sidebar-dark-info',
    'sidebar-dark-danger',
    'sidebar-dark-success',
    'sidebar-dark-indigo',
    'sidebar-dark-lightblue',
    'sidebar-dark-navy',
    'sidebar-dark-purple',
    'sidebar-dark-fuchsia',
    'sidebar-dark-pink',
    'sidebar-dark-maroon',
    'sidebar-dark-orange',
    'sidebar-dark-lime',
    'sidebar-dark-teal',
    'sidebar-dark-olive',
    'sidebar-light-primary',
    'sidebar-light-warning',
    'sidebar-light-info',
    'sidebar-light-danger',
    'sidebar-light-success',
    'sidebar-light-indigo',
    'sidebar-light-lightblue',
    'sidebar-light-navy',
    'sidebar-light-purple',
    'sidebar-light-fuchsia',
    'sidebar-light-pink',
    'sidebar-light-maroon',
    'sidebar-light-orange',
    'sidebar-light-lime',
    'sidebar-light-teal',
    'sidebar-light-olive'
  ]

  $container.append('<h6>Accent Color Variants</h6>')
  var $accent_variants = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($accent_variants)
  $container.append(createSkinBlock(accent_colors, function () {
    var color = $(this).data('color')
    var accent_class = color
    var $body = $('body')
    accent_colors.map(function (skin) {
      $body.removeClass(skin)
    })

    $body.addClass(accent_class)
  }))

  $container.append('<h6>Dark Sidebar Variants</h6>')
  var $sidebar_variants_dark = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($sidebar_variants_dark)
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color')
    var sidebar_class = 'sidebar-dark-' + color.replace('bg-', '')
    var $sidebar = $('.main-sidebar')
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin)
    })

    $sidebar.addClass(sidebar_class)
  }))

  $container.append('<h6>Light Sidebar Variants</h6>')
  var $sidebar_variants_light = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($sidebar_variants_light)
  $container.append(createSkinBlock(sidebar_colors, function () {
    var color = $(this).data('color')
    var sidebar_class = 'sidebar-light-' + color.replace('bg-', '')
    var $sidebar = $('.main-sidebar')
    sidebar_skins.map(function (skin) {
      $sidebar.removeClass(skin)
    })

    $sidebar.addClass(sidebar_class)
  }))

  var logo_skins = navbar_all_colors
  $container.append('<h6>Brand Logo Variants</h6>')
  var $logo_variants = $('<div />', {
    'class': 'd-flex'
  })
  $container.append($logo_variants)
  var $clear_btn = $('<a />', {
    href: 'javascript:void(0)'
  }).text('clear').on('click', function () {
    var $logo = $('.brand-link')
    logo_skins.map(function (skin) {
      $logo.removeClass(skin)
    })
  })
  $container.append(createSkinBlock(logo_skins, function () {
    var color = $(this).data('color')
    var $logo = $('.brand-link')
    logo_skins.map(function (skin) {
      $logo.removeClass(skin)
    })
    $logo.addClass(color)
  }).append($clear_btn))

  function createSkinBlock(colors, callback) {
    var $block = $('<div />', {
      'class': 'd-flex flex-wrap mb-3'
    })

    colors.map(function (color) {
      var $color = $('<div />', {
        'class': (typeof color === 'object' ? color.join(' ') : color).replace('navbar-', 'bg-').replace('accent-', 'bg-') + ' elevation-2'
      })

      $block.append($color)

      $color.data('color', color)

      $color.css({
        width: '40px',
        height: '20px',
        borderRadius: '25px',
        marginRight: 10,
        marginBottom: 10,
        opacity: 0.8,
        cursor: 'pointer'
      })

      $color.hover(function () {
        $(this).css({ opacity: 1 }).removeClass('elevation-2').addClass('elevation-4')
      }, function () {
        $(this).css({ opacity: 0.8 }).removeClass('elevation-4').addClass('elevation-2')
      })

      if (callback) {
        $color.on('click', callback)
      }
    })

    return $block
  }
})(jQuery)

// document.addEventListener('DOMContentLoaded', function () {
//   particleground(document.getElementById('particles'), {
//     dotColor: '#5cbdaa',
//     lineColor: '#5cbdaa'
//   });

// }, false);

$(window).on('load', function () {
  var sidebarTheme = [];

  var navbarTheme =  [];

  var toastPosition =  [];

  var panelTheme =  [];

  var primaryButtonTheme =  [];

  var secondaryButtonTheme =  [];

  var gridTheme =  [];

  var tabTheme =  [];

  // $.ajax({
  //   url: '/assets/themeconfig.json',
  //   type: 'get',
  //   dataType: 'json',
  //   error: function (data) {
  //   },
  //   success: function (data) {
  //   //  setTimeout(() => {
      
  //   var currentUserDetail = JSON.parse(localStorage.getItem("userDetails"));

  //   if (currentUserDetail != null) {
  //     var finalConfiguration = [];
  //     var currentConfigDetail = JSON.parse(localStorage.getItem("themeConfigFor" + currentUserDetail.userName));
  //     if (currentConfigDetail == null) {
  //       finalConfiguration.push({ type: "sidebartheme", config: sidebarTheme[0] });
  //       finalConfiguration.push({ type: "navbartheme", config: navbarTheme[0] });
  //       finalConfiguration.push({ type: "toastposition", config: toastPosition[0] });
  //       finalConfiguration.push({ type: "paneltheme", config: panelTheme[0] });
  //       finalConfiguration.push({ type: "primarybuttontheme", config: primaryButtonTheme[0] });
  //       finalConfiguration.push({ type: "secondarybuttontheme", config: secondaryButtonTheme[0] });
  //       finalConfiguration.push({ type: "gridtheme", config: gridTheme[0] });
  //       finalConfiguration.push({ type: "tabtheme", config: tabTheme[0] });
  //       localStorage.setItem("themeConfigFor" + + currentUserDetail.userName, JSON.stringify(finalConfiguration));
  //       setSidebar(finalConfiguration[0]);
  //       setNavbar(finalConfiguration[1]);
  //       setPanel(finalConfiguration[3]);
  //       setButton(finalConfiguration[4]);
  //       setSecondaryButton(finalConfiguration[5]);
  //       setGrid(finalConfiguration[6]);
  //       setTab(finalConfiguration[7]);
  //     } else {
  //       // console.log(currentConfigDetail);
  //       for (let index = 0; index < currentConfigDetail.length; index++) {
  //         const element = currentConfigDetail[index];
  
  
  //         //currentConfigDetail.forEach(element => {
  //         if (element.type == "sidebartheme") {
  //           setSidebar(element);
  //         }
  
  //         if (element.type == "navbartheme") {
  //           setNavbar(element);
  //         }
  
  //         if (element.type == "paneltheme") {
  //           setPanel(element);
  //         }
  //         if (element.type == "primarybuttontheme") {
  //           setButton(element);
  //         }
  //         if (element.type == "secondarybuttontheme") {
  //           setSecondaryButton(element);
  //         }
  //         if (element.type == "gridtheme") {
  //           setGrid(element);
  //         }
  //         if (element.type == "tabtheme") {
  //           setTab(element);
  //         }
  //         // });
  //       }
  
  //     }
  //   }
 
  // //}, 300);

  //   }
  // });







  function setSidebar(element) {


    if (element.config.type == "old") {
      $("#old-sidebar").css("display", "block");
      $("#new-sidebar").css("display", "none");
    }
    if (element.config.type == "new") {
      $("#old-sidebar").css("display", "none");
      $("#new-sidebar").css("display", "block");
      for (let index = 0; index < sidebarTheme.length; index++) {
        // const element = array[index];
        $("#new-sidebar aside").removeClass(sidebarTheme[index].className);
      }
      // sidebarTheme.forEach(item => {
      //   $("#new-sidebar aside").removeClass(item.className);
      // });
      $("#new-sidebar aside").removeClass("new-side-bar-light", "new-side-bar-dark", "new-side-bar-default");
      $("#new-sidebar aside").addClass(element.config.className);
      $("#new-sidebar aside").addClass(element.config.themeType);

    }
  }

  function setNavbar(element) {

    if (element.config.type == "old") {
      $("#old-navbar").css("display", "block");
      $("#new-navbar").css("display", "none");
    }
    if (element.config.type == "new") {
      $("#old-navbar").css("display", "none");
      $("#new-navbar").css("display", "block");
      for (let index = 0; index < navbarTheme.length; index++) {
        $("#new-navbar > nav").removeClass(navbarTheme[index].className);

      }
      // navbarTheme.forEach(item => {

      // });
      $("#new-navbar > nav").removeClass("new-navbar-light", "new-navbar-default-dark", "new-navbar-default");
      $("#new-navbar > nav").addClass(element.config.className);
      $("#new-navbar > nav").addClass(element.config.themeType);

    }
  }
  function setPanel(item) {
    for (let index = 0; index < panelTheme.length; index++) {
      $("#ipsh-body").removeClass(panelTheme[index].themeName);

    }
    // panelTheme.forEach(element => {

    // });
    $("#ipsh-body").removeClass("ipsh-panel-default");
    $("#ipsh-body").removeClass("ipsh-panel-dark");
    $("#ipsh-body").removeClass("ipsh-panel-light");
    $("#ipsh-body").addClass(item.config.themeName);
    $("#ipsh-body").addClass(item.config.themeType);
  }

  function setButton(item) {
    for (let index = 0; index < primaryButtonTheme.length; index++) {
      $("#ipsh-body").removeClass(primaryButtonTheme[index].themeName);

    }
    // buttonTheme.forEach(element => {

    // });
    $("#ipsh-body").removeClass("ipsh-button-default");
    $("#ipsh-body").removeClass("ipsh-button-dark");
    $("#ipsh-body").removeClass("ipsh-button-light");
    $("#ipsh-body").addClass(item.config.themeName);
    $("#ipsh-body").addClass(item.config.themeType);
  }

  function setSecondaryButton(item) {
    for (let index = 0; index < secondaryButtonTheme.length; index++) {
      $("#ipsh-body").removeClass(secondaryButtonTheme[index].themeName);

    }
    // buttonTheme.forEach(element => {

    // });
    $("#ipsh-body").removeClass("ipsh-button-default");
    $("#ipsh-body").removeClass("ipsh-button-dark");
    $("#ipsh-body").removeClass("ipsh-button-light");
    $("#ipsh-body").addClass(item.config.themeName);
    $("#ipsh-body").addClass(item.config.themeType);
  }

  function setGrid(item) {
    for (let index = 0; index < gridTheme.length; index++) {
      $("#ipsh-body").removeClass(gridTheme[index].themeName);

    }
    // buttonTheme.forEach(element => {

    // });
    $("#ipsh-body").removeClass("ipsh-grid-default");
    $("#ipsh-body").removeClass("ipsh-grid-dark");
    $("#ipsh-body").removeClass("ipsh-grid-light");
    $("#ipsh-body").addClass(item.config.themeName);
    $("#ipsh-body").addClass(item.config.themeType);
  }

  function setTab(item) {
    for (let index = 0; index < tabTheme.length; index++) {
      $("#ipsh-body").removeClass(tabTheme[index].themeName);

    }
    // buttonTheme.forEach(element => {

    // });
    $("#ipsh-body").removeClass("ipsh-grid-default");
    $("#ipsh-body").removeClass("ipsh-grid-dark");
    $("#ipsh-body").removeClass("ipsh-grid-light");
    $("#ipsh-body").addClass(item.config.themeName);
  }

  //   function IEdetection() {
  //     var ua = window.navigator.userAgent;
  //     var msie = ua.indexOf('MSIE ');
  //     if (msie > 0) {
  //         // IE 10 or older, return version number
  //         return true;
  //     }
  //     var trident = ua.indexOf('Trident/');
  //     if (trident > 0) {
  //         // IE 11, return version number
  //         var rv = ua.indexOf('rv:');
  //         return true;
  //     }
  //     var edge = ua.indexOf('Edge/');
  //     if (edge > 0) {
  //         //Edge (IE 12+), return version number
  //         return true;
  //     }
  //     // User uses other browser
  //     return false;
  // }
  // setTimeout(function(){ 
  //   xx()
  //  }, 100);


  //  function xx(){


  //   var sidebarTheme = [
  //     { type: "old", className: "old-sidebar-default", themeType: "old-sidebar-default-bar-dark", isActive: false },
  //     { type: "new", className: "new-side-bar-default", themeType: "new-side-bar-dark", isActive: false },
  //     { type: "new", className: "new-side-bar-color1", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color2", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color3", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color4", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color5", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color6", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color7", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color8", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color9", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color10", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color11", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color12", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color13", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color14", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color15", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color16", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color17", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color18", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color19", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color20", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color21", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color22", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color23", themeType: "new-side-bar-light", isActive: false },
  //     { type: "new", className: "new-side-bar-color24", themeType: "new-side-bar-light", isActive: false }
  //   ];

  //   var navbarTheme = [
  //     { type: "old", className: "old-sidebar-default", themeType: "old-sidebar-default-bar-dark", isActive: false },
  //     { type: "new", className: "new-navbar-default", themeType: "new-navbar-default-dark", isActive: false },
  //     { type: "new", className: "new-navbar-color1", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color2", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color3", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color4", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color5", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color6", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color7", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color8", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color9", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color10", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color11", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color12", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color13", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color14", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color15", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color16", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color17", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color18", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color19", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color20", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color21", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color22", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color23", themeType: "new-navbar-light", isActive: false },
  //     { type: "new", className: "new-navbar-color24", themeType: "new-navbar-light", isActive: false }
  //   ];

  //   var toastPosition = [
  //     { position: "TC", name: "Top Center", isActive: false },
  //     { position: "BC", name: "Bottom Center", isActive: false },
  //     { position: "TL", name: "Top Left", isActive: false },
  //     { position: "TR", name: "Top Right", isActive: false },
  //     { position: "BL", name: "Bottom Left", isActive: false },
  //     { position: "BR", name: "Bottom Right", isActive: false }
  //   ];

  //   var panelTheme = [
  //     { className: "ipsh-default", themeName: "ipsh-panel-default", themeType: "ipsh-panel-default", isActive: false },
  //     { className: "ipsh-color0", themeName: "ipsh-panel-color0", themeType: "ipsh-panel-dark", isActive: false },
  //     { className: "ipsh-color1", themeName: "ipsh-panel-color1", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color2", themeName: "ipsh-panel-color2", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color3", themeName: "ipsh-panel-color3", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color4", themeName: "ipsh-panel-color4", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color5", themeName: "ipsh-panel-color5", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color6", themeName: "ipsh-panel-color6", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color7", themeName: "ipsh-panel-color7", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color8", themeName: "ipsh-panel-color8", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color9", themeName: "ipsh-panel-color9", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color10", themeName: "ipsh-panel-color10", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color11", themeName: "ipsh-panel-color11", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color12", themeName: "ipsh-panel-color12", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color13", themeName: "ipsh-panel-color13", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color14", themeName: "ipsh-panel-color14", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color15", themeName: "ipsh-panel-color15", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color16", themeName: "ipsh-panel-color16", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color17", themeName: "ipsh-panel-color17", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color18", themeName: "ipsh-panel-color18", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color19", themeName: "ipsh-panel-color19", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color20", themeName: "ipsh-panel-color20", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color21", themeName: "ipsh-panel-color21", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color22", themeName: "ipsh-panel-color22", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color23", themeName: "ipsh-panel-color23", themeType: "ipsh-panel-light", isActive: false },
  //     { className: "ipsh-color24", themeName: "ipsh-panel-color24", themeType: "ipsh-panel-light", isActive: false }
  //   ];


  //   var primaryButtonTheme = [
  //     { className: "ipsh-default", themeName: "ipsh-button-default", themeType: "ipsh-button-default", isActive: false },
  //     { className: "ipsh-color0", themeName: "ipsh-primary-button-color0", themeType: "ipsh-button-dark", isActive: false },
  //     { className: "ipsh-color1", themeName: "ipsh-primary-button-color1", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color2", themeName: "ipsh-primary-button-color2", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color3", themeName: "ipsh-primary-button-color3", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color4", themeName: "ipsh-primary-button-color4", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color5", themeName: "ipsh-primary-button-color5", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color6", themeName: "ipsh-primary-button-color6", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color7", themeName: "ipsh-primary-button-color7", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color8", themeName: "ipsh-primary-button-color8", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color9", themeName: "ipsh-primary-button-color9", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color10", themeName: "ipsh-primary-button-color10", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color11", themeName: "ipsh-primary-button-color11", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color12", themeName: "ipsh-primary-button-color12", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color13", themeName: "ipsh-primary-button-color13", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color14", themeName: "ipsh-primary-button-color14", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color15", themeName: "ipsh-primary-button-color15", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color16", themeName: "ipsh-primary-button-color16", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color17", themeName: "ipsh-primary-button-color17", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color18", themeName: "ipsh-primary-button-color18", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color19", themeName: "ipsh-primary-button-color19", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color20", themeName: "ipsh-primary-button-color20", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color21", themeName: "ipsh-primary-button-color21", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color22", themeName: "ipsh-primary-button-color22", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color23", themeName: "ipsh-primary-button-color23", themeType: "ipsh-button-light", isActive: false },
  //     { className: "ipsh-color24", themeName: "ipsh-primary-button-color24", themeType: "ipsh-button-light", isActive: false }
  // ];

  // var secondaryButtonTheme = [
  //   { className: "ipsh-default", themeName: "ipsh-button-default", themeType: "ipsh-button-default", isActive: false },
  //   { className: "ipsh-color0", themeName: "ipsh-secondary-button-color0", themeType: "ipsh-button-dark", isActive: false },
  //   { className: "ipsh-color1", themeName: "ipsh-secondary-button-color1", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color2", themeName: "ipsh-secondary-button-color2", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color3", themeName: "ipsh-secondary-button-color3", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color4", themeName: "ipsh-secondary-button-color4", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color5", themeName: "ipsh-secondary-button-color5", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color6", themeName: "ipsh-secondary-button-color6", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color7", themeName: "ipsh-secondary-button-color7", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color8", themeName: "ipsh-secondary-button-color8", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color9", themeName: "ipsh-secondary-button-color9", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color10", themeName: "ipsh-secondary-button-color10", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color11", themeName: "ipsh-secondary-button-color11", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color12", themeName: "ipsh-secondary-button-color12", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color13", themeName: "ipsh-secondary-button-color13", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color14", themeName: "ipsh-secondary-button-color14", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color15", themeName: "ipsh-secondary-button-color15", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color16", themeName: "ipsh-secondary-button-color16", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color17", themeName: "ipsh-secondary-button-color17", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color18", themeName: "ipsh-secondary-button-color18", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color19", themeName: "ipsh-secondary-button-color19", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color20", themeName: "ipsh-secondary-button-color20", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color21", themeName: "ipsh-secondary-button-color21", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color22", themeName: "ipsh-secondary-button-color22", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color23", themeName: "ipsh-secondary-button-color23", themeType: "ipsh-button-light", isActive: false },
  //   { className: "ipsh-color24", themeName: "ipsh-secondary-button-color24", themeType: "ipsh-button-light", isActive: false }
  // ];

  // var gridTheme = [
  //     { className: "ipsh-default", themeName: "ipsh-grid-default", themeType: "ipsh-grid-default", isActive: false },
  //     { className: "ipsh-color0", themeName: "ipsh-grid-color0", themeType: "ipsh-grid-dark", isActive: false },
  //     { className: "ipsh-color1", themeName: "ipsh-grid-color1", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color2", themeName: "ipsh-grid-color2", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color3", themeName: "ipsh-grid-color3", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color4", themeName: "ipsh-grid-color4", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color5", themeName: "ipsh-grid-color5", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color6", themeName: "ipsh-grid-color6", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color7", themeName: "ipsh-grid-color7", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color8", themeName: "ipsh-grid-color8", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color9", themeName: "ipsh-grid-color9", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color10", themeName: "ipsh-grid-color10", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color11", themeName: "ipsh-grid-color11", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color12", themeName: "ipsh-grid-color12", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color13", themeName: "ipsh-grid-color13", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color14", themeName: "ipsh-grid-color14", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color15", themeName: "ipsh-grid-color15", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color16", themeName: "ipsh-grid-color16", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color17", themeName: "ipsh-grid-color17", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color18", themeName: "ipsh-grid-color18", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color19", themeName: "ipsh-grid-color19", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color20", themeName: "ipsh-grid-color20", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color21", themeName: "ipsh-grid-color21", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color22", themeName: "ipsh-grid-color22", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color23", themeName: "ipsh-grid-color23", themeType: "ipsh-grid-light", isActive: false },
  //     { className: "ipsh-color24", themeName: "ipsh-grid-color24", themeType: "ipsh-grid-light", isActive: false }
  // ];

  // var tabTheme = [
  //   { className: "ipsh-default", themeName: "ipsh-tab-default", isActive: false },
  //   { className: "ipsh-color0", themeName: "ipsh-tab-color0", isActive: false },
  //   { className: "ipsh-color1", themeName: "ipsh-tab-color1", isActive: false },
  //   { className: "ipsh-color2", themeName: "ipsh-tab-color2", isActive: false },
  //   { className: "ipsh-color3", themeName: "ipsh-tab-color3", isActive: false },
  //   { className: "ipsh-color4", themeName: "ipsh-tab-color4", isActive: false },
  //   { className: "ipsh-color5", themeName: "ipsh-tab-color5", isActive: false },
  //   { className: "ipsh-color6", themeName: "ipsh-tab-color6", isActive: false },
  //   { className: "ipsh-color7", themeName: "ipsh-tab-color7", isActive: false },
  //   { className: "ipsh-color8", themeName: "ipsh-tab-color8", isActive: false },
  //   { className: "ipsh-color9", themeName: "ipsh-tab-color9", isActive: false },
  //   { className: "ipsh-color10", themeName: "ipsh-tab-color10", isActive: false },
  //   { className: "ipsh-color11", themeName: "ipsh-tab-color11", isActive: false },
  //   { className: "ipsh-color12", themeName: "ipsh-tab-color12", isActive: false },
  //   { className: "ipsh-color13", themeName: "ipsh-tab-color13", isActive: false },
  //   { className: "ipsh-color14", themeName: "ipsh-tab-color14", isActive: false },
  //   { className: "ipsh-color15", themeName: "ipsh-tab-color15", isActive: false },
  //   { className: "ipsh-color16", themeName: "ipsh-tab-color16", isActive: false },
  //   { className: "ipsh-color17", themeName: "ipsh-tab-color17", isActive: false },
  //   { className: "ipsh-color18", themeName: "ipsh-tab-color18", isActive: false },
  //   { className: "ipsh-color19", themeName: "ipsh-tab-color19", isActive: false },
  //   { className: "ipsh-color20", themeName: "ipsh-tab-color20", isActive: false },
  //   { className: "ipsh-color21", themeName: "ipsh-tab-color21", isActive: false },
  //   { className: "ipsh-color22", themeName: "ipsh-tab-color22", isActive: false },
  //   { className: "ipsh-color23", themeName: "ipsh-tab-color23", isActive: false },
  //   { className: "ipsh-color24", themeName: "ipsh-tab-color24", isActive: false }
  // ];
  //   var currentUserDetail = JSON.parse(localStorage.getItem("userDetails"));

  //   if (currentUserDetail != null) {
  //     var finalConfiguration = [];
  //     var currentConfigDetail = JSON.parse(localStorage.getItem("themeConfigFor" + currentUserDetail.userName));
  //     if (currentConfigDetail == null) {
  //       finalConfiguration.push({ type: "sidebartheme", config: sidebarTheme[0] });
  //       finalConfiguration.push({ type: "navbartheme", config: navbarTheme[0] });
  //       finalConfiguration.push({ type: "toastposition", config: toastPosition[0] });
  //       finalConfiguration.push({ type: "paneltheme", config: panelTheme[0] });
  //       finalConfiguration.push({ type: "primarybuttontheme", config: primaryButtonTheme[0] });
  //       finalConfiguration.push({ type: "secondarybuttontheme", config: secondaryButtonTheme[0] });
  //       finalConfiguration.push({ type: "gridtheme", config: gridTheme[0] });
  //       finalConfiguration.push({ type: "tabtheme", config: tabTheme[0] });
  //       localStorage.setItem("themeConfigFor" + + currentUserDetail.userName, JSON.stringify(finalConfiguration));
  //       setSidebar(finalConfiguration[0]);
  //       setNavbar(finalConfiguration[1]);
  //       setPanel(finalConfiguration[3]);
  //       setButton(finalConfiguration[4]);
  //       setSecondaryButton(finalConfiguration[5]);
  //       setGrid(finalConfiguration[6]);
  //       setTab(finalConfiguration[7]);
  //     } else {
  //      // console.log(currentConfigDetail);
  //       for (let index = 0; index < currentConfigDetail.length; index++) {
  //         const element = currentConfigDetail[index];


  //       //currentConfigDetail.forEach(element => {
  //         if (element.type == "sidebartheme") {
  //           setSidebar(element);
  //         }

  //         if (element.type == "navbartheme") {
  //           setNavbar(element);
  //         }

  //         if (element.type == "paneltheme") {
  //           setPanel(element);
  //         }
  //         if (element.type == "primarybuttontheme") {
  //           setButton(element);
  //         }
  //         if (element.type == "secondarybuttontheme") {
  //           setSecondaryButton(element);
  //         }
  //         if (element.type == "gridtheme") {
  //           setGrid(element);
  //         }
  //         if (element.type == "tabtheme") {
  //           setTab(element);
  //         }
  //      // });
  //       }

  //     }
  //   }



  //   function setSidebar(element) {


  //     if (element.config.type == "old") {
  //       $("#old-sidebar").css("display", "block");
  //       $("#new-sidebar").css("display", "none");
  //     }
  //     if (element.config.type == "new") {
  //       $("#old-sidebar").css("display", "none");
  //       $("#new-sidebar").css("display", "block");
  //       for (let index = 0; index < sidebarTheme.length; index++) {
  //        // const element = array[index];
  //         $("#new-sidebar aside").removeClass(sidebarTheme[index].className);
  //       }
  //       // sidebarTheme.forEach(item => {
  //       //   $("#new-sidebar aside").removeClass(item.className);
  //       // });
  //       $("#new-sidebar aside").removeClass("new-side-bar-light", "new-side-bar-dark", "new-side-bar-default");
  //       $("#new-sidebar aside").addClass(element.config.className);
  //       $("#new-sidebar aside").addClass(element.config.themeType);

  //     }
  //   }

  //   function setNavbar(element) {

  //     if (element.config.type == "old") {
  //       $("#old-navbar").css("display", "block");
  //       $("#new-navbar").css("display", "none");
  //     }
  //     if (element.config.type == "new") {
  //       $("#old-navbar").css("display", "none");
  //       $("#new-navbar").css("display", "block");
  //       for (let index = 0; index < navbarTheme.length; index++) {
  //         $("#new-navbar > nav").removeClass(navbarTheme[index].className);

  //       }
  //       // navbarTheme.forEach(item => {

  //       // });
  //       $("#new-navbar > nav").removeClass("new-navbar-light", "new-navbar-default-dark", "new-navbar-default");
  //       $("#new-navbar > nav").addClass(element.config.className);
  //       $("#new-navbar > nav").addClass(element.config.themeType);

  //     }
  //   }
  //   function setPanel(item) {
  //     for (let index = 0; index < panelTheme.length; index++) {
  //       $("#ipsh-body").removeClass(panelTheme[index].themeName);

  //     }
  //     // panelTheme.forEach(element => {

  //     // });
  //     $("#ipsh-body").removeClass("ipsh-panel-default");
  //     $("#ipsh-body").removeClass("ipsh-panel-dark");
  //     $("#ipsh-body").removeClass("ipsh-panel-light");
  //     $("#ipsh-body").addClass(item.config.themeName);
  //     $("#ipsh-body").addClass(item.config.themeType);
  //   }

  //   function setButton(item) {
  //     for (let index = 0; index < primaryButtonTheme.length; index++) {
  //       $("#ipsh-body").removeClass(primaryButtonTheme[index].themeName);

  //     }
  //     // buttonTheme.forEach(element => {

  //     // });
  //     $("#ipsh-body").removeClass("ipsh-button-default");
  //     $("#ipsh-body").removeClass("ipsh-button-dark");
  //     $("#ipsh-body").removeClass("ipsh-button-light");
  //     $("#ipsh-body").addClass(item.config.themeName);
  //     $("#ipsh-body").addClass(item.config.themeType);
  //   }

  //   function setSecondaryButton(item) {
  //     for (let index = 0; index < secondaryButtonTheme.length; index++) {
  //       $("#ipsh-body").removeClass(secondaryButtonTheme[index].themeName);

  //     }
  //     // buttonTheme.forEach(element => {

  //     // });
  //     $("#ipsh-body").removeClass("ipsh-button-default");
  //     $("#ipsh-body").removeClass("ipsh-button-dark");
  //     $("#ipsh-body").removeClass("ipsh-button-light");
  //     $("#ipsh-body").addClass(item.config.themeName);
  //     $("#ipsh-body").addClass(item.config.themeType);
  //   }

  //   function setGrid(item) {
  //     for (let index = 0; index < gridTheme.length; index++) {
  //       $("#ipsh-body").removeClass(gridTheme[index].themeName);

  //     }
  //     // buttonTheme.forEach(element => {

  //     // });
  //     $("#ipsh-body").removeClass("ipsh-grid-default");
  //     $("#ipsh-body").removeClass("ipsh-grid-dark");
  //     $("#ipsh-body").removeClass("ipsh-grid-light");
  //     $("#ipsh-body").addClass(item.config.themeName);
  //     $("#ipsh-body").addClass(item.config.themeType);
  //   }

  //   function setTab(item) {
  //     for (let index = 0; index < tabTheme.length; index++) {
  //       $("#ipsh-body").removeClass(tabTheme[index].themeName);

  //     }
  //     // buttonTheme.forEach(element => {

  //     // });
  //     $("#ipsh-body").removeClass("ipsh-grid-default");
  //     $("#ipsh-body").removeClass("ipsh-grid-dark");
  //     $("#ipsh-body").removeClass("ipsh-grid-light");
  //     $("#ipsh-body").addClass(item.config.themeName);
  //   }
  // } 

})

