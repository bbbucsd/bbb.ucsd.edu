<?php

class AYB_About_Widget extends WP_Widget {
	/**
	 * Sets up the widgets name etc
	 */
	public function __construct() {
		$widget_ops = array(
			'description' => 'Shows an about summary',
		);
		parent::__construct(
			'ayb_about_widget',
			'About',
			$widget_ops
		);
	}

	/**
	 * Outputs the options form on admin
	 *
	 * @param array $instance The widget options
	 */
	public function form( $instance ) {
    $default = array( 'button_text' => 'About', 'text' => '', 'page_id' => 0, 'image_uri' => '' );
    $instance = wp_parse_args( (array) $instance, $default ) ;
		$text = esc_textarea( $instance['text'] );
		$button_text = esc_textarea( $instance['button_text'] );
    ?>
			<div class="about-widget">
				<br />
				<p>
					<label for="<?php echo $this->get_field_id('image_uri'); ?>">Image:</label><br />

					<?php
						if ( isset( $instance['image_uri'] ) ) {
              echo '<img class="custom_media_image" src="' . $instance['image_uri'] . '" style="margin:0;padding:0;max-width:100px;display:inline-block" /><br /><br />';
						}
					?>

					<input type="hidden" class="widefat custom_media_url" name="<?php echo $this->get_field_name('image_uri'); ?>" id="<?php echo $this->get_field_id('image_uri'); ?>" value="<?php echo $instance['image_uri']; ?>" style="margin-top:5px;">
					<input type="button" class="button button-primary custom_media_button" id="custom_media_button" name="<?php echo $this->get_field_name('image_uri'); ?>" value="Upload Image" style="margin-top:5px;" />
				</p>
				<br />
				<p class="description">Add your description</p>
				<textarea class="widefat" rows="4" cols="20" id="<?php echo $this->get_field_id('text'); ?>" name="<?php echo $this->get_field_name('text'); ?>"><?php echo $text; ?></textarea>
				<br />
				<p>
					<label for"<?php echo $this->get_field_id( 'button_text' ); ?>">Button Text: </label>
					<textarea class="widefat" rows="1" cols="5" style="resize: none;" id="<?php echo $this->get_field_id('button_text'); ?>" name="<?php echo $this->get_field_name('button_text'); ?>"><?php echo $button_text; ?></textarea>
				</p>
				<br />
				<p class="description">Select your about page</p>
				<?php
				$args = array(
						'id' => $this->get_field_id('page_id'),
						'name' => $this->get_field_name('page_id'),
						'selected' => $instance['page_id']
				);
				wp_dropdown_pages( $args );
				?>
				<br /><br />
			</div>
    <?php
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
    if( isset( $new_instance['page_id'] ) ) {
        if( $new_instance == '' ) {
            $instance['page_id'] = '';
        } else if ( (int) $new_instance['page_id'] > 0 ) {
            $instance['page_id'] = (int) $new_instance['page_id'];
        }
    }

    $instance['button_text'] = strip_tags( $new_instance['button_text'] );
		$instance['text'] = strip_tags( $new_instance['text'] );
		$instance['image_uri'] = strip_tags( $new_instance['image_uri'] );
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
		$current_post = get_queried_object();
		$page_id = isset( $instance['page_id'] ) ? $instance['page_id'] : '';
		if( !isset( $current_post ) || ( isset( $current_post ) && $current_post->ID != $page_id ) ) {
    echo $before_widget;

    ?>

		<div class="bg-primary p-3">
			<?php if( isset( $instance['image_uri'] ) ) { ?>
				<div class="text-center mb-4">
          <div style="width: 150px; overflow: hidden; height: 150px; margin: 0 auto;" class="rounded-circle">
            <img src="<?php echo esc_url($instance['image_uri']); ?>" style="width: 100%; height: 100%;" />
          </div>
				</div>
			<?php } ?>
			<div class="text-center">
				<?php echo $instance['text'] ?>
			</div>
			<div class="text-center mt-4">
				<a href="<?php the_permalink( $instance['page_id'] ); ?>" class="btn btn-success"><?php echo $instance['button_text'] ?></a>
			</div>
		</div>

    <?php
    echo $after_widget;

		}
	}

}
