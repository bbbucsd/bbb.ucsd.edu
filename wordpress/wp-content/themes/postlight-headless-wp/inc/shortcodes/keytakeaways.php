<?php

function ayb_keytakeaways( $options, $content ) {
  return "<div class='keytakeaways'><h3>Key Takeaways</h3>" . $content . "</div>";
}

add_shortcode('keytakeaways', 'ayb_keytakeaways');
