<?php

include( get_template_directory() . '/inc/widgets/about.php' );
include( get_template_directory() . '/inc/widgets/posts.php' );

function ayb_widgets() {
  register_sidebar(array(
    'name'          => __( 'AYB Sidebar', 'ayb' ),
    'id'            => 'ayb_sidebar',
    'description'   => __( 'Single Sidebar for the theme', 'ayb' ),
    'before_widget' => '<div id="%1$s" class="mb-5 %2$s">',
    'after_widget'  => '</div>',
    'before_title'  => '<h4>',
    'after_title'   => '</h4>'
  ));

  register_widget( 'AYB_About_Widget' );
  register_widget( 'AYB_Posts_Widget' );
}

add_action( 'widgets_init', 'ayb_widgets' );
