document.getElementById('calculator-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputValue = document.getElementById('input_value').value;
    const result = inputValue * 2; // 这里是你的计算逻辑
    document.getElementById('result').innerText = `结果: ${result}`;
});
