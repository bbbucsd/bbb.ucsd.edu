<?php

class Table_Of_Contents {

	/**
	 * Counts the occurence of header elements in Wordpress content
	 *
	 * @param type $content
	 * @return null|boolean|array
	 */
	static function has_toc($tiers, $content) {
		$pattern = '/<h[2-' . $tiers . ']*[^>]*>(.*?)<\/h([2-' . $tiers . '])>/';
		$return = array();
		if (empty($content))
			return null;

		if (!preg_match_all($pattern, $content, $return)) {
			return false;
		}
		return $return;
	}

	/**
	 * Generates a table of content only when singular pages are being viewed
	 *
	 * @param type $tiers
	 * @param type $text
	 */
	static function generate_table_of_contents($tiers, $content, $draw = TRUE, $return = array()) {

		//if (!is_singular())
			//return $content;

		// numbers on or off?
		$num_on = false;
    $toc = '';

		$content = $toc . $content;
		$searches = array();
		$replaces = array();
		$return = (is_array($return) && !empty($return) ) ? $return : Table_Of_Contents::has_toc($tiers, $content);

		if ($draw && !empty($return)) {
      $toc = '<div class="toc bg-secondary text-light">';
      $toc .= '<h4 class="text-info mt-0">Quick Navigation</h4>';

			$toc .= "<ul class=\"parent p-0 text-light\">";
			$tags = reset($return);
			$titles = $return[1];
			$levels = end($return);
			$_level = 2;
			$chapters = array('0','0','0','0','0','0');

			$count = 0;
			foreach ($tags as $i => $htag) {
				$count++;
				$attributes = array();
				$href = $count;

				$newId = 'id="' . $href . '"';
				$newhtag = '><span style="position: absolute; margin-top: -60px;" ' .$newId. '></span>';
				$htagr = str_replace('>' . $titles[$i], "\t" . $newhtag  . $titles[$i], $htag);
				$searches[] = $htag;
				$replaces[] = $htagr;


				if ((int)$levels[$i] === (int)$_level) {
					if($num_on){
						$chapters[$_level-1] = ((int)$chapters[$_level-1]+1);
						$chapter = implode('.', array_slice($chapters, 1, ($levels[$i]-1)  ) );
						$toc .= '<li><span>' . strval($chapter) . '</span> <a href="#' . $href . '" class="text-light">' . $titles[$i] . '</a></li>';
					}else{
						$toc .= '<li><a href="#' . $href . '" class="text-light">' . $titles[$i] . '</a></li>';
					}

				}

				if ($levels[$i] > $_level) {
					$_steps = ((int) $levels[$i] - (int) $_level);

					for ($j = 0; $j < $_steps; $j++) {
						$toc .= '<ul class="continue text-light">';
						$chapters[$levels[$i]-1+$j] = (int)$chapters[$levels[$i]-1+$j]+1;
						$_level++;
					}
					$chapter = implode('.', array_slice($chapters, 1, ($levels[$i]-1)  ) );

					if ($num_on) {
						$toc .= '<li><span>' . strval($chapter) . '</span> <a href="#' . $href . '" class="text-light">' . $titles[$i] . '</a></li>';
					} else {
						$toc .= '<li><a href="#' . $href . '" class="text-light">' . $titles[$i] . '</a></li>';
					}

				}

				if ($levels[$i] < $_level) {

					$_steps = ((int) $_level - (int) $levels[$i]);
					$chapters[$levels[$i]-1] = (int)$chapters[$levels[$i]-1]+1;
					$_olevel = $_level;
					for ($j = 0; $j < $_steps; $j++) {
						$chapters[$levels[$i]+$j] = 0;
						$toc .= '</ul>';
						$_level--;
					}

					$chapters[$_olevel-1] = 0;
					$chapter = implode('.', array_slice($chapters, 1, ($levels[$i]-1)  ) );

					if($num_on){
						$toc .= '<li><span>' . strval($chapter) . '</span> <a href="#' . $href . '" class="text-light">' . $titles[$i] . '</a></li>';
					}else{
						$toc .= '<li><a href="#' . $href . '" class="text-light">' . $titles[$i] . '</a></li>';
					}

				}
			}
			$toc .= '</ul>';
			$toc .= '</div>';
			$content = str_replace($searches, $replaces, $content);
			$content = str_replace( '[toc]', $toc, $content );
		}

		return $content;
	}

	/**
	 * Appends the table of content to the $content
	 * AKA. Executes our filter
	 *
	 * @param type $content
	 * @return type
	 */
	static function write_toc($content) {
		$content = Table_Of_Contents::generate_table_of_contents(4, $content, TRUE);
		return $content;
	}

}

add_filter('the_content', array('Table_Of_Contents', 'write_toc'));
