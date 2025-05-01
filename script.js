// 在文檔加載完成後執行
document.addEventListener('DOMContentLoaded', function() {
    // 密碼顯示/隱藏元素
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    const eyeSlashIcon = document.getElementById('eyeSlashIcon');

    // 密碼顯示/隱藏的切換功能
    togglePassword.addEventListener('click', function() {
        if (passwordInput.getAttribute('type') === 'password') {
            // 切換為顯示密碼
            passwordInput.setAttribute('type', 'text');
            eyeIcon.style.display = 'none';
            eyeSlashIcon.style.display = 'inline';
        } else {
            // 切換為隱藏密碼
            passwordInput.setAttribute('type', 'password');
            eyeIcon.style.display = 'inline';
            eyeSlashIcon.style.display = 'none';
        }
    });

    // 表單提交事件處理
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // 表單驗證
        let isValid = true;
        const errorBanner = document.getElementById('errorBanner');
        const errorMessage = document.getElementById('errorMessage');

        // 驗證電子郵件/用戶名和密碼
        if (!email.trim() || !password.trim()) {
            isValid = false;
            errorBanner.style.display = 'flex';
            errorMessage.textContent = '請輸入您的電子郵件和密碼。';
        } else {
            errorBanner.style.display = 'none';
        }

        if (isValid) {
            // 在實際應用中，這裡會發送數據到服務器
            console.log('登入資訊：', { email, password });

            // 直接跳轉到 Spotify
            window.location.href = "https://open.spotify.com/";
        }
    });

    // 為社交媒體登入按鈕添加點擊事件和重定向功能
    const socialButtons = document.querySelectorAll('.login-button');
    socialButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // 直接跳轉到相應的登入頁面，無需確認對話框
            switch(index) {
                case 0: // Google
                    window.location.href = "https://accounts.google.com/v3/signin/identifier?opparams=%253F&dsh=S-46366472%3A1746112757568662&access_type=offline&client_id=1046568431490-ij1gi5shcp2gtorls09frkc56d4mjbe2.apps.googleusercontent.com&ddm=1&o2v=2&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fgoogle%2Fredirect&response_type=code&scope=profile+email+openid&service=lso&state=AQBeLPeUHqAT2XcBdGoApqdyZvgawDTs7QObkqxbT4Z8I%2FPZb6zj7JhsIy03BBBAzdI38blWBLUZ1c9i7kVWe9nK3mFL%2BE%2FOU3n8ZejSkhHd13yk8CLK1GB099IxuHbfK1GKfqp5Rlb9dS2zeyxTtLT9D9QBBjzmjN9b%2FFn2SF5hc38psbVajFNoULOLvVcd4iplc4JamLv4VBKd2Z1iDhD9TqzGZbahDMVW6P710YxcPHSb1ZYX143u%2FJnPbzvElIVRv2vTBXQu%2FoPMk%2B7Nd8xDzsbmf6hM5XPYfj%2BLzoVJOljLmXDGKDAJowDXeFxw8hDtMdnMBuVumqfl2ttDHDCYsmbio91VgA%3D%3D&flowName=GeneralOAuthFlow";
                    break;
                case 1: // Facebook
                    window.location.href = "https://www.facebook.com/login.php?skip_api_login=1&api_key=174829003346&kid_directed_site=0&app_id=174829003346&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv17.0%2Fdialog%2Foauth%3Fclient_id%3D174829003346%26state%3DAQCWRXzJeZFRQdItCA%252FPMSIJYMJK56R%252BATR%252B%252FdXyQhWRlLZBGbqZPNXT72SPTtSdiMoXZAf3AwziyJ4Ue33AnhDoA41yZL8KfHPO9HX8d2jOlio%252Bjhh1IvDp%252BC92WCHZpTyTNDmJriYw5naREZDArjXZViomI5j5pkv%252BBHmOw%252BAKlwza98ynL2VkqDq%252FlC2FoboG9CY76mzcOwCDm6syVjSzIKZ7TTk5rAdbjHgWgSI4nTLSde%252BDO4Few6SU94GyAarMusXhhw96Q3WiwAGeWu9wBnujISI%252FBJQ9LdGRLmUedahxPftQDgnq3eP2FE5IH5BKOSKWtw2Vdh%252FdawDGhBReZH3TTdgzug%253D%253D%26redirect_uri%3Dhttps%253A%252F%252Faccounts.spotify.com%252Flogin%252Ffacebook%252Fredirect%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D57b9aa84-5157-4f50-93d3-f4465258e78b%26tp%3Dunspecified";
                    break;
                case 2: // Apple
                    window.location.href = "https://appleid.apple.com/auth/authorize?response_type=code&response_mode=form_post&client_id=com.spotify.accounts&state=AQA0fDsrb88N2fSP3bToBOo4ou8LJseEpjpjYoYON99p9JhjCRcnfay%2FMbhJzdCeZM2zvuRXbYj5jezsvnrr3G3ccirluqzfNHNV%2FSPk8krqtEfWUGnYH3RgJAc3zFywZ0%2Fd%2Fzt2Xka2%2FE3ytzEDrsIrgxz7JYB8zWPyAi7TRCQtM4u5fel3mA5G3TWlfSr7KTaij9cvfIbbWhC9B677r51R1cyYouaygu3bjppRLJcgFLdbtJzFRDaplpdVaAs3o%2FN0H7mCrX7c11XYA5dhY4fO96ncgbs6Uh5o8rhUfiG7MmrzQXG6IQHS6w4Y8PcF7FKXL7lF%2BdkCHRgO9J7qGeTwaWOB0zFtLA%3D%3D&scope=name+email&redirect_uri=https%3A%2F%2Faccounts.spotify.com%2Flogin%2Fapple%2Fredirect";
                    break;
            }
        });
    });

    // 忘記密碼連結
    document.querySelector('.forgot-password a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "https://accounts.spotify.com/en/password-reset?flow_ctx=d4cd9996-0bb1-41dd-8934-3cfed04e57da%3A1746135459";
    });

    // 註冊連結
    document.querySelector('.signup-link a').addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = "https://www.spotify.com/tw/signup?flow_id=d18e0c0c-7934-4780-8faa-5f184822d011%3A1746135497&forward_url=https%3A%2F%2Fsupport.spotify.com%2F%3Fflow_ctx%3Dd18e0c0c-7934-4780-8faa-5f184822d011%253A1746135497";
    });
});