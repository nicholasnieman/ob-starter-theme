<?php
/* Template Name: Home */
get_header();
?>
	
	<main id="primary" class="site-main">
		<div id="cta-section" class="width-container clearfix">
			<div id="hero-cta">
				<h1 id="hero-text">Digital Marketing Experts<br>for Mental Health<br>Professionals</h1> 
				<a id="hero-cta-btn" href="#work-with-us">Schedule Free Consultation</a>
			</div>
			<?php echo file_get_contents( get_stylesheet_directory_uri() . '/assets/svg/hero.svg' ); ?>
		</div>
	</main><!-- #main -->

<?php
get_footer();
