const tapButton = $(".tab-button");
const tapContent = $(".tab-content");
let tapCount = $(".tab-button").length; // html에 있는 탭 버튼의 개수

for (let i = 0; i < tapCount; i++) {
  tapButton.eq(i).on("click", function () {
    tapButton.removeClass("orange");
    tapButton.eq(i).addClass("orange");
    tapContent.removeClass("show");
    tapContent.eq(i).addClass("show");
  });
}
