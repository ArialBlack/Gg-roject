<?php

/**
 * @file
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
    <a href="http://www.youtube.com/embed/[field_youtube]?rel=0&amp;wmode=transparent&width=800&height=600&iframe=true" title="[title]" class="colorbox-load" data-colorbox-gallery="gallery-all-g_cYXFCdGzg">[field_image]<h3>[title]</h3></a>
    <a class="colorbox-load" href="http://player.vimeo.com/video/210910471?width=400&height=225&iframe=true">Play vimeo video</a>
 * @ingroup views_templates
 */
?>

<?php if (isset($fields['field_youtube'])): ?>
  <?php
    $youtube_id = strip_tags($fields['field_youtube']->content);
  ?>
  <div class="views-field views-field-nothing">
    <span class="field-content">
      <a href="http://www.youtube.com/embed/<?php print $youtube_id; ?>?rel=0&amp;wmode=transparent&width=800&height=600&iframe=true" title="<?php print render($fields['title']->raw); ?>" class="colorbox-load">
        <?php print render($fields['field_image']->content); ?>
        <h3><?php print render($fields['title']->raw); ?></h3>
      </a>
    </span>
  </div>
<?php endif; ?>

<?php if (isset($fields['field_vimeo'])): ?>
  <?php
    $vimeo_link = strip_tags($fields['field_vimeo']->content);
    $vimeo_id = substr($vimeo_link, strrpos($vimeo_link, '/') + 1);
  ?>
  <div class="views-field views-field-nothing">
    <span class="field-content">
      <a class="colorbox-load" href="http://player.vimeo.com/video/<?php print $vimeo_id; ?>?width=800&height=600&iframe=true">
        <?php print render($fields['field_image']->content); ?>
        <h3><?php print render($fields['title']->raw); ?></h3>
      </a>
    </span>
  </div>
<?php endif; ?>
