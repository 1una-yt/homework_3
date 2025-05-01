// 控制密碼顯示/隱藏的功能
document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});

// 隱藏錯誤訊息（初始狀態）
document.getElementById('error-message').style.display = 'none';

// 表單提交事件處理
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // 表單驗證
    let isValid = true;

    // 驗證電子郵件/用戶名和密碼
    if (!email.trim() || !password.trim()) {
        isValid = false;
        // 顯示錯誤訊息
        document.getElementById('error-message').style.display = 'flex';
    } else {
        // 隱藏錯誤訊息
        document.getElementById('error-message').style.display = 'none';
    }

    if (isValid) {
        // 在實際應用中，這裡會發送數據到服務器
        console.log('登入資訊：', { email, password });

        // 顯示釣魚網站警告
        alert('提醒：這是一個練習用途的釣魚網站示範，不會實際送出您的資料');

        // 在實際的釣魚網站中，可能會重定向到真實的網站
        // window.location.href = "https://open.spotify.com/";
    }
});

// 為社交媒體登入按鈕添加點擊事件
const socialButtons = document.querySelectorAll('.login-button');
socialButtons.forEach(button => {
    button.addEventListener('click', function() {
        alert('提醒：這是一個社交媒體登入模擬。在實際的應用中，這會重定向到相應的授權頁面。');
    });
});

// 忘記密碼和註冊連結的點擊事件
document.querySelector('.forgot-password a').addEventListener('click', function(event) {
    event.preventDefault();
    alert('提醒：這是忘記密碼功能的模擬。在實際應用中，這會重定向到密碼重設頁面。');
});

document.querySelector('.signup-link a').addEventListener('click', function(event) {
    event.preventDefault();
    alert('提醒：這是註冊功能的模擬。在實際應用中，這會重定向到註冊頁面。');
});