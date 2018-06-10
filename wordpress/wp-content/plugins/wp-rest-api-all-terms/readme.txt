=== Plugin Name ===
Contributors: Andrew MAGIK
Tags: wp-api, api, rest-api, taxonomies, all taxonomies, terms, all terms, categories, tags, json, wp-json, custom taxonomy, custom taxonomies, Andrew MAGIK, Andrew MAGIK REST API
Requires at least: 4.4
Tested up to: 4.4.1
Stable tag: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

This plugin include all existing terms into separate WordPress REST API (v2) endpoint.

== Description ==

This plugin will add separate WordPress REST API (v2) endpoint, with all available terms (all used categories, tags and custom taxonomies).
It is very useful when you need to create some filters into your app, with lists of all available terms.

For example what can you get, using `wp-json/wp/v2/all-terms` request (where *categories* and *tags* - standart taxonomies, and *technologies* - custom created taxonomy):

`{
	categories: [
		{
			term_id: 9,
			name: "Downloads",
			slug: "downloads",
			term_group: 0,
			term_taxonomy_id: 9,
			taxonomy: "category",
			description: "",
			parent: 0,
			count: 1,
			filter: "raw"
		},
			term_id: 1,
			name: "Uncategorized",
			slug: "uncategorized",
			term_group: 0,
			term_taxonomy_id: 1,
			taxonomy: "category",
			description: "",
			parent: 0,
			count: 4,
			filter: "raw"
		},
		{
			term_id: 3,
			name: "Wordpress",
			slug: "wordpress",
			term_group: 0,
			term_taxonomy_id: 3,
			taxonomy: "category",
			description: "",
			parent: 0,
			count: 2,
			filter: "raw"
		}
	],
	tags: [
		{
			term_id: 16,
			name: "First tag",
			slug: "first-tag",
			term_group: 0,
			term_taxonomy_id: 16,
			taxonomy: "post_tag",
			description: "",
			parent: 0,
			count: 1,
			filter: "raw"
		},
		{
			term_id: 17,
			name: "Second tag",
			slug: "second-tag",
			term_group: 0,
			term_taxonomy_id: 17,
			taxonomy: "post_tag",
			description: "",
			parent: 0,
			count: 1,
			filter: "raw"
		}
	],
	technologies: [
		{
			term_id: 15,
			name: "jQuery",
			slug: "jquery",
			term_group: 0,
			term_taxonomy_id: 15,
			taxonomy: "technologies",
			description: "",
			parent: 0,
			count: 1,
			filter: "raw"
		},
		{
			term_id: 14,
			name: "Wordpress",
			slug: "wordpress",
			term_group: 0,
			term_taxonomy_id: 14,
			taxonomy: "technologies",
			description: "",
			parent: 0,
			count: 1,
			filter: "raw"
		}
	]
}`

Check my other useful rest-api plugins: [https://wordpress.org/plugins/tags/andrew-magik-rest-api](https://wordpress.org/plugins/tags/andrew-magik-rest-api).


== Installation ==

1. Double check you have the WordPress REST (v2) API installed and active
1. Upload the plugin folder to the `/wp-content/plugins/` directory, or install the plugin through the WordPress plugins screen directly.
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==

= What is the URL of this new WordPress REST API (v2) endpoint? =
You get get all available terms using GET request:
`http://yoursite.name/wp-json/wp/v2/all-terms`

= When this plugin is useful? =
This plugin is very useful when you want to create filters, or lists of all available categories/tags (for example tag cloud).

= Do you have other useful REST-API plugins? =
Yes, I have. You can check them by tag: [https://wordpress.org/plugins/tags/andrew-magik-rest-api](https://wordpress.org/plugins/tags/andrew-magik-rest-api).


== Changelog ==

= 1.0 =
* Initial release!

