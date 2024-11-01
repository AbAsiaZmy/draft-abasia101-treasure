document.addEventListener("DOMContentLoaded", function () {
    // 检查 localStorage 中的进度
    const game1Completed = localStorage.getItem("game1Completed") === "true";
    const game2Completed = localStorage.getItem("game2Completed") === "true";

    // 根据进度解锁按钮
    if (game1Completed) {
        document.getElementById("game2").disabled = false;
    }
    if (game2Completed) {
        Swal.fire({
            title: 'Congratulations!',
            text: 'You have completed all games!',
            icon: 'success',
            confirmButtonText: 'OK'
        });
    }
});

function startGame(level) {
    switch (level) {
        case 1:
            window.location.href = "AsAsia 101/abasia101.html";
            break;
        case 2:
            window.location.href = "Treasure Hunt/index-1.html";
            break;
    }
}