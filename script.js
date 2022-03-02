let injection_input = document.getElementById("inject");
let xss_input = document.getElementById("xss");
let result_input = document.getElementById("result");
let escaped_input = document.getElementById("escaped");

const escaped = () => {
  let html = xss_input.value;
  let injection = injection_input.value;

  let escaped_html = html.replace("^", injection);

  escaped_input.textContent = escaped_html;
  result_input.innerHTML = escaped_html;

  console.log(escaped_html);
};

injection_input.addEventListener("input", escaped);
xss_input.addEventListener("input", escaped);

escaped();
