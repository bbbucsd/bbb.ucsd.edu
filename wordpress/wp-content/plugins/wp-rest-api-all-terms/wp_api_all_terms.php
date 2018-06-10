<?php

/*
 Plugin Name: WP REST API - All Terms
 Plugin URI: http://magiks.ru
 Description: This plugin include all existing terms into separate rest api end-point.
 Version: 1.0
 Author: Andrew MAGIK
 Author URI: http://magiks.ru/
 */


class all_terms
{
    public function __construct()
    {
        $version = '2';
        $namespace = 'wp/v' . $version;
        $base = 'all-terms';
        register_rest_route($namespace, '/' . $base, array(
            'methods' => 'GET',
            'callback' => array($this, 'get_all_terms'),
        ));
    }

    public function get_all_terms($object)
    {
        $return = array();
        $return['categories'] = get_terms('category');
        $return['tags'] = get_terms('post_tag');
        // Get taxonomies
        $args = array(
            'public' => true,
            '_builtin' => false
        );
        $output = 'names'; // or objects
        $operator = 'and'; // 'and' or 'or'
        $taxonomies = get_taxonomies($args, $output, $operator);
        foreach ($taxonomies as $key => $taxonomy_name) {
            $return[$taxonomy_name] = get_terms($taxonomy_name);
        }
        return new WP_REST_Response($return, 200);
    }
}

add_action('rest_api_init', function () {
    $all_terms = new all_terms;
});
