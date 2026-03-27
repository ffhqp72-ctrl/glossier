// index.html에만 들어가는 동적전용



** (아래) 셀럽픽 동적 요소 by.gpt **
// // 요소 가져오기
// const thumbnails = document.querySelectorAll('#celeb_pick .thumbnail button');
// const contents = document.querySelectorAll('#celeb_pick .contents');


// // ✅ 초기 상태 세팅
// function init() {
//     contents.forEach(content => content.style.display = 'none');

//     const firstContent = document.querySelector('.contents[data-content="0"]');
//     if (firstContent) {
//         firstContent.style.display = 'block';

//         const products = firstContent.querySelectorAll('.cp_product');
//         products.forEach(p => p.style.display = 'none');

//         const defaultProduct = firstContent.querySelector('.cp_product.glossier_you');
//         if (defaultProduct) defaultProduct.style.display = 'block';
//     }
// }


// // ✅ thumbnail 클릭 → contents 변경
// thumbnails.forEach(btn => {
//     btn.addEventListener('click', () => {
//         const target = btn.dataset.target;

//         contents.forEach(content => content.style.display = 'none');

//         const activeContent = document.querySelector(`.contents[data-content="${target}"]`);
//         if (activeContent) {
//             activeContent.style.display = 'block';

//             // 👉 contents 바뀌면 내부 cp_product 초기화
//             const products = activeContent.querySelectorAll('.cp_product');
//             products.forEach(p => p.style.display = 'none');

//             const firstProduct = products[0];
//             if (firstProduct) firstProduct.style.display = 'block';
//         }
//     });
// });


// // ✅ contents 내부 → cp_product 변경
// contents.forEach(content => {
//     const productButtons = content.querySelectorAll('.main_img button');
//     const products = content.querySelectorAll('.cp_product');

//     productButtons.forEach(btn => {
//         btn.addEventListener('click', () => {
//             const target = btn.dataset.product;

//             products.forEach(p => p.style.display = 'none');

//             const activeProduct = content.querySelector(`.cp_product.${target}`);
//             if (activeProduct) activeProduct.style.display = 'block';
//         });
//     });
// });


// // 실행
// init();