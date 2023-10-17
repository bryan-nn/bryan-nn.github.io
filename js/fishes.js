fish();
function fish() {
    return (
      $("#footer-wrap").css({
        position: "absolute",
        "text-align": "center",
        inset: "37px 37px 37px 37px",
      }),
      $("footer").append(
        '<div class="container" id="jsi-flying-fish-container" ></div>'
      ),
      $("body").append(
        '<script src="https://zm-blog.oss-cn-hangzhou.aliyuncs.com/web-assets/fish.js"></script>'
      ),
      this
    );
  }
