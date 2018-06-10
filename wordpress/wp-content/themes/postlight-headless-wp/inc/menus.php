<?php

/**
 * Register navigation menu.
 *
 * @return void
 */
function ayb_register_menus() {
  register_nav_menu( 'header-menu', __( 'Header Menu', 'ayb' ) );
  register_nav_menu( 'footer-menu', __( 'Footer Menu', 'ayb' ) );
}

add_action( 'after_setup_theme', 'ayb_register_menus' );
