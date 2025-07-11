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

// ローディング完了後に inview を発火
window.addEventListener("load", () => {
    const loading = document.querySelector(".loading");

    if (loading) {
        loading.style.opacity = "0";
        loading.style.pointerEvents = "none";

        setTimeout(() => {
            loading.style.display = "none";

            // ⬇️ ローディング非表示後にinview処理を開始
            startInviewObserver();
        }, 500); // フェードアウト時間に合わせる
    } else {
        // ローディングがない場合も inview は動かす
        startInviewObserver();
    }
});

// inviewアニメーションの初期化関数
function startInviewObserver() {
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
}


// document.addEventListener("DOMContentLoaded", () => {
//     const title = document.getElementById("tit");
//     if (!title) return;

//     const text = title.textContent;
//     title.textContent = "";

//     const len = text.length;

//     for (let i = 0; i < len; i++) {
//         const span = document.createElement("span");
//         span.textContent = text[i];

//         const delay = 0.4 * Math.pow(0.75, len - 1 - i);
//         span.style.animationDelay = `${delay}s`;
//         title.appendChild(span);
//     }
// });