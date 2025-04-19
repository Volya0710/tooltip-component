class GlobalTooltip extends HTMLElement {
  connectedCallback() {
    this.style.position = "absolute";
    this.style.width = "257px";
    this.style.height = "160px";
    this.style.borderRadius = "15px";
    this.style.border = "2px solid white";
    this.style.boxShadow = "0 0 20px #EC6427";
    this.style.background = "rgba(37, 37, 37, 0.1)";
    this.style.backdropFilter = "blur(8px)";
    this.style.padding = "10px";
    this.style.zIndex = "9999";
    this.style.display = "none";
    this.style.transition = "opacity 0.3s ease";

    this.innerHTML = `
      <img id="tooltip-img" style="width:226px;height:97px;border-radius:8px;object-fit:cover;margin-bottom:8px;" />
      <p id="tooltip-text" style="font-size:14px;color:white;text-align:center;margin:0;"></p>
    `;

    window.addEventListener("message", (e) => {
      if (e.data && e.data.img) {
        this.querySelector("#tooltip-img").src = e.data.img;
        this.querySelector("#tooltip-text").innerText = e.data.text;
        this.style.left = e.data.x + 20 + 'px';
        this.style.top = e.data.y + 20 + 'px';
        this.style.display = "block";
        this.style.opacity = "1";
      }

      if (e.data === "hide-tooltip") {
        this.style.opacity = "0";
        this.style.display = "none";
      }
    });
  }
}
customElements.define("global-tooltip", GlobalTooltip);
// JavaScript Document