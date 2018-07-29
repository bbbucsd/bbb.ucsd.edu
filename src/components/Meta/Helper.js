import './Fragments'

class MetaHelper {
  static FrontMatterFields(data) {
    return {
      site_title: data.site_title,
      meta_description: data.meta_description,
      meta_robots_advanced: data.meta_robots_advanced,
      display_in_search_results: data.display_in_search_results
    }
  }
}

export default MetaHelper;
