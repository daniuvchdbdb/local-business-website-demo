const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  }
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

document.querySelector("#demo-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const status = document.querySelector("#form-status");
  status.textContent = "演示提交成功：正式项目可接入微信、邮件、表单或客户现有系统。";
  event.currentTarget.reset();
});
