<article class="uk-article" <?php if ($permalink) echo 'data-permalink="'.$permalink.'"'; ?>>

	<?php if ($image && $image_alignment == 'none') : ?>
		<?php if ($url) : ?>
			<a class="tm-featured-image" href="<?php echo $url; ?>" title="<?php echo $image_caption; ?>"><img src="<?php echo $image; ?>" alt="<?php echo $image_alt; ?>"></a>
		<?php else : ?>
			<span class="tm-featured-image"><img src="<?php echo $image; ?>" alt="<?php echo $image_alt; ?>"></span>
		<?php endif; ?>
	<?php endif; ?>

	<?php if ($title) : ?>
	<h1 class="uk-article-title">
		<?php if ($url && $title_link) : ?>
			<a href="<?php echo $url; ?>" title="<?php echo $title; ?>"><?php echo $title; ?></a>
		<?php else : ?>
			<?php echo $title; ?>
		<?php endif; ?>
	</h1>
	<?php endif; ?>

	<?php echo $hook_aftertitle; ?>

	<?php if ($image && $image_alignment != 'none') : ?>
		<?php if ($url) : ?>
			<a class="uk-align-<?php echo $image_alignment; ?>" href="<?php echo $url; ?>" title="<?php echo $image_caption; ?>"><img src="<?php echo $image; ?>" alt="<?php echo $image_alt; ?>"></a>
		<?php else : ?>
			<img class="uk-align-<?php echo $image_alignment; ?>" src="<?php echo $image; ?>" alt="<?php echo $image_alt; ?>">
		<?php endif; ?>
	<?php endif; ?>

	<?php echo $hook_beforearticle; ?>

	<div>
		<?php echo $article; ?>
	</div>

	<?php if ($tags) : ?>
	<p><?php echo JText::_('TPL_WARP_TAGS').': '.$tags; ?></p>
	<?php endif; ?>

	<?php if ($more) : ?>
	<p class="tm-more">
		<a href="<?php echo $url; ?>" title="<?php echo $title; ?>"><?php echo $more; ?></a>
	</p>
	<?php endif; ?>

	<?php if ($author || $date || $category) : ?>
	<div class="tm-article-meta">

		<?php if ($date) : ?>
		<div class="tm-article-date">
			<?php $date = printf('<span class="tm-article-date-day">'.JHtml::_('date', $date, JText::_('d')).'</span>'.'<span class="tm-article-date-month">'.JHtml::_('date', $date, JText::_('F')).'</span>'.'<span class="tm-article-date-year">'.JHtml::_('date', $date, JText::_('Y')).'</span>'); ?>
		</div>
		<?php endif; ?>

		<?php if ($author) : ?>
		<div class="tm-article-author">
			<span>
				<?php $author = printf(($author && $author_url) ? '<a href="'.$author_url.'">'.$author.'</a>' : $author); ?>
			</span>
		</div>
		<?php endif; ?>

		<?php if ($category) : ?>
		<div class="tm-article-category">
			<span>
				<?php $category = printf(($category && $category_url) ? '<a href="'.$category_url.'">'.$category.'</a>' : $category); ?>
			</span>
		</div>
		<?php endif; ?>

	</div>
	<?php endif; ?>

	<?php if ($edit) : ?>
	<p><?php echo $edit; ?></p>
	<?php endif; ?>

	<?php if ($previous || $next) : ?>
	<ul class="uk-pagination">
		<?php if ($previous) : ?>
		<li class="uk-pagination-previous">
			<?php echo $previous; ?>
			<i class="uk-icon-angle-double-left"></i>
		</li>
		<?php endif; ?>

		<?php if ($next) : ?>
		<li class="uk-pagination-next">
			<?php echo $next; ?>
			<i class="uk-icon-double-angle-right"></i>
		</li>
		<?php endif; ?>
	</ul>
	<?php endif; ?>

	<?php echo $hook_afterarticle; ?>

</article>