<?php
/**
 * Register custom REST API routes.
 */
add_action(
  'rest_api_init',
  function () {
    // Define API endpoint arguments
    $slug_arg = [
      'validate_callback' => function ( $param, $request, $key ) {
        return( is_string( $param ) );
      },
    ];
    $post_slug_arg = array_merge(
      $slug_arg,
      [
        'description' => 'String representing a valid WordPress post slug',
      ]
    );
    $page_slug_arg = array_merge(
      $slug_arg,
      [
        'description' => 'String representing a valid WordPress page slug',
      ]
    );
    $category_slug_arg = array_merge(
      $slug_arg,
      [
        'description' => 'String representing a valid WordPress post slug',
      ]
    );

    // Register routes
    register_rest_route( 'postlight/v1', '/layout', array(
      'methods' => 'GET',
      'callback' => 'rest_get_layout',
    ) );

    register_rest_route( 'postlight/v1', '/post', [
      'methods'  => 'GET',
      'callback' => 'rest_get_post',
      'args' => [
        'slug' => array_merge(
          $post_slug_arg,
          [
            'required' => true,
          ]
        ),
      ],
    ] );

    register_rest_route( 'postlight/v1', '/category', [
      'methods'  => 'GET',
      'callback' => 'rest_get_category',
      'args' => [
        'slug' => array_merge(
          $category_slug_arg,
          [
            'required' => true,
          ]
        ),
      ],
    ] );

    register_rest_route( 'postlight/v1', '/frontpage', [
      'methods'  => 'GET',
      'callback' => 'rest_get_frontpage',
    ] );

    register_rest_route( 'postlight/v1', '/redirects', [
      'methods'  => 'GET',
      'callback' => 'rest_get_redirects',
    ] );

    register_rest_route( 'postlight/v1', '/page', [
      'methods'  => 'GET',
      'callback' => 'rest_get_page',
      'args' => [
        'slug' => array_merge(
          $page_slug_arg,
          [
            'required' => true,
          ]
        ),
      ],
    ] );

    register_rest_route('postlight/v1', '/post/preview', [
      'methods'  => 'GET',
      'callback' => 'rest_get_post_preview',
      'args' => [
        'id' => [
          'validate_callback' => function ( $param, $request, $key ) {
            return ( is_numeric( $param ) );
          },
          'required' => true,
          'description' => 'Valid WordPress post ID',
        ],
      ],
      'permission_callback' => function () {
        return current_user_can( 'edit_posts' );
      },
    ] );
  }
);

/**
 * Respond to a REST API request to get layout data.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response
 */
function rest_get_layout( WP_REST_Request $request ) {
  ob_start();
  wp_head();
  $head = ob_get_contents();
  ob_end_clean();

  ob_start();
  wp_footer();
  $footer = ob_get_contents();
  ob_end_clean();

  $data = array(
    'head' => $head,
    'footer' =>  $footer
  );

  $response = new WP_REST_Response( $data );
  $response->set_status( 200 );
  return $response;
}

/**
 * Respond to a REST API request to get post data.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response
 */
function rest_get_post( WP_REST_Request $request ) {
  return rest_get_content( $request, 'post', __FUNCTION__ );
}

/**
 * Respond to a REST API request to get post data.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response
 */
function rest_get_category( WP_REST_Request $request ) {
  $slug = $request->get_param( 'slug' );

  $category = get_category_by_slug( $slug );
  if ( ! $category ) {
    return new WP_Error(
      $function_name,
      $slug . ' ' . $type . ' does not exist',
      [
        'status' => 404,
      ]
    );
  }

  $category_content = $category->category_description;
  $category_content = apply_filters( 'the_content', $category_content );
  $category_content = do_shortcode( $category_content );
  $category->category_description = $category_content;

  // Shortcut to WP admin page editor
  $edit = $request->get_param( 'edit' );
  if ( 'true' === $edit ) {
    header( 'Location: /wp-admin/term.php?taxonomy=category&tag_ID=' . $category->term_id . '&post_type=post' );
    exit;
  }
  $controller = new WP_REST_Terms_Controller( 'category' );
  return $controller->prepare_item_for_response( $category, $request );
}

function rest_get_redirects( WP_REST_Request $request ) {
  // Get the ID of the static frontpage. If not set it's 0
  $data = get_option( 'wpseo-premium-redirects-base' );

  return new WP_REST_Response( $data );
}

/**
 * Respond to a REST API request to get page data.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response
 */
function rest_get_frontpage( WP_REST_Request $request ) {
  // Get the ID of the static frontpage. If not set it's 0
  $pid  = (int) get_option( 'page_on_front' );

  // Get the corresponding post object (let's show our intention explicitly)
  $page = ( $pid > 0 ) ? get_post( $pid ) : null;

  // No static frontpage is set
  if( ! is_a( $page, 'WP_Post' ) )
    return new WP_Error( 'wpse-error',
      esc_html__( 'No Static Frontpage', 'wpse' ), [ 'status' => 404 ] );


  $page_content = $page->post_content;
  $page_content = apply_filters( 'the_content', $page_content );
  $page_content = do_shortcode( $page_content );
  $page->post_content = $page_content;

  // Shortcut to WP admin page editor
  $edit = $request->get_param( 'edit' );
  if ( 'true' === $edit ) {
    header( 'Location: /wp-admin/post.php?post=' . $page->ID . '&action=edit' );
    exit;
  }
  $controller = new WP_REST_Posts_Controller( 'page' );
  $data = $controller->prepare_item_for_response( $page, $request );
  $response = $controller->prepare_response_for_collection( $data );

  return new WP_REST_Response( $response );
}

/**
 * Respond to a REST API request to get page data.
 *
 * @param WP_REST_Request $request Request.
 * @return WP_REST_Response
 */
function rest_get_page( WP_REST_Request $request ) {
  return rest_get_content( $request, 'page', __FUNCTION__ );
}

/**
 * Respond to a REST API request to get post or page data.
 * * Handles changed slugs
 * * Redirects to the admin when an edit parameter is present
 * * Doesn't return posts whose status isn't published
 *
 * @param WP_REST_Request $request Request
 * @param str             $type Type
 * @param str             $function_name Function name
 * @return WP_REST_Response
 */
function rest_get_content( WP_REST_Request $request, $type, $function_name ) {
  $content_in_array = in_array(
    $type,
    [
      'post',
      'page',
    ],
    true
  );
  if ( ! $content_in_array ) {
    $type = 'post';
  }
  $slug = $request->get_param( 'slug' );
  $post = get_content_by_slug( $slug, $type );
  if ( ! $post ) {
    return new WP_Error(
      $function_name,
      $slug . ' ' . $type . ' does not exist',
      [
        'status' => 404,
      ]
    );
  }

  $post_content = $post->post_content;
  $post_content = apply_filters( 'the_content', $post_content );
  $post_content = do_shortcode( $post_content );
  $post->post_content = $post_content;

  // Shortcut to WP admin page editor
  $edit = $request->get_param( 'edit' );
  if ( 'true' === $edit ) {
    header( 'Location: /wp-admin/post.php?post=' . $post->ID . '&action=edit' );
    exit;
  }
  $controller = new WP_REST_Posts_Controller( 'post' );
  $data = $controller->prepare_item_for_response( $post, $request );
  $response = $controller->prepare_response_for_collection( $data );

  return new WP_REST_Response( $response );
}

/**
 * Returns a post or page given a slug. Returns false if no post matches.
 *
 * @param str $slug Slug
 * @param str $type Valid values are 'post' or 'page'
 * @return Post
 */
function get_content_by_slug( $slug, $type = 'post' ) {
  $content_in_array = in_array(
    $type,
    [
      'post',
      'page',
    ],
    true
  );
  if ( ! $content_in_array ) {
    $type = 'post';
  }
  $args = [
    'name'        => $slug,
    'post_type'   => $type,
    'post_status' => 'publish',
    'numberposts' => 1,
  ];

  // phpcs:ignore WordPress.VIP.RestrictedFunctions.get_posts_get_posts
  $post_search_results = get_posts( $args );

  if ( !$post_search_results ) { // Maybe the slug changed
    // check wp_postmeta table for old slug
    $args = [
      // phpcs:ignore WordPress.VIP.SlowDBQuery.slow_db_query_meta_query
      'meta_query' => [
        [
          'key' => '_wp_old_slug',
          'value' => $post_slug,
          'compare' => '=',
        ],
      ],
    ];
    $query = new WP_Query( $args );
    $post_search_results = $query->posts;
  }
  if ( isset( $post_search_results[0] ) ) {
    return $post_search_results[0];
  }
  return false;
}

/**
 * Respond to a REST API request to get a post's latest revision.
 * * Requires a valid _wpnonce on the query string
 * * User must have 'edit_posts' rights
 * * Will return draft revisions of even published posts
 *
 * @param  WP_REST_Request $request Rest request.
 * @return WP_REST_Response
 */
function rest_get_post_preview( WP_REST_Request $request ) {

  $post_id = $request->get_param( 'id' );
  // Revisions are drafts so here we remove the default 'publish' status
  remove_action( 'pre_get_posts', 'set_default_status_to_publish' );
  $check_enabled = [
    'check_enabled' => false,
  ];
  if ( $revisions = wp_get_post_revisions( $post_id, $check_enabled ) ) {
    $last_revision = reset( $revisions );
    $rev_post = wp_get_post_revision( $last_revision->ID );
    $controller = new WP_REST_Posts_Controller( 'post' );
    $data = $controller->prepare_item_for_response( $rev_post, $request );
  } elseif ( $post = get_post( $post_id ) ) { // There are no revisions, just return the saved parent post
    $controller = new WP_REST_Posts_Controller( 'post' );
    $data = $controller->prepare_item_for_response( $post, $request );
  } else {
    $not_found = [
      'status' => 404,
    ];
    $error = new WP_Error(
      'rest_get_post_preview',
      'Post ' . $post_id . ' does not exist',
      $not_found
    );
    return $error;
  }
  $response = $controller->prepare_response_for_collection( $data );
  return new WP_REST_Response( $response );
}
