// ページ上部へ戻るボタン
const btn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
});

btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// ローディングアニメーション
window.addEventListener("load", () => {
    const loading = document.querySelector(".loading");
    if (loading) {
        loading.style.opacity = "0";
        loading.style.pointerEvents = "none";
        setTimeout(() => {
            loading.style.display = "none";
        }, 500); // フェードアウトの時間と合わせる
    }
});

// inviewアニメーション
document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(".inview");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("mov");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    targets.forEach(target => observer.observe(target));
});
