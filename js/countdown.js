document.addEventListener("DOMContentLoaded", function() {
    // 目标时间
    var targetDate = new Date("2024-08-22T00:00:00").getTime();

    // 更新倒计时的函数
    function updateCountdown() {
        var now = new Date().getTime();
        var timeDifference = targetDate - now;

        // 计算天、小时、分钟和秒
        var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        // 更新 HTML 元素
        document.querySelector('.days').textContent = days;
        document.querySelector('.hours').textContent = hours;
        document.querySelector('.minutes').textContent = minutes;
        document.querySelector('.seconds').textContent = seconds;

        // 如果倒计时结束
        if (timeDifference < 0) {
            clearInterval(interval);
            document.querySelector('.days').textContent = 0;
            document.querySelector('.hours').textContent = 0;
            document.querySelector('.minutes').textContent = 0;
            document.querySelector('.seconds').textContent = 0;
            // 你可以在这里添加额外的逻辑，比如显示消息等
        }
    }

    // 每秒更新一次倒计时
    var interval = setInterval(updateCountdown, 1000);
});
