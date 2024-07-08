document.addEventListener('DOMContentLoaded', () => {
    const enhanceButton = document.getElementById('enhanceButton');
    const levelDisplay = document.getElementById('level');
    const probabilityDisplay = document.getElementById('probability');
    const messageDisplay = document.getElementById('message');

    let level = 1;

    const getSuccessRate = (level) => {
        if (level >= 15) {
            return 0.2; // 레벨 15 이상에서 성공 확률 20%
        } else if (level >= 10) {
            return 0.3; // 레벨 10 이상에서 성공 확률 30%
        } else if (level >= 5) {
            return 0.4; // 레벨 5 이상에서 성공 확률 40%
        } else {
            return 0.5; // 기본 성공 확률 50%
        }
    };

    const updateProbabilityDisplay = (rate) => {
        probabilityDisplay.textContent = `현재 확률: ${(rate * 100).toFixed(1)}%`;
    };

    enhanceButton.addEventListener('click', () => {
        const successRate = getSuccessRate(level);
        const successProbability = Math.random();

        if (successProbability < successRate) {
            level++;
            messageDisplay.textContent = '강화 성공! 축하합니다!';
        } else {
            level = 1; // 실패 시 레벨을 1로 초기화
            messageDisplay.textContent = '강화 실패... 레벨이 1로 초기화되었습니다.';
        }

        levelDisplay.textContent = `현재 레벨: ${level}`;
        updateProbabilityDisplay(successRate);
    });

    // 초기 확률 표시
    updateProbabilityDisplay(getSuccessRate(level));
});
