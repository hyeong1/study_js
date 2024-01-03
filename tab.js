const tapButton = $(".tab-button");
const tapContent = $(".tab-content");

$(".list").click(function (e) {
  console.log(e.target.dataset.id);
  const tabNum = e.target.dataset.id;
  openTap(tabNum);
});

function openTap(i) {
  tapButton.removeClass("orange");
  tapButton.eq(i).addClass("orange");
  tapContent.removeClass("show");
  tapContent.eq(i).addClass("show");
}
