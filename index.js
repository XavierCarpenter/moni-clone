window.onscroll = () => {
  const nav = document.querySelector("#navbar");
  if (this.scrollY <= 10) nav.className = "";
  else nav.className = "scroll btn-scroll";
};

// window.onscroll = () => {
//   const nav = document.querySelector("#navbar");
//   if (this.scrollY <= 10) {
//     $(".logo img").attr(
//       "src",
//       "https://monimymonidotcomprdsa.blob.core.windows.net/sitefinity/images/default-source/landing-page/moni-logo-w.png?sfvrsn=d76be1e6_2"
//     );
//   } else {
//     $(".logo img").attr(
//       "src",
//       "https://monimymonidotcomprdsa.blob.core.windows.net/sitefinity/images/default-source/landing-page/moni-logo-c.png?sfvrsn=3064e1e6_2"
//     );
//   }
// };
