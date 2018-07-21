module.exports = function(migration) {
  const layoutHighlightHeroFeature = migration
    .createContentType("layoutHighlightHeroFeature")
    .name("Layout > Highlight Hero > Feature")
    .description("")
    .displayField("headline");
  layoutHighlightHeroFeature
    .createField("headline")
    .name("Headline")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutHighlightHeroFeature
    .createField("subheadline")
    .name("Subheadline")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutHighlightHeroFeature.changeEditorInterface(
    "headline",
    "singleLine",
    {}
  );
  layoutHighlightHeroFeature.changeEditorInterface(
    "subheadline",
    "singleLine",
    {}
  );
  const layoutLogoBlockInline = migration
    .createContentType("layoutLogoBlockInline")
    .name("Layout > Logo Block Inline")
    .description("")
    .displayField("title");
  layoutLogoBlockInline
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  layoutLogoBlockInline
    .createField("logos")
    .name("Logos")
    .type("Array")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",
      validations: [],
      linkType: "Asset"
    });

  layoutLogoBlockInline.changeEditorInterface("title", "singleLine", {});
  layoutLogoBlockInline.changeEditorInterface("logos", "assetLinksEditor", {});
  const page = migration
    .createContentType("page")
    .name("Page")
    .description("")
    .displayField("title");

  page
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        unique: true
      }
    ])
    .disabled(false)
    .omitted(false);

  page
    .createField("seo")
    .name("SEO")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["layoutSeo"]
      }
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  page
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  page
    .createField("hero")
    .name("Hero")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          min: 1,
          max: 1
        }
      }
    ])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["layoutHighlightHero", "standardHero"]
        }
      ],

      linkType: "Entry"
    });

  page
    .createField("sections")
    .name("Sections")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: [
            "layoutDoubleBlockSection",
            "layoutLogoBlock",
            "layoutLogoBlockInline",
            "layoutSingleImageSection"
          ]
        }
      ],

      linkType: "Entry"
    });

  page.changeEditorInterface("slug", "slugEditor", {});
  page.changeEditorInterface("seo", "entryLinkEditor", {});
  page.changeEditorInterface("title", "singleLine", {});

  page.changeEditorInterface("hero", "entryLinksEditor", {
    bulkEditing: false
  });

  page.changeEditorInterface("sections", "entryLinksEditor", {
    bulkEditing: false
  });

  const layoutSeoFacebook = migration
    .createContentType("layoutSeoFacebook")
    .name("Layout > SEO > Facebook")
    .description("")
    .displayField("pageTitle");
  layoutSeoFacebook
    .createField("pageTitle")
    .name("Page Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutSeoFacebook
    .createField("pageDescription")
    .name("Page Description")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  layoutSeoFacebook
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        assetImageDimensions: {
          width: {
            min: 1200,
            max: null
          },

          height: {
            min: 630,
            max: null
          }
        }
      }
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  layoutSeoFacebook.changeEditorInterface("pageTitle", "singleLine", {});
  layoutSeoFacebook.changeEditorInterface("pageDescription", "singleLine", {});
  layoutSeoFacebook.changeEditorInterface("image", "assetLinkEditor", {});
  const layoutDoubleBlockSection = migration
    .createContentType("layoutDoubleBlockSection")
    .name("Layout > Double Block Section")
    .description("")
    .displayField("headline");
  layoutDoubleBlockSection
    .createField("reverseDirection")
    .name("Reverse Direction")
    .type("Boolean")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutDoubleBlockSection
    .createField("backgroundColor")
    .name("Background Color")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutDoubleBlockSection
    .createField("headline")
    .name("Headline")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutDoubleBlockSection
    .createField("headlineColor")
    .name("Headline Color")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutDoubleBlockSection
    .createField("subheadline")
    .name("Subheadline")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutDoubleBlockSection
    .createField("subheadlineColor")
    .name("Subheadline Color")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutDoubleBlockSection
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  layoutDoubleBlockSection.changeEditorInterface(
    "reverseDirection",
    "boolean",
    {
      trueLabel: "Yes",
      falseLabel: "No"
    }
  );

  layoutDoubleBlockSection.changeEditorInterface(
    "backgroundColor",
    "singleLine",
    {}
  );
  layoutDoubleBlockSection.changeEditorInterface("headline", "singleLine", {});
  layoutDoubleBlockSection.changeEditorInterface(
    "headlineColor",
    "singleLine",
    {}
  );
  layoutDoubleBlockSection.changeEditorInterface(
    "subheadline",
    "singleLine",
    {}
  );
  layoutDoubleBlockSection.changeEditorInterface(
    "subheadlineColor",
    "singleLine",
    {}
  );
  layoutDoubleBlockSection.changeEditorInterface(
    "image",
    "assetLinkEditor",
    {}
  );
  const layoutHighlightHero = migration
    .createContentType("layoutHighlightHero")
    .name("Layout > Highlight Hero")
    .description("")
    .displayField("superheadline");
  layoutHighlightHero
    .createField("heroAsset")
    .name("Hero Asset")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");
  layoutHighlightHero
    .createField("superheadline")
    .name("Superheadline")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutHighlightHero
    .createField("headline")
    .name("Headline")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  layoutHighlightHero
    .createField("features")
    .name("Features")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",

      validations: [
        {
          linkContentType: ["layoutHighlightHeroFeature"]
        }
      ],

      linkType: "Entry"
    });

  layoutHighlightHero.changeEditorInterface("heroAsset", "assetLinkEditor", {});
  layoutHighlightHero.changeEditorInterface("superheadline", "singleLine", {});
  layoutHighlightHero.changeEditorInterface("headline", "singleLine", {});

  layoutHighlightHero.changeEditorInterface("features", "entryLinksEditor", {
    bulkEditing: false
  });

  const layoutSingleImageSection = migration
    .createContentType("layoutSingleImageSection")
    .name("Layout > Single Image Section")
    .description("")
    .displayField("headline");
  layoutSingleImageSection
    .createField("headline")
    .name("Headline")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutSingleImageSection
    .createField("subheadline")
    .name("Subheadline")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  layoutSingleImageSection
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkMimetypeGroup: ["image", "video"]
      }
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  layoutSingleImageSection.changeEditorInterface("headline", "singleLine", {});
  layoutSingleImageSection.changeEditorInterface(
    "subheadline",
    "singleLine",
    {}
  );
  layoutSingleImageSection.changeEditorInterface(
    "image",
    "assetLinkEditor",
    {}
  );
  const legal = migration
    .createContentType("legal")
    .name("Legal")
    .description("")
    .displayField("headline");

  legal
    .createField("slug")
    .name("Slug")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([
      {
        unique: true
      }
    ])
    .disabled(false)
    .omitted(false);

  legal
    .createField("headline")
    .name("Headline")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  legal
    .createField("body")
    .name("Body")
    .type("Text")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  legal.changeEditorInterface("slug", "singleLine", {});
  legal.changeEditorInterface("headline", "singleLine", {});
  legal.changeEditorInterface("body", "markdown", {});
  const layoutSeoTwitter = migration
    .createContentType("layoutSeoTwitter")
    .name("Layout > SEO > Twitter")
    .description("")
    .displayField("pageTitle");
  layoutSeoTwitter
    .createField("pageTitle")
    .name("Page Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutSeoTwitter
    .createField("pageDescription")
    .name("Page Description")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  layoutSeoTwitter
    .createField("image")
    .name("Image")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        assetImageDimensions: {
          width: {
            min: 600,
            max: null
          },

          height: {
            min: 335,
            max: null
          }
        }
      },
      {
        assetFileSize: {
          min: 3145728,
          max: 15728640
        }
      }
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  layoutSeoTwitter.changeEditorInterface("pageTitle", "singleLine", {});
  layoutSeoTwitter.changeEditorInterface("pageDescription", "singleLine", {});
  layoutSeoTwitter.changeEditorInterface("image", "assetLinkEditor", {});
  const layoutSeo = migration
    .createContentType("layoutSeo")
    .name("Layout > SEO")
    .description("")
    .displayField("title");
  layoutSeo
    .createField("title")
    .name("Title")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutSeo
    .createField("pageTitle")
    .name("Page Title")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutSeo
    .createField("pageDescription")
    .name("Page Description")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutSeo
    .createField("pageKeywords")
    .name("Page Keywords")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);

  layoutSeo
    .createField("twitter")
    .name("Twitter")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["layoutSeoTwitter"]
      }
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  layoutSeo
    .createField("facebook")
    .name("Facebook")
    .type("Link")
    .localized(false)
    .required(false)
    .validations([
      {
        linkContentType: ["layoutSeoFacebook"]
      }
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Entry");

  layoutSeo.changeEditorInterface("title", "singleLine", {});
  layoutSeo.changeEditorInterface("pageTitle", "singleLine", {});
  layoutSeo.changeEditorInterface("pageDescription", "singleLine", {});
  layoutSeo.changeEditorInterface("pageKeywords", "singleLine", {});
  layoutSeo.changeEditorInterface("twitter", "entryCardEditor", {});
  layoutSeo.changeEditorInterface("facebook", "entryLinkEditor", {});
  const layoutLogoBlock = migration
    .createContentType("layoutLogoBlock")
    .name("Layout > Logo Block")
    .description("")
    .displayField("headline");
  layoutLogoBlock
    .createField("headline")
    .name("Headline")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);

  layoutLogoBlock
    .createField("logos")
    .name("Logos")
    .type("Array")
    .localized(false)
    .required(false)
    .validations([
      {
        size: {
          min: 6,
          max: 6
        }
      }
    ])
    .disabled(false)
    .omitted(false)
    .items({
      type: "Link",
      validations: [],
      linkType: "Asset"
    });

  layoutLogoBlock
    .createField("ctaLabel")
    .name("CTA Label")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutLogoBlock
    .createField("ctaLink")
    .name("CTA Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  layoutLogoBlock.changeEditorInterface("headline", "singleLine", {});
  layoutLogoBlock.changeEditorInterface("logos", "assetGalleryEditor", {});
  layoutLogoBlock.changeEditorInterface("ctaLabel", "singleLine", {});
  layoutLogoBlock.changeEditorInterface("ctaLink", "singleLine", {});
  const standardHero = migration
    .createContentType("standardHero")
    .name("Layout > Standard Hero")
    .description("")
    .displayField("headline");

  standardHero
    .createField("heroAsset")
    .name("Hero Asset")
    .type("Link")
    .localized(false)
    .required(true)
    .validations([
      {
        linkMimetypeGroup: ["image", "video"]
      }
    ])
    .disabled(false)
    .omitted(false)
    .linkType("Asset");

  standardHero
    .createField("headline")
    .name("Headline")
    .type("Symbol")
    .localized(false)
    .required(true)
    .validations([])
    .disabled(false)
    .omitted(false);
  standardHero
    .createField("subheadline")
    .name("Subheadline")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  standardHero
    .createField("ctaLabel")
    .name("CTA Label")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  standardHero
    .createField("ctaLink")
    .name("CTA Link")
    .type("Symbol")
    .localized(false)
    .required(false)
    .validations([])
    .disabled(false)
    .omitted(false);
  standardHero.changeEditorInterface("heroAsset", "assetLinkEditor", {});
  standardHero.changeEditorInterface("headline", "singleLine", {});
  standardHero.changeEditorInterface("subheadline", "singleLine", {});
  standardHero.changeEditorInterface("ctaLabel", "singleLine", {});
  standardHero.changeEditorInterface("ctaLink", "singleLine", {});
};
