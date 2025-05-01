// 在文檔加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 密碼顯示/隱藏元素
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    const eyeSlashIcon = document.getElementById('eyeSlashIcon');
    const errorBanner = document.getElementById('errorBanner');
    const errorMessage = document.getElementById('errorMessage');
    const emailInput = document.getElementById('email');

    // 初始狀態下，密碼是隱藏的，所以顯示帶斜線的眼睛圖標
    eyeIcon.style.display = 'none';
    eyeSlashIcon.style.display = 'inline';

    // 密碼顯示/隱藏的切換功能
    togglePassword.addEventListener('click', function() {
        if (passwordInput.getAttribute('type') === 'password') {
            // 切換為顯示密碼（文字明文顯示）
            passwordInput.setAttribute('type', 'text');
            // 顯示正常的眼睛圖標（表示可以看到密碼）
            eyeIcon.style.display = 'inline';
            eyeSlashIcon.style.display = 'none';
        } else {
            // 切換為隱藏密碼（文字顯示為點或星號）
            passwordInput.setAttribute('type', 'password');
            // 顯示眼睛上有斜線的圖標（表示看不到密碼）
            eyeIcon.style.display = 'none';
            eyeSlashIcon.style.display = 'inline';
        }
    });

    // 表單提交事件處理
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        // 檢查是否輸入了用户名和密碼
        if (!email.trim() || !password.trim()) {
            // 顯示紅色錯誤橫幅
            errorBanner.style.display = 'flex';
            errorMessage.textContent = '用戶名稱或密碼不正確。';

            // 如果欄位為空，添加紅色邊框提示
            if (!email.trim()) {
                emailInput.style.borderColor = '#e91429';
            } else {
                emailInput.style.borderColor = '';
            }

            if (!password.trim()) {
                passwordInput.style.borderColor = '#e91429';
            } else {
                passwordInput.style.borderColor = '';
            }

            return;
        }

        // 如果輸入了用户名和密碼，則顯示釣魚網站警告
        showPhishingWarning();
    });

    // 當用户開始輸入時，移除紅色邊框
    emailInput.addEventListener('input', function() {
        if (this.value.trim()) {
            this.style.borderColor = '';

            // 如果兩個欄位都有值，隱藏錯誤橫幅
            if (passwordInput.value.trim()) {
                errorBanner.style.display = 'none';
            }
        }
    });

    passwordInput.addEventListener('input', function() {
        if (this.value.trim()) {
            this.style.borderColor = '';

            // 如果兩個欄位都有值，隱藏錯誤橫幅
            if (emailInput.value.trim()) {
                errorBanner.style.display = 'none';
            }
        }
    });

    // 為登入按鈕添加點擊事件
    document.querySelector('.submit-button').addEventListener('click', function(event) {
        event.preventDefault();

        // 檢查是否輸入了用户名和密碼
        const email = emailInput.value;
        const password = passwordInput.value;

        if (!email.trim() || !password.trim()) {
            // 顯示紅色錯誤橫幅
            errorBanner.style.display = 'flex';
            errorMessage.textContent = '用戶名稱或密碼不正確。';

            // 如果欄位為空，添加紅色邊框提示
            if (!email.trim()) {
                emailInput.style.borderColor = '#e91429';
            }

            if (!password.trim()) {
                passwordInput.style.borderColor = '#e91429';
            }

            return;
        }

        // 如果輸入了用户名和密碼，則顯示釣魚網站警告
        showPhishingWarning();
    });

    // 顯示釣魚網站警告的函數
    function showPhishingWarning() {
        // 創建一個模態對話框元素
        const warningModal = document.createElement('div');
        warningModal.style.position = 'fixed';
        warningModal.style.top = '0';
        warningModal.style.left = '0';
        warningModal.style.width = '100%';
        warningModal.style.height = '100%';
        warningModal.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        warningModal.style.display = 'flex';
        warningModal.style.justifyContent = 'center';
        warningModal.style.alignItems = 'center';
        warningModal.style.zIndex = '1000';

        // 創建警告內容
        const warningContent = document.createElement('div');
        warningContent.style.backgroundColor = '#e91429';
        warningContent.style.color = 'white';
        warningContent.style.padding = '30px';
        warningContent.style.borderRadius = '8px';
        warningContent.style.maxWidth = '80%';
        warningContent.style.textAlign = 'center';

        // 添加警告圖標
        const warningIcon = document.createElement('div');
        warningIcon.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
        `;
        warningIcon.style.marginBottom = '20px';

        // 添加警告標題
        const warningTitle = document.createElement('h2');
        warningTitle.textContent = '⚠️ 警告：釣魚網站 ⚠️';
        warningTitle.style.fontSize = '24px';
        warningTitle.style.marginBottom = '15px';

        // 添加警告訊息
        const warningMessage = document.createElement('p');
        warningMessage.innerHTML = '這是一個<strong>釣魚網站</strong>，不是真正的Spotify登入頁面！<br>請勿輸入您的真實帳號和密碼，以免個人資料被盜用。';
        warningMessage.style.fontSize = '18px';
        warningMessage.style.marginBottom = '20px';
        warningMessage.style.lineHeight = '1.5';

        // 添加關閉按鈕
        const closeButton = document.createElement('button');
        closeButton.textContent = '我已了解';
        closeButton.style.backgroundColor = 'white';
        closeButton.style.color = 'black';
        closeButton.style.border = 'none';
        closeButton.style.padding = '10px 20px';
        closeButton.style.borderRadius = '500px';
        closeButton.style.fontSize = '16px';
        closeButton.style.fontWeight = 'bold';
        closeButton.style.cursor = 'pointer';

        // 關閉按鈕點擊事件
        closeButton.addEventListener('click', function() {
            document.body.removeChild(warningModal);
        });

        // 組合所有元素
        warningContent.appendChild(warningIcon);
        warningContent.appendChild(warningTitle);
        warningContent.appendChild(warningMessage);
        warningContent.appendChild(closeButton);
        warningModal.appendChild(warningContent);

        // 添加到頁面
        document.body.appendChild(warningModal);
    }

    // 為社交媒體登入按鈕添加點擊事件和重定向功能
    const socialButtons = document.querySelectorAll('.login-button');
    socialButtons.forEach((button) => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            // 顯示釣魚網站警告
            showPhishingWarning();
        });
    });

    // 忘記密碼連結
    document.querySelector('.forgot-password a').addEventListener('click', function(event) {
        event.preventDefault();
        // 顯示釣魚網站警告
        showPhishingWarning();
    });

    // 註冊連結
    document.querySelector('.signup-link a').addEventListener('click', function(event) {
        event.preventDefault();
        // 顯示釣魚網站警告
        showPhishingWarning();
    });
});