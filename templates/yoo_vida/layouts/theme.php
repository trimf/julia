<?php
/**
* @package   yoo_vida
* @author    YOOtheme http://www.yootheme.com
* @copyright Copyright (C) YOOtheme GmbH
* @license   http://www.gnu.org/licenses/gpl.html GNU/GPL
*/

// get theme configuration
include($this['path']->path('layouts:theme.config.php'));

?>
<!DOCTYPE HTML>
<html lang="<?php echo $this['config']->get('language'); ?>" dir="<?php echo $this['config']->get('direction'); ?>"  data-config='<?php echo $this['config']->get('body_config','{}'); ?>'>

<head>
<?php echo $this['template']->render('head'); ?>
</head>

<body class="<?php echo $this['config']->get('body_classes'); ?>">

	<?php if ($this['widgets']->count('toolbar-l + toolbar-r')) : ?>
	<div class="tm-toolbar uk-clearfix uk-hidden-small">
		<div class="uk-container uk-container-center">

			<?php if ($this['widgets']->count('toolbar-l')) : ?>
			<div class="uk-float-left"><?php echo $this['widgets']->render('toolbar-l'); ?></div>
			<?php endif; ?>

			<?php if ($this['widgets']->count('toolbar-r')) : ?>
			<div class="uk-float-right"><?php echo $this['widgets']->render('toolbar-r'); ?></div>
			<?php endif; ?>
			
		</div>
	</div>
	<?php endif; ?>

	<?php if ($this['widgets']->count('menu + search')) : ?>
	<nav class="tm-navbar-full">
		<div class="uk-container uk-container-center">
			<div class="uk-navbar">

				<?php if ($this['widgets']->count('logo')) : ?>
				<a class="tm-logo uk-navbar-brand uk-visible-large" href="<?php echo $this['config']->get('site_url'); ?>"><?php echo $this['widgets']->render('logo'); ?></a>
				<?php endif; ?>

				<?php if ($this['widgets']->count('menu')) : ?>
				<div class="uk-visible-large">
					<?php echo $this['widgets']->render('menu'); ?>
				</div>
				<?php endif; ?>

				<?php if ($this['widgets']->count('search')) : ?>
				<div class="uk-navbar-flip">
					<div class="uk-navbar-content uk-visible-large"><?php echo $this['widgets']->render('search'); ?></div>
				</div>
				<?php endif; ?>

				<?php if ($this['widgets']->count('offcanvas')) : ?>
				<div class="uk-hidden-large">
					<a href="#offcanvas" class="uk-navbar-toggle" data-uk-offcanvas></a>
				</div>
				<?php endif; ?>

				<?php if ($this['widgets']->count('logo-small')) : ?>
				<div class="uk-navbar-content uk-navbar-center uk-hidden-large"><a class="tm-logo-small" href="<?php echo $this['config']->get('site_url'); ?>"><?php echo $this['widgets']->render('logo-small'); ?></a></div>
				<?php endif; ?>

			</div>
		</div>
	</nav>
	<?php endif; ?>

	<?php if ($this['widgets']->count('top-a + top-b + main-top + main-bottom + sidebar-a + sidebar-b + bottom-a + bottom-b') || $this['config']->get('system_output', true)) : ?>

	<div class="uk-container uk-container-center">
		<div class="tm-container">	

			<div class="tm-block tm-middle uk-grid uk-grid-divider" data-uk-grid-match data-uk-grid-margin>

				<?php if ($this['widgets']->count('main-top + main-bottom') || $this['config']->get('system_output', true)) : ?>
				<div class="<?php echo $columns['main']['class'] ?>">

					<?php if ($this['widgets']->count('top-a')) : ?>
					<section id="tm-top-a" class="tm-block <?php echo $grid_classes['top-a']; ?>" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin><?php echo $this['widgets']->render('top-a', array('layout'=>$this['config']->get('grid.top-a.layout'))); ?></section>
					<?php endif; ?>

					<?php if ($this['widgets']->count('top-b')) : ?>
					<section class="tm-block <?php echo $grid_classes['top-b']; ?>" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin><?php echo $this['widgets']->render('top-b', array('layout'=>$this['config']->get('grid.top-b.layout'))); ?></section>
					<?php endif; ?>

					<?php if ($this['widgets']->count('main-top')) : ?>
					<section class="tm-block <?php echo $grid_classes['main-top']; ?>" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin><?php echo $this['widgets']->render('main-top', array('layout'=>$this['config']->get('grid.main-top.layout'))); ?></section>
					<?php endif; ?>

					<?php if ($this['config']->get('system_output', true)) : ?>
					<main class="tm-content">

						<?php if ($this['widgets']->count('breadcrumbs')) : ?>
						<?php echo $this['widgets']->render('breadcrumbs'); ?>
						<?php endif; ?>

						<?php echo $this['template']->render('content'); ?>

					</main>
					<?php endif; ?>

					<?php if ($this['widgets']->count('main-bottom')) : ?>
					<section class="tm-block <?php echo $grid_classes['main-bottom']; ?>" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin><?php echo $this['widgets']->render('main-bottom', array('layout'=>$this['config']->get('grid.main-bottom.layout'))); ?></section>
					<?php endif; ?>

					<?php if ($this['widgets']->count('bottom-a')) : ?>
					<section class="tm-block <?php echo $grid_classes['bottom-a']; ?>" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin><?php echo $this['widgets']->render('bottom-a', array('layout'=>$this['config']->get('grid.bottom-a.layout'))); ?></section>
					<?php endif; ?>

					<?php if ($this['widgets']->count('bottom-b')) : ?>
					<section class="tm-block <?php echo $grid_classes['bottom-b']; ?>" data-uk-grid-match="{target:'> div > .uk-panel'}" data-uk-grid-margin><?php echo $this['widgets']->render('bottom-b', array('layout'=>$this['config']->get('grid.bottom-b.layout'))); ?></section>
					<?php endif; ?>

					<?php if ($this['widgets']->count('footer + debug') || $this['config']->get('warp_branding', true) || $this['config']->get('totop_scroller', true)) : ?>
					<footer class="tm-footer uk-hidden-small">

						<?php if ($this['config']->get('totop_scroller', true)) : ?>
						<a class="tm-totop-scroller" data-uk-smooth-scroll href="#"></a>
						<?php endif; ?>

						<?php
							echo $this['widgets']->render('footer');
							$this->output('warp_branding');
							echo $this['widgets']->render('debug');
						?>

					</footer>
					<?php endif; ?>

				</div>
				<?php endif; ?>

	            <?php foreach($columns as $name => &$column) : ?>
	            <?php if ($name != 'main' && $this['widgets']->count($name)) : ?>
	            <aside class="<?php echo $column['class'] ?>"><?php echo $this['widgets']->render($name) ?></aside>
	            <?php endif ?>
	            <?php endforeach ?>

			</div>
			<?php endif; ?>
			
		</div>
	</div>

	<?php if ($this['widgets']->count('footer + debug') || $this['config']->get('warp_branding', true) || $this['config']->get('totop_scroller', true)) : ?>
	<footer class="tm-footer tm-footer-small uk-visible-small">

		<?php if ($this['config']->get('totop_scroller', true)) : ?>
		<a class="tm-totop-scroller" data-uk-smooth-scroll href="#"></a>
		<?php endif; ?>

		<?php
			echo $this['widgets']->render('footer');
			$this->output('warp_branding');
			echo $this['widgets']->render('debug');
		?>

	</footer>
	<?php endif; ?>

	<?php echo $this->render('footer'); ?>

	<?php if ($this['widgets']->count('offcanvas')) : ?>
	<div id="offcanvas" class="uk-offcanvas">
		<div class="uk-offcanvas-bar"><?php echo $this['widgets']->render('offcanvas'); ?></div>
	</div>
	<?php endif; ?>

</body>
</html>