$(document).ready(function () {
  $("ul.gallery").prettyGallery({
    itemsPerPage: 2,
    animationSpeed: "normal" /* fast/normal/slow */,
    navigation: "top" /* top/bottom/both */,
    of_label: " of " /* The content in the page "1 of 2" */,
    previous_title_label: "Previous page" /* The title of the previous link */,
    next_title_label: "Next page" /* The title of the next link */,
    previous_label: "Previous" /* The content of the previous link */,
    next_label: "Next" /* The content of the next link */,
  });
});
