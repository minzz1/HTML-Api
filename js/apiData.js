fetch(
  "https://api.odcloud.kr/api/15052836/v1/uddi:2253111c-b6f3-45ad-9d66-924fd92dabd7?page=1&perPage=1000&serviceKey=tmHRWRTW6FWDs2k%2B%2FyLFm%2FKcIuW8SKAoBCPZNuOtAD83W7hto7gTf0rT7b6%2BzBlgPEi9PLeKTYGJUOCCLQO1Kg%3D%3D"
)
  .then((res) => res.json())
  .then((data) => {
    localStorage.setItem("addressArray", JSON.stringify(data));
    console.log(data);
  });
