const scrollTopBtn = document.getElementById("scrollTopBtn");

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("DOMContentLoaded", () => {
  const now = new Date();
  const footer = document.createElement("footer");
  footer.className = "page-footer";
  footer.textContent = `最後更新：${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  document.querySelector("main").appendChild(footer);
});
