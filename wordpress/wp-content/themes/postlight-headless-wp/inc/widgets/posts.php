<?php

class AYB_Posts_Widget extends WP_Widget {
	/**
	 * Sets up the widgets name etc
	 */
	public function __construct() {
		$widget_ops = array(
			'description' => 'Lists out all the popular posts, favorites, and pillar posts',
		);
		parent::__construct(
			'ayb_posts_widget',
			'Posts',
			$widget_ops
		);
	}

	/**
	 * Outputs the options form on admin
	 *
	 * @param array $instance The widget options
	 */
	public function form( $instance ) {
	}

	/**
	 * Processing widget options on save
	 *
	 * @param array $new_instance The new options
	 * @param array $old_instance The previous options
	 */
	public function update( $new_instance, $old_instance ) {
		// processes widget options to be saved
    $instance = $old_instance;
    return $instance;
	}

	/**
	 * Outputs the content of the widget
	 *
	 * @param array $args
	 * @param array $instance
	 */
	public function widget( $args, $instance ) {
		// outputs the content of the widget
    extract( $args );
    extract( $instance );
    echo $before_widget;
    ?>

		<div class="ayb-posts-widget">
      <ul class="list-unstyled text-center">
        <?php $popular = new WP_Query(array('posts_per_page'=>7,  'meta_key'=>'popular_posts', 'orderby'=>'meta_value_num', 'order'=>'DESC'));
        while ($popular->have_posts()) : $popular->the_post(); ?>
        <li class="mb-3 pb-3"><a class="title font-weight-bold text-black" href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
        <?php endwhile; wp_reset_postdata(); ?>
      </ul>
		</div>

    <?php
    echo $after_widget;
	}

}
