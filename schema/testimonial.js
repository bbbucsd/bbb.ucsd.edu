{
  "Main" : {
    "uid" : {
      "type" : "UID",
      "config" : {
        "label" : "Slug"
      }
    },
    "full_name" : {
      "type" : "StructuredText",
      "config" : {
        "single" : "heading1, heading2, heading3, heading4, heading5, heading6",
        "label" : "Full Name"
      }
    },
    "title" : {
      "type" : "Text",
      "config" : {
        "label" : "Title"
      }
    },
    "role_occupation" : {
      "type" : "Text",
      "config" : {
        "label" : "Role/Occupation"
      }
    },
    "email_address" : {
      "type" : "Text",
      "config" : {
        "label" : "Email Address"
      }
    },
    "website" : {
      "type" : "Link",
      "config" : {
        "label" : "Website"
      }
    },
    "company" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "paragraph, preformatted, heading1, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
        "label" : "Company"
      }
    },
    "picture" : {
      "type" : "Image",
      "config" : {
        "constraint" : {
          "width" : null,
          "height" : null
        },
        "thumbnails" : [ ],
        "label" : "Picture"
      }
    },
    "company_logo" : {
      "type" : "Image",
      "config" : {
        "constraint" : { },
        "thumbnails" : [ ],
        "label" : "Company Logo"
      }
    },
    "body" : {
      "type" : "StructuredText",
      "config" : {
        "multi" : "paragraph, preformatted, heading2, heading3, heading4, heading5, heading6, strong, em, hyperlink, image, embed, list-item, o-list-item, o-list-item",
        "label" : "Body"
      }
    }
  },
  "Meta" : {
    "body1" : {
      "type" : "Slices",
      "fieldset" : "Slice zone",
      "config" : {
        "choices" : {
          "front_matter" : {
            "type" : "Slice",
            "fieldset" : "Front Matter",
            "description" : "The web page meta",
            "icon" : "code",
            "display" : "list",
            "non-repeat" : {
              "site_title" : {
                "type" : "Text",
                "config" : {
                  "label" : "Site Title"
                }
              },
              "meta_description" : {
                "type" : "Text",
                "config" : {
                  "label" : "Meta Description"
                }
              },
              "display_in_search_results" : {
                "type" : "Select",
                "config" : {
                  "options" : [ "Yes", "No" ],
                  "default_value" : "Yes",
                  "label" : "Display in Search Results",
                  "placeholder" : "Allow search engines to show this page in search results?"
                }
              },
              "follow_links" : {
                "type" : "Select",
                "config" : {
                  "options" : [ "Yes", "No" ],
                  "default_value" : "Yes",
                  "label" : "Follow Links",
                  "placeholder" : "Should search engines follow links?"
                }
              },
              "meta_robots_advanced" : {
                "type" : "Select",
                "config" : {
                  "options" : [ "None", "No Image Index", "No Archive", "No Index" ],
                  "default_value" : "None",
                  "label" : "Meta Robots Advanced",
                  "placeholder" : "Advanced meta robots settings for this page."
                }
              },
              "canonical_url" : {
                "type" : "Link",
                "config" : {
                  "label" : "Canonical URL",
                  "placeholder" : "Defaults to the current url, set if page is duplicated"
                }
              }
            },
            "repeat" : { }
          },
          "schema___person" : {
            "type" : "Slice",
            "fieldset" : "Schema > Person",
            "description" : "Schema Person Configuration",
            "icon" : "face",
            "display" : "list",
            "non-repeat" : {
              "schema_person_name" : {
                "type" : "Text",
                "config" : {
                  "label" : "Schema Person Name"
                }
              },
              "schema_person_url" : {
                "type" : "Link",
                "config" : {
                  "label" : "Schema Person URL"
                }
              },
              "schema_person_image" : {
                "type" : "Image",
                "config" : {
                  "constraint" : { },
                  "thumbnails" : [ ],
                  "label" : "Schema Person Image"
                }
              }
            },
            "repeat" : {
              "schema_person_same_as_link" : {
                "type" : "Link",
                "config" : {
                  "label" : "Schema Person Same As Link"
                }
              }
            }
          }
        }
      }
    }
  }
}
