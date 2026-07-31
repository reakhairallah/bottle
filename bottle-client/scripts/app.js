// THROW MODAL: open and close buttons
const addBtn = document.getElementById("add-btn");
const cancelBtn = document.getElementById("cancel-btn");
const throwModal = document.getElementById("throw-modal");

addBtn.addEventListener("click", () => {
    throwModal.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => {
    throwModal.classList.add("hidden");
});


// THROW MODAL: character count
const throwTextArea = document.getElementById("throw-textarea");
const throwCharCount = document.getElementById("throw-char-count");

throwTextArea.addEventListener("input", () => {
    throwCharCount.textContent = throwTextArea.value.length ;
});


// THROW MODAL: throw button
const throwBtn = document.getElementById("throw-btn");

throwBtn.addEventListener("click", () => {
    console.log("throw-textarea: "+ throwTextArea.value);
});


// DRAW MODAL: open and close buttons
const bottleCard = document.querySelectorAll(".bottle-card");
const drawModal = document.getElementById("draw-modal");
const closeBtn = document.getElementById("close-bottle-btn");

bottleCard.forEach(card => {
    card.addEventListener("click", () => {
        drawModal.classList.remove("hidden");
    });
});

closeBtn.addEventListener("click", () => {
    drawModal.classList.add("hidden");
});


// DRAW MODAL: character count
const markTextArea = document.getElementById("mark-textarea");
const markCharCount = document.getElementById("mark-char-count");

markTextArea.addEventListener("input", () => {
    markCharCount.textContent = markTextArea.value.length ;
});

// DRAW MODAL: post button
const postBtn = document.getElementById("post-mark-btn");

postBtn.addEventListener("click", () => {
    console.log("mark-textarea: "+ markTextArea.value);
});