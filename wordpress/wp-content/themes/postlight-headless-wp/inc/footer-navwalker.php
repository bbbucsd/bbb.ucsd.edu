<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Footer_Navwalker_Nav_Menu extends Walker_Nav_Menu {
  public function start_lvl( &$output, $depth = 0, $args = array() ) {
    $output .= '<ul>';
  }

  public function end_lvl( &$output, $depth = 0, $args = array() ) {
    $output .= '</ul>';
  }

  public function start_el( &$output, $item, $depth = 0, $args = array(), $id = 0 ) {
    $classes = array();
    if( !empty( $item->classes ) ) {
      $classes = (array) $item->classes;
    }

    $active_class = '';
    if( in_array('current-menu-item', $classes) ) {
      $active_class = ' active';
    } else if( in_array('current-menu-parent', $classes) ) {
      $active_class = ' active-parent';
    } else if( in_array('current-menu-ancestor', $classes) ) {
      $active_class = ' active-ancestor';
    }

    $url = '';
    if( !empty( $item->url ) ) {
      $url = $item->url;
    }

    $output .= '<li class="mt-2'. $active_class . '"><a href="' . $url . '" class="text-light">' . $item->title . '</a></li>';
  }

  public function end_el( &$output, $item, $depth = 0, $args = array() ) {
    $output .= '</li>';
  }
}
