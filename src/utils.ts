export function formatCurrency(cost: number): string {
    let digits = cost.toString().split('');
    let res = '';
    for (let i = 0; i < digits.length; i++) {
        if ((digits.length - i - 1) % 3 == 0 && i != digits.length - 1) {
            res += digits[i] + ',';
        }
        else res += digits[i]
    }
    return String.fromCharCode(parseInt('20B9', 16)) + res;
}